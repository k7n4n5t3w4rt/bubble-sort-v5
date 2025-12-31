/**
 * Compute inversion ratio for an array of values in [0..255].
 *
 * inversionRatio = inversions / (n*(n-1)/2)
 *
 * Uses a Fenwick tree over value frequencies (size 256) to compute the exact
 * inversion count in O(n log 256).
 *
 * @param {ArrayLike<number>} values
 * @param {{ bit?: Uint32Array | number[] } | undefined} [scratch]
 * @returns {number} inversion ratio in [0..1]
 */
export const inversionRatioFromValues = (values, scratch) => {
  if (!values || typeof values.length !== "number") return 0;
  const n = values.length | 0;
  if (n < 2) return 0;

  // Fenwick tree (1-indexed) for frequencies of values 0..255 (mapped to 1..256).
  const size = 256;
  /** @type {Uint32Array | number[]} */
  const bit =
    scratch && scratch.bit
      ? scratch.bit
      : // default: allocate if caller didn't provide scratch storage
      new Uint32Array(size + 1);
  // Reset frequencies
  if (typeof bit.fill === "function") bit.fill(0);
  else {
    for (let i = 0; i <= size; i++) bit[i] = 0;
  }

  const add = (idx1, delta) => {
    for (let i = idx1; i <= size; i += i & -i) bit[i] += delta;
  };

  const sum = (idx1) => {
    let s = 0;
    for (let i = idx1; i > 0; i -= i & -i) s += bit[i];
    return s;
  };

  let inversions = 0;
  let seen = 0;

  // Count pairs (i<j) where values[i] > values[j].
  // For each v, number of prior values greater than v = seen - count(<=v).
  for (let k = 0; k < n; k++) {
    const raw = values[k];
    const v = Number.isFinite(raw) ? Math.max(0, Math.min(255, raw)) : 0;
    const idx = (v | 0) + 1;
    const leq = sum(idx);
    inversions += (seen - leq);
    add(idx, 1);
    seen += 1;
  }

  const denom = (n * (n - 1)) / 2;
  return denom > 0 ? inversions / denom : 0;
};

export default inversionRatioFromValues;

