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
 * Insertion Sort (animated): sorts `cubeState.pixelGrid` in ascending order, in-place.
 * Uses adjacent animated swaps to move the current element left until positioned.
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for insertionSort with injected scheduler.
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const insertionSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
    // Stop the render loop from invoking another sort next frame.
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

    // Classic in-place insertion sort using adjacent swaps
    const n = pixelGrid.length;
    for (let i = 1; i < n; i++) {
      let j = i;
      // Move current element left while it's less than the previous
      while (j > 0 && pixelGrid[j - 1].value > pixelGrid[j].value) {
        await swap(j - 1, j);
        j--;
      }
    }

    // Repeat: wait N ms, unsort (diffuse), then start next sort run
    scheduler(cubeState);

    return cubeState;
  };

export default insertionSortFactory(scheduleRepeat);
