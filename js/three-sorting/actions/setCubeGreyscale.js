/** @typedef {import("./types.js").Cube} Cube */

/**
 * Set cube material color to a greyscale value.
 * @param {Cube} cube
 * @param {number} v
 */
const setCubeGreyscale = (cube, v) => {
  const f = Math.max(0, Math.min(255, v)) / 255;
  const vv = Math.max(0, Math.min(255, v));
  if (cube.material?.color?.setRGB) {
    cube.material.color.setRGB(f, f, f);
  } else if (cube.material?.color?.setStyle) {
    cube.material.color.setStyle(`rgb(${vv},${vv},${vv})`);
  }
};

export default setCubeGreyscale;

