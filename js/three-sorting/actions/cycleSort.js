// --------------------------------------------------
// Cycle Sort (adjacent-swaps variant for visualisation)
// --------------------------------------------------
/**
 * This implementation preserves the app's visual constraints:
 * - Sets `cubeState.active = false` before sorting (prevents re-entry).
 * - Uses animated adjacent swaps via `swapCubes(...)` for all moves.
 * - Calls `scheduleRepeat(cubeState)` after completion.
 *
 * It emulates Cycle Sort's placement logic, but moves items to their
 * target positions using a series of adjacent swaps. This keeps the
 * animation consistent with other algorithms in the project.
 */

// --------------------------------------------------
// TYPEDEFS
// --------------------------------------------------
/** @typedef {import("./types.js").CubeState} CubeState */
/** @typedef {import("./types.js").AnimeRunner} AnimeRunner */

// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import swapCubes from "./swapCubes.js";
import scheduleRepeat from "./scheduleRepeat.js";

/**
 * Cycle Sort using adjacent swaps for visualisation consistency.
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for cycleSort with injected scheduler.
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const cycleSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
    // Stop the render loop from invoking sorting again on the next frame.
    if (cubeState) cubeState.active = false;

    const pixelGrid = cubeState.pixelGrid;
    const n = pixelGrid.length;

    /**
     * Perform an adjacent animated swap and await completion to maintain order.
     * @param {number} i
     * @param {number} j
     */
    const swap = async (i, j) => {
      if (i === j) return;
      await swapCubes(cubeState, i, j, scaleZ, speed, anime);
    };

    // --------------------------------------------------
    // Stable target index helpers (prevents infinite loops with duplicates)
    // --------------------------------------------------
    /**
     * Count items strictly less than `value`.
     * @param {number} value
     * @returns {number}
     */
    const countLess = (value) => {
      let c = 0;
      for (let i = 0; i < n; i++) {
        if (pixelGrid[i].value < value) c++;
      }
      return c;
    };

    /**
     * Count items equal to `value` that appear before `atIndex`.
     * @param {number} value
     * @param {number} atIndex
     * @returns {number}
     */
    const countEqualBefore = (value, atIndex) => {
      let c = 0;
      for (let i = 0; i < atIndex; i++) {
        if (pixelGrid[i].value === value) c++;
      }
      return c;
    };

    /**
     * Count items equal to `value` in the entire grid.
     * @param {number} value
     * @returns {number}
     */
    const countEqualTotal = (value) => {
      let c = 0;
      for (let i = 0; i < n; i++) {
        if (pixelGrid[i].value === value) c++;
      }
      return c;
    };

    // Helper to compute stable target index for a given value at index.
    const targetIndexForValue = (value, atIndex) =>
      countLess(value) + countEqualBefore(value, atIndex);

    // For each cycle start, bring the correct item into place using swaps.
    for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
      if (
        targetIndexForValue(pixelGrid[cycleStart].value, cycleStart) !==
        cycleStart
      ) {
        // Determine which value must occupy `cycleStart` by stable ordering:
        // For value `v`, its stable block is from `start = countLess(v)`
        // to `end = start + countEqualTotal(v) - 1`. The value whose block
        // contains `cycleStart` is the one to place.

        let valueToPlace = null;
        let placeStart = 0;
        for (let i = 0; i < n; i++) {
          const v = pixelGrid[i].value;
          const start = countLess(v);
          const total = countEqualTotal(v);
          const end = start + total - 1;
          if (cycleStart >= start && cycleStart <= end) {
            valueToPlace = v;
            placeStart = start;
            break;
          }
        }

        if (valueToPlace != null) {
          const ordinal = cycleStart - placeStart;
          let k = -1;
          for (let i = 0; i < n; i++) {
            if (
              pixelGrid[i].value === valueToPlace &&
              countEqualBefore(valueToPlace, i) === ordinal
            ) {
              k = i;
              break;
            }
          }

          if (k > cycleStart) {
            for (let j = k; j > cycleStart; j--) {
              await swap(j - 1, j);
            }
          } else if (k >= 0 && k < cycleStart) {
            for (let j = k; j < cycleStart; j++) {
              await swap(j, j + 1);
            }
          }
        }
      }
    }

    scheduler(cubeState);
    return cubeState;
  };

export default cycleSortFactory(scheduleRepeat);
