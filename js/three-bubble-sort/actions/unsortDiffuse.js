import { inversionRatioFromValues } from "./inversionRatio.js";

const nowMs = () => {
  // eslint-disable-next-line no-undef
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
};

const setCubeGreyscale = (cube, v) => {
  if (
    cube &&
    cube.material &&
    cube.material.color &&
    typeof cube.material.color.setRGB === "function"
  ) {
    const f = Math.max(0, Math.min(255, v)) / 255;
    cube.material.color.setRGB(f, f, f);
    return;
  }

  if (
    cube &&
    cube.material &&
    cube.material.color &&
    typeof cube.material.color.setStyle === "function"
  ) {
    const vv = Math.max(0, Math.min(255, v));
    cube.material.color.setStyle(`rgb(${vv},${vv},${vv})`);
  }
};

/**
 * Progressive "unsort" diffusion: cubes do not move; values/colors diffuse via many
 * small local swaps until the inversion ratio reaches target (or maxMs elapses).
 *
 * Timer/random sources are injectable for deterministic tests.
 *
 * @param {any} cubes
 * @param {{
 *   targetRatio?: number,
 *   maxMs?: number,
 *   msPerCube?: number,
 *   minMaxMs?: number,
 *   cols?: number,
 *   neighborRadius?: number,
 *   tickMs?: number,
 *   checkEveryMs?: number,
 *   maxCatchUpSteps?: number,
 *   swapsPerTick?: number,
 *   randomFn?: () => number,
 *   setIntervalFn?: (cb: (...args:any[]) => void, ms: number) => any,
 *   clearIntervalFn?: (id: any) => void,
 *   nowFn?: () => number,
 *   onProgress?: (ratio: number) => void,
 *   onComplete: (info: { ratio: number, reason: "target" | "timeout" | "noop", elapsedMs?: number, maxMs?: number }) => void,
 * }} options
 * @returns {any}
 */
const unsortDiffuse = (cubes, options = {}) => {
  const {
    targetRatio = 0.5,
    maxMs,
    // Default scaling: 50 cubes => 20s. Keep a 5s minimum for tiny grids.
    msPerCube = 400,
    minMaxMs = 5000,
    cols,
    neighborRadius = 1,
    tickMs = 16,
    checkEveryMs = 100,
    maxCatchUpSteps = 120,
    swapsPerTick,
    randomFn = Math.random,
    setIntervalFn = setInterval,
    clearIntervalFn = clearInterval,
    nowFn = nowMs,
    onProgress,
    onComplete,
  } = options;

  if (typeof onComplete !== "function") {
    throw new Error("unsortDiffuse requires options.onComplete");
  }

  if (!cubes || !Array.isArray(cubes.pixelGrid)) {
    onComplete({ ratio: 0, reason: "noop" });
    return cubes;
  }

  const n = cubes.pixelGrid.length;
  if (n < 2) {
    onComplete({ ratio: 0, reason: "noop" });
    return cubes;
  }

  const resolvedCols =
    (typeof cols === "number" && cols > 0 ? cols : undefined) ??
    (cubes && typeof cubes.gridCols === "number" && cubes.gridCols > 0 ? cubes.gridCols : undefined);
  const use2D = typeof resolvedCols === "number" && resolvedCols > 0 && n % resolvedCols === 0;
  const r0 = Number.isFinite(Number(neighborRadius)) ? Math.floor(Number(neighborRadius)) : 1;
  const radius = Math.max(1, Math.min(10, r0));

  const effectiveMaxMs =
    typeof maxMs === "number" && Number.isFinite(maxMs)
      ? Math.max(0, maxMs)
      : Math.max(0, minMaxMs, n * msPerCube);

  // Cancel any existing diffusion loop.
  if (cubes.diffuseIntervalId != null && typeof clearIntervalFn === "function") {
    clearIntervalFn(cubes.diffuseIntervalId);
  }

  cubes.active = false;
  cubes.diffusing = true;

  // Token guard to prevent stale overlapping intervals from mutating state.
  cubes.diffuseRunToken = (cubes.diffuseRunToken || 0) + 1;
  const runToken = cubes.diffuseRunToken;

  // Pick swaps per tick so total swaps scales ~ O(n^2) given maxMs ~ O(n).
  // This avoids large grids "barely moving" visually.
  const effectiveSwapsPerTick =
    typeof swapsPerTick === "number" && swapsPerTick > 0
      ? Math.floor(swapsPerTick)
      : Math.max(1, Math.floor(n / 5));
  const cappedSwapsPerTick = Math.min(effectiveSwapsPerTick, 2000);

  const startedAt = nowFn();
  let lastTickAt = startedAt;
  let lastCheckAt = startedAt;
  let lastRatio = inversionRatioFromValues(cubes.pixelGrid.map((c) => c && c.bubble_value));

  let completed = false;
  const complete = (reason) => {
    if (completed) return;
    completed = true;

    const endedAt = nowFn();
    const elapsedMs = Math.max(0, endedAt - startedAt);

    if (reason === "timeout" || reason === "target") {
      // Compute a final exact ratio for reporting.
      lastRatio = inversionRatioFromValues(cubes.pixelGrid.map((c) => c && c.bubble_value));
    }

    if (cubes.diffuseIntervalId != null) {
      if (typeof clearIntervalFn === "function") clearIntervalFn(cubes.diffuseIntervalId);
      // Extra safety: attempt global clearInterval too (helps if a custom timer impl is used).
      // eslint-disable-next-line no-undef
      if (typeof clearInterval === "function") clearInterval(cubes.diffuseIntervalId);
    }
    cubes.diffuseIntervalId = null;
    cubes.diffusing = false;

    onComplete({ ratio: lastRatio, reason, elapsedMs, maxMs: effectiveMaxMs });
  };

  if (lastRatio >= targetRatio) {
    complete("target");
    return cubes;
  }

  cubes.diffuseIntervalId = setIntervalFn(() => {
    if (cubes.diffuseRunToken !== runToken) return;

    const t = nowFn();
    if (t - startedAt >= effectiveMaxMs) {
      complete("timeout");
      return;
    }

    // If timers get throttled (common in XR / background tabs), "catch up" by
    // running multiple logical ticks worth of swaps based on elapsed time.
    const dt = Math.max(0, t - lastTickAt);
    lastTickAt = t;
    const rawSteps = tickMs > 0 ? Math.floor(dt / tickMs) : 1;
    const steps = Math.min(
      Math.max(1, rawSteps),
      typeof maxCatchUpSteps === "number" && maxCatchUpSteps > 0 ? maxCatchUpSteps : 120,
    );

    const doSwaps = () => {
      for (let s = 0; s < cappedSwapsPerTick; s++) {
        let i = Math.floor(randomFn() * n);
        if (i < 0) i = 0;
        if (i >= n) i = n - 1;

        let j = i + 1;

        if (use2D) {
          const c = resolvedCols;
          const r = Math.floor(i / c);
          const cc = i % c;

          if (radius <= 1) {
            const dir = Math.floor(randomFn() * 4); // 0=R,1=L,2=D,3=U
            if (dir === 0 && cc + 1 < c) j = i + 1;
            else if (dir === 1 && cc - 1 >= 0) j = i - 1;
            else if (dir === 2 && (r + 1) * c + cc < n) j = i + c;
            else if (dir === 3 && r - 1 >= 0) j = i - c;
            else {
              if (cc + 1 < c) j = i + 1;
              else if (cc - 1 >= 0) j = i - 1;
              else if ((r + 1) * c + cc < n) j = i + c;
              else if (r - 1 >= 0) j = i - c;
            }
          } else {
            // "Neighbors-of-neighbors": pick a random offset within a Manhattan-ish radius
            // but keep it local to preserve the visual diffusion feel.
            // Try a few samples; if we fail (edges/corners), fall back to radius=1.
            let found = false;
            for (let tries = 0; tries < 8; tries++) {
              const dx = Math.floor(randomFn() * (2 * radius + 1)) - radius;
              const dy = Math.floor(randomFn() * (2 * radius + 1)) - radius;
              if (dx === 0 && dy === 0) continue;

              const rr = r + dy;
              const ccc = cc + dx;
              if (rr < 0 || ccc < 0) continue;
              if (rr >= n / c || ccc >= c) continue;
              const idx = rr * c + ccc;
              if (idx < 0 || idx >= n) continue;
              j = idx;
              found = true;
              break;
            }
            if (!found) {
              if (cc + 1 < c) j = i + 1;
              else if (cc - 1 >= 0) j = i - 1;
              else if ((r + 1) * c + cc < n) j = i + c;
              else if (r - 1 >= 0) j = i - c;
            }
          }
        } else {
          // 1D neighborhood: allow jumps within radius.
          // Note: radius=1 preserves prior behavior (adjacent).
          const span = 2 * radius + 1;
          let off = Math.floor(randomFn() * span) - radius;
          if (off === 0) off = randomFn() < 0.5 ? -1 : 1;
          j = i + off;
          if (j < 0) j = 0;
          if (j >= n) j = n - 1;
          if (j === i) j = i === 0 ? 1 : i - 1;
        }

        const a = cubes.pixelGrid[i];
        const b = cubes.pixelGrid[j];
        if (!a || !b) continue;

        const tmp = a.bubble_value;
        a.bubble_value = b.bubble_value;
        b.bubble_value = tmp;
        setCubeGreyscale(a, a.bubble_value);
        setCubeGreyscale(b, b.bubble_value);
      }
    };

    for (let step = 0; step < steps; step++) {
      if (cubes.diffuseRunToken !== runToken || completed) return;
      doSwaps();
    }

    if (t - lastCheckAt >= checkEveryMs) {
      lastCheckAt = t;
      lastRatio = inversionRatioFromValues(cubes.pixelGrid.map((c) => c && c.bubble_value));
      if (typeof onProgress === "function") onProgress(lastRatio);
      if (lastRatio >= targetRatio) {
        complete("target");
      }
    }
  }, tickMs);

  return cubes;
};

export default unsortDiffuse;

