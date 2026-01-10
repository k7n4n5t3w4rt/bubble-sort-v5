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
 * Cocktail Shaker Sort (animated):
 * - Sorts `cubeState.pixelGrid` in ascending order, in-place.
 * - Uses adjacent animated swaps via `swapCubes(...)` for all moves.
 * - Calls the injected scheduler after completion to maintain app behaviour.
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for cocktailSort with injected scheduler.
 * Defaults to the app's `scheduleRepeat`, but enables tests to pass
 * without setting timers.
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const cocktailSortFactory =
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

    // Classic Cocktail Shaker Sort using adjacent swaps
    let start = 0;
    let end = pixelGrid.length - 1;
    let swapped = true;

    while (swapped) {
      swapped = false;

      // Forward pass: bubble the largest to the right
      for (let i = start; i < end; i++) {
        if (pixelGrid[i].value > pixelGrid[i + 1].value) {
          await swap(i, i + 1);
          swapped = true;
        }
      }

      // If nothing moved, array is sorted
      if (!swapped) break;

      swapped = false;
      end--;

      // Backward pass: bubble the smallest to the left
      for (let i = end; i > start; i--) {
        if (pixelGrid[i - 1].value > pixelGrid[i].value) {
          await swap(i - 1, i);
          swapped = true;
        }
      }

      start++;
    }

    // Repeat: wait N ms, unsort (diffuse), then start next sort run
    scheduler(cubeState);

    return cubeState;
  };

export default cocktailSortFactory(scheduleRepeat);
