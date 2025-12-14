/**
 * Compute inversion ratio for an array of values in [0..255].
 *
 * inversionRatio = inversions / (n*(n-1)/2)
 *
 * Uses a Fenwick tree over value frequencies (size 256) to compute the exact
 * inversion count in O(n log 256).
 *
 * @param {number[]} values
 * @returns {number} inversion ratio in [0..1]
 */
export const inversionRatioFromValues = (values) => {
  if (!Array.isArray(values)) return 0;
  const n = values.length;
  if (n < 2) return 0;

  // Fenwick tree (1-indexed) for frequencies of values 0..255 (mapped to 1..256).
  const size = 256;
  /** @type {number[]} */
  const bit = new Array(size + 1).fill(0);

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

