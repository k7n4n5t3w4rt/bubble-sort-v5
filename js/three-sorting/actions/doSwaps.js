/** @typedef {import("./types.js").Cube} Cube */

/**
 * Perform cappedSwapsPerTick swaps on cubes.pixelGrid using 1D/2D neighborhoods.
 * @param {{ pixelGrid: Cube[] }} cubes
 * @param {number} n
 * @param {number} cappedSwapsPerTick
 * @param {boolean} use2D
 * @param {number} resolvedCols
 * @param {number} radius
 * @param {() => number} randomFn
 * @param {(cube: Cube, v: number) => void} setCubeGreyscale
 */
const doSwaps = (
  cubes,
  n,
  cappedSwapsPerTick,
  use2D,
  resolvedCols,
  radius,
  randomFn,
  setCubeGreyscale,
) => {
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

    const tmpBubble = a.bubble_value;
    const tmpSelection = a.selection_value;
    const tmpValue = a.value;

    a.bubble_value = b.bubble_value;
    b.bubble_value = tmpBubble;

    a.selection_value = b.selection_value;
    b.selection_value = tmpSelection;

    a.value = b.value;
    b.value = tmpValue;

    setCubeGreyscale(a, a.bubble_value);
    setCubeGreyscale(b, b.bubble_value);
  }
};

export default doSwaps;

