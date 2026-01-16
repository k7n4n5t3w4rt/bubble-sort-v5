// @flow
// --------------------------------------------------
// BINARY INSERTION SORT (ANIMATED)
// --------------------------------------------------
// This sorter performs a classic binary insertion sort over cubeState.pixelGrid.
// For each position i, it locates the insertion index within the already-sorted
// prefix [0, i) using binary search, then moves the cube at i into that slot
// using a series of adjacent animated swaps. This preserves the existing visual
// language (neighbor swaps via swapCubes) while reducing comparisons compared
// to plain insertion sort.

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
 * Factory for binaryInsertionSort that allows injecting the repeat scheduler.
 *
 * The returned function:
 * - Marks the CubeState as inactive so render.js will not schedule a second
 *   concurrent sort.
 * - Uses swapCubes to animate adjacent swaps while performing an in-place
 *   binary insertion sort on cubeState.pixelGrid.
 * - Invokes the provided scheduler when sorting completes so the repeat
 *   (unsort + next run) behaviour remains consistent with other algorithms.
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const binaryInsertionSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
    // Ensure the main loop does not trigger another sort while this one runs.
    if (cubeState) cubeState.active = false;
    const pixelGrid = cubeState.pixelGrid;

    /**
     * Swap two elements in pixelGrid using the shared animated swap helper.
     * Awaiting the result keeps all swaps sequential and visually legible.
     *
     * @param {number} i
     * @param {number} j
     * @returns {Promise<void>}
     */
    const swap = async (i, j) => {
      if (i === j) return;
      await swapCubes(cubeState, i, j, scaleZ, speed, anime);
    };

    const n = pixelGrid.length;

    // Binary Insertion Sort:
    // Maintain the prefix [0, i) in sorted order. For each element at i,
    // locate its insertion index using binary search over the prefix, then
    // move it into place by bubbling it leftwards using adjacent swaps.
    for (let i = 1; i < n; i++) {
      const targetValue = pixelGrid[i].value;

      // Binary search over [0, i) to find the first index where
      // pixelGrid[index].value > targetValue. That index is the insertion
      // position for the cube currently at i.
      let lo = 0;
      let hi = i - 1;
      let insertPos = i; // default: keep at current position

      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const midValue = pixelGrid[mid].value;
        if (targetValue < midValue) {
          insertPos = mid;
          hi = mid - 1;
        } else {
          lo = mid + 1;
        }
      }

      // If insertPos === i the element is already in the correct place.
      if (insertPos === i) continue;

      // Move the cube at i into the insertion slot using adjacent swaps.
      // Repeatedly swap (j-1, j) so the element at j walks left towards
      // insertPos, while the (conceptual) sorted block slides right.
      for (let j = i; j > insertPos; j--) {
        await swap(j - 1, j);
      }
    }

    // Schedule the usual post-sort behaviour (pause, unsort, next run).
    scheduler(cubeState);

    return cubeState;
  };

// Default export uses the real scheduler so production behaviour matches
// the other sort implementations.
export default binaryInsertionSortFactory(scheduleRepeat);
