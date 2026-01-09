/** @typedef {import("./types.js").Cube} Cube */

/**
 * Fill the provided buffer with bubble_value data from cubes.pixelGrid.
 * @param {{ pixelGrid: Cube[], diffuseValuesBuffer?: Uint16Array }} cubes
 * @param {number} n
 * @returns {Uint16Array}
 */
const fillValuesBuffer = (cubes, n) => {
  // @ts-ignore - ad-hoc fields on cubes
  if (!cubes.diffuseValuesBuffer || cubes.diffuseValuesBuffer.length !== n) {
    // @ts-ignore - ad-hoc fields on cubes
    cubes.diffuseValuesBuffer = new Uint16Array(n);
  }
  // @ts-ignore - ad-hoc fields on cubes
  const buf = cubes.diffuseValuesBuffer;
  for (let i = 0; i < n; i++) {
    const c = cubes.pixelGrid[i];
    const v = c && Number.isFinite(c.bubble_value) ? c.bubble_value : 0;
    buf[i] = v & 0xffff;
  }
  return buf;
};

export default fillValuesBuffer;
