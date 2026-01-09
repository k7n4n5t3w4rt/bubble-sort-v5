/* eslint-disable import/no-unused-modules */
/**
 * Swap two indices immediately in the pixelGrid and clear moving.
 * @param {import("./types.js").CubeState} cubeState
 * @param {number} a
 * @param {number} b
 */
const swapCubes = (cubeState, a, b) => {
  const tmp = cubeState.pixelGrid[a];
  cubeState.pixelGrid[a] = cubeState.pixelGrid[b];
  cubeState.pixelGrid[b] = tmp;
  cubeState.moving = false;
};

export default swapCubes;
