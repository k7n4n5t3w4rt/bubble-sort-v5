// ------------------------------------------------------------
// TYPES
// ------------------------------------------------------------
/** @typedef {import("./types.js").Cube} Cube */
// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------
import { inversionRatioFromValues } from "./inversionRatio.js";
import nowMs from "./nowMs.js";
import setCubeGreyscale from "./setCubeGreyscale.js";
import fillValuesBuffer from "./fillValuesBuffer.js";
import makeDiffuseTick from "./makeDiffuseTick.js";

/**
 * Progressive "unsort" diffusion: cubes do not move; values/colors diffuse via many
 * small local swaps until the inversion ratio reaches target (or maxMs elapses).
 *
 * Timer/random sources are injectable for deterministic tests.
 *
 * @param {Cube[]} cubes
 * @typedef {Object} UnsortDiffuseDeps
 * @property {(cb: (...args:any[]) => void, ms: number) => any} [setInterval]
 * @property {(id: any) => void} [clearInterval]
 * @property {() => number} [nowFn]
 */

/**
 * @typedef {Object} UnsortDiffuseOptions
 * @property {number} [targetRatio]
 * @property {number} [maxMs]
 * @property {number} [msPerCube]
 * @property {number} [minMaxMs]
 * @property {number} [cols]
 * @property {number} [neighborRadius]
 * @property {number} [tickMs]
 * @property {number} [checkEveryMs]
 * @property {number} [maxCatchUpSteps]
 * @property {number} [swapsPerTick]
 * @property {() => number} [randomFn]
 * @property {(ratio: number) => void} [onProgress]
 * @property {(info: { ratio: number, reason: "target" | "timeout" | "noop", elapsedMs?: number, maxMs?: number }) => void} [onComplete]
 */

/**
 * Factory to create an unsortDiffuse function with injected timers.
 * @param {(cb: (...args:any[]) => any, ms: number) => any} [setInterval]
 * @param {(id: any) => void} [clearInterval]
 * @param {() => number} [nowFn]
 */
export const makeUnsortDiffuse = (
  setInterval = globalThis.setInterval,
  clearInterval = globalThis.clearInterval,
  nowFn = nowMs,
) => {

  /**
   * @param {any} cubes
   * @param {UnsortDiffuseOptions} [options]
   * @returns {any}
   */
  return (cubes, options = {}) => {
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

    // Reuse buffers to avoid hot-path allocations.
    // @ts-ignore - ad-hoc fields on cubes
    if (!cubes.diffuseValuesBuffer || cubes.diffuseValuesBuffer.length !== n) {
      // @ts-ignore - ad-hoc fields on cubes
      cubes.diffuseValuesBuffer = new Uint16Array(n);
    }
    // @ts-ignore - ad-hoc fields on cubes
    if (!cubes.diffuseInversionScratch || !cubes.diffuseInversionScratch.bit) {
      // @ts-ignore - ad-hoc fields on cubes
      cubes.diffuseInversionScratch = { bit: new Uint32Array(257) };
    }

    const resolvedCols =
      typeof cols === "number" && cols > 0 ? cols : Math.max(1, Number(cubes.gridCols || 1));
    const use2D = resolvedCols > 0 && n % resolvedCols === 0;
    const r0 = Number.isFinite(Number(neighborRadius)) ? Math.floor(Number(neighborRadius)) : 1;
    const radius = Math.max(1, Math.min(10, r0));

    const effectiveMaxMs =
      typeof maxMs === "number" && Number.isFinite(maxMs)
        ? Math.max(0, maxMs)
        : Math.max(0, minMaxMs, n * msPerCube);

    // Cancel any existing diffusion loop.
    if (cubes.diffuseIntervalId != null && typeof clearInterval === "function") {
      clearInterval(cubes.diffuseIntervalId);
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
    // @ts-ignore - ad-hoc fields on cubes
    let lastRatio = inversionRatioFromValues(
      fillValuesBuffer(cubes, n),
      cubes.diffuseInversionScratch,
    );

    const completedRef = { value: false };
    const complete = (reason) => {
      if (completedRef.value) return;
      completedRef.value = true;

      const endedAt = nowFn();
      const elapsedMs = Math.max(0, endedAt - startedAt);

      if (reason === "timeout" || reason === "target") {
        // Compute a final exact ratio for reporting.
        // @ts-ignore - ad-hoc fields on cubes
        lastRatio = inversionRatioFromValues(
          fillValuesBuffer(cubes, n),
          cubes.diffuseInversionScratch,
        );
      }

      if (cubes.diffuseIntervalId != null) {
        if (typeof clearInterval === "function") clearInterval(cubes.diffuseIntervalId);
        // Extra safety: attempt global clearInterval too (helps if a custom timer impl is used).
        // eslint-disable-next-line no-undef
        if (clearInterval !== globalThis.clearInterval && typeof globalThis.clearInterval === "function") {
          globalThis.clearInterval(cubes.diffuseIntervalId);
        }
      }
      cubes.diffuseIntervalId = null;
      cubes.diffusing = false;

      onComplete({ ratio: lastRatio, reason, elapsedMs, maxMs: effectiveMaxMs });
    };

    if (lastRatio >= targetRatio) {
      complete("target");
      return cubes;
    }

    const state = {
      lastTickAt,
      lastCheckAt,
      lastRatio,
      startedAt,
      completedRef,
    };

    const tick = makeDiffuseTick({
      cubes,
      n,
      runToken,
      effectiveMaxMs,
      tickMs,
      maxCatchUpSteps,
      cappedSwapsPerTick,
      use2D,
      resolvedCols,
      radius,
      randomFn,
      setCubeGreyscale,
      checkEveryMs,
      targetRatio,
      onProgress: /** @type {((ratio:number)=>void)|undefined} */ (onProgress),
      complete,
      nowFn: /** @type {() => number} */ (nowFn),
      state,
      fillValuesBuffer,
      inversionRatioFromValues,
    });

    cubes.diffuseIntervalId = setInterval(tick, tickMs);

    return cubes;
  };
};

const unsortDiffuse = makeUnsortDiffuse();
// Export the function that uses the global setInterval and clearInterval as
// default
export default unsortDiffuse;

