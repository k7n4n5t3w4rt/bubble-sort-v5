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
 * Factory for Pancake Sort.
 *
 * Pancake Sort repeatedly brings the maximum value in the
 * current prefix [0..currSize-1] to the front with a flip,
 * then flips that value into its final position at currSize-1.
 *
 * All logical swaps are performed via the animated swapCubes
 * helper to keep the visualisation consistent.
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const pancakeSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
    if (!cubeState || !Array.isArray(cubeState.pixelGrid)) {
      return cubeState;
    }

    // Stop the render loop from invoking another sort next frame.
    cubeState.active = false;

    const pixelGrid = cubeState.pixelGrid;
    const n = pixelGrid.length;

    if (n <= 1) {
      scheduler(cubeState);
      return cubeState;
    }

    /**
     * Swap two elements in pixelGrid using animated swap.
     * Await the animation to keep operations in order.
     *
     * @param {number} i
     * @param {number} j
     * @returns {Promise<void>}
     */
    const swap = async (i, j) => {
      if (i === j) return;
      await swapCubes(cubeState, i, j, scaleZ, speed, anime);
    };

    /**
     * Reverse the prefix [0..end] in-place using pairwise swaps.
     *
     * @param {number} end
     * @returns {Promise<void>}
     */
    const flipPrefix = async (end) => {
      let start = 0;
      let finish = end;
      while (start < finish) {
        await swap(start, finish);
        start += 1;
        finish -= 1;
      }
    };

    /**
     * Find the index of the maximum value in pixelGrid[0..end].
     *
     * @param {number} end
     * @returns {number}
     */
    const indexOfMaxInPrefix = (end) => {
      let maxIdx = 0;
      let maxVal = pixelGrid[0].value;
      for (let i = 1; i <= end; i++) {
        const v = pixelGrid[i].value;
        if (v > maxVal) {
          maxVal = v;
          maxIdx = i;
        }
      }
      return maxIdx;
    };

    // Core Pancake Sort loop: shrink the unsorted prefix from the end.
    for (let currSize = n; currSize > 1; currSize--) {
      const maxIdx = indexOfMaxInPrefix(currSize - 1);

      // If the maximum is already at the end of the current prefix, skip.
      if (maxIdx === currSize - 1) {
        continue;
      }

      // Step 1: flip max element to the front, if needed.
      if (maxIdx > 0) {
        await flipPrefix(maxIdx);
      }

      // Step 2: flip it from the front to its final position.
      await flipPrefix(currSize - 1);
    }

    // Schedule the next run (unsort + re-sort cycle).
    scheduler(cubeState);

    return cubeState;
  };

export default pancakeSortFactory(scheduleRepeat);
