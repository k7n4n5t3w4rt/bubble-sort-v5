// @flow
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
 * Shell Sort using animated adjacent swaps.
 * Implements classic gap-based insertion; each non-adjacent movement is
 * realized as a sequence of adjacent swaps to maintain visual consistency.
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
const shellSort = async (cubeState, speed, scaleZ, anime) => {
  // Pause the render loop for the duration of sorting.
  if (cubeState) cubeState.active = false;
  const pixelGrid = cubeState.pixelGrid;

  /**
   * Swap two adjacent elements in pixelGrid using animated swap.
   * Await the animation to keep operations in order.
   * @param {number} i
   * @param {number} j
   */
  const swap = async (i, j) => {
    if (i === j) return;
    await swapCubes(cubeState, i, j, scaleZ, speed, anime);
  };

  const n = pixelGrid.length;
  // Standard Shell Sort gap sequence: n/2, ..., 1
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      // Perform gapped insertion: compare j-gap and j
      let j = i;
      while (j - gap >= 0 && pixelGrid[j - gap].value > pixelGrid[j].value) {
        // Move the element at index j left by `gap` positions
        // using adjacent swaps only.
        for (let k = j; k > j - gap; k--) {
          await swap(k - 1, k);
        }
        j -= gap;
      }
    }
  }

  // Schedule a repeat run (unsort then sort again) to maintain visual behavior.
  scheduleRepeat(cubeState);

  return cubeState;
};

export default shellSort;
