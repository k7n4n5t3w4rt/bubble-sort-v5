// --------------------------------------------------
// TYPES
// --------------------------------------------------
/** @typedef {import("./types.js").CubeState} CubeState */
/** @typedef {import("./types.js").AnimeRunner} AnimeRunner */
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import swapCubes from "./swapCubes.js";
import scheduleRepeat from "./scheduleRepeat.js";

/**
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
const bubbleSort = async (cubeState, speed, scaleZ, anime) => {
  // Stop the render loop from invoking quickSort again next frame.
  if (cubeState) cubeState.active = false;
  const pixelGrid = cubeState.pixelGrid;

  /**
   * Swap two elements in pixelGrid using animated swap.
   * Await the animation to keep operations in order.
   * @param {number} i
   * @param {number} j
   */
  const swap = async (i, j) => {
    if (i === j) return;
    await swapCubes(cubeState, i, j, scaleZ, speed, anime);
  };

  // Bubble sort algorithm goes here
  const n = pixelGrid.length;
  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (pixelGrid[j].value > pixelGrid[j + 1].value) {
        await swap(j, j + 1);
        swapped = true;
      }
    }
    // If no two elements were swapped by inner loop, then break
    if (!swapped) break;
  }

  // Repeat: wait N ms, unsort (diffuse), then start next quick sort run
  scheduleRepeat(cubeState);

  return cubeState;
};

export default bubbleSort;
