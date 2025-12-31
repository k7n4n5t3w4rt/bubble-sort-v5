/**
 * Swap two indices in the pixelGrid without animation.
 * @param {import("./types.js").CubeState} cubeState
 * @param {number} a
 * @param {number} b
 */
const applySwap = (cubeState, a, b) => {
  const tmp = cubeState.pixelGrid[a];
  cubeState.pixelGrid[a] = cubeState.pixelGrid[b];
  cubeState.pixelGrid[b] = tmp;
};

export default applySwap;

