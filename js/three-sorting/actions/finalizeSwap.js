/**
 * Finalize a swap by placing cubes at each other's start positions
 * and updating the pixel grid, then invoking onDone.
 * @param {Object} params
 * @param {import("./types.js").CubeState} params.cubeState
 * @param {any} params.cubeA
 * @param {any} params.cubeB
 * @param {number} params.cubeAStartX
 * @param {number} params.cubeAStartY
 * @param {number} params.cubeAStartZ
 * @param {number} params.cubeBStartX
 * @param {number} params.cubeBStartY
 * @param {number} params.cubeBStartZ
 * @param {number} params.i
 * @param {number} params.j
 * @param {() => boolean} [params.aDoneRef]
 * @param {() => boolean} [params.bDoneRef]
 */
const finalizeSwap = ({
  cubeState,
  cubeA,
  cubeB,
  cubeAStartX,
  cubeAStartY,
  cubeAStartZ,
  cubeBStartX,
  cubeBStartY,
  cubeBStartZ,
  i,
  j,
}) => {
  cubeA.position.x = cubeBStartX;
  cubeA.position.y = cubeBStartY;
  cubeA.position.z = cubeBStartZ;
  cubeB.position.x = cubeAStartX;
  cubeB.position.y = cubeAStartY;
  cubeB.position.z = cubeAStartZ;

  cubeState.moving = false;
  // Always perform the swap in the grid.
  cubeState.pixelGrid[i] = cubeB;
  cubeState.pixelGrid[j] = cubeA;
};

export default finalizeSwap;
