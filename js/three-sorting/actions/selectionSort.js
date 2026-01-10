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
 * @param {AnimeRunner} anime:w
 *
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for selectionSort with injected scheduler.
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const selectionSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
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

    // Selection sort algorithm goes here
    const n = pixelGrid.length;
    for (let i = 0; i < n - 1; i++) {
      // Find the minimum element in unsorted array
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (pixelGrid[j].value < pixelGrid[minIdx].value) {
          minIdx = j;
        }
      }
      // Swap the found minimum element with the first element
      await swap(i, minIdx);
    }

    // Repeat: wait N ms, unsort (diffuse), then start next sort run
    scheduler(cubeState);

    return cubeState;
  };

export default selectionSortFactory(scheduleRepeat);
