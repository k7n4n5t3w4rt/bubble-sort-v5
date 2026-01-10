// @flow
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
const cycleSort = async (cubeState, speed, scaleZ, anime) => {
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

  // For each cycle start, place the item into its correct position.
  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    // Compute the position where pixelGrid[cycleStart] belongs.
    // Count items strictly less than it (stable placement).
    let itemValue = pixelGrid[cycleStart].value;
    let pos = cycleStart;
    for (let i = 0; i < n; i++) {
      if (pixelGrid[i].value < itemValue) pos++;
    }

    // Skip duplicates to find the next free slot for this value.
    while (pos < n && pixelGrid[pos].value === itemValue) pos++;

    // If already in correct position, continue.
    if (pos === cycleStart || pos >= n) continue;

    // Move the current item into `pos` using adjacent swaps.
    // This shifts the block between cycleStart..pos accordingly.
    if (pos > cycleStart) {
      for (let j = cycleStart; j < pos; j++) {
        await swap(j, j + 1);
      }
    } else {
      for (let j = cycleStart; j > pos; j--) {
        await swap(j - 1, j);
      }
    }

    // Continue cycling: place whatever item is now at cycleStart.
    // Repeat until the item at cycleStart is already correctly placed.
    // This mirrors cycle sort's minimal-write cycles, adapted to swaps.
    // Note: cycleStart remains fixed; each pass moves a new item out.
    while (true) {
      itemValue = pixelGrid[cycleStart].value;
      pos = cycleStart;
      for (let i = 0; i < n; i++) {
        if (pixelGrid[i].value < itemValue) pos++;
      }
      while (pos < n && pixelGrid[pos].value === itemValue) pos++;
      if (pos === cycleStart || pos >= n) break;

      if (pos > cycleStart) {
        for (let j = cycleStart; j < pos; j++) {
          await swap(j, j + 1);
        }
      } else {
        for (let j = cycleStart; j > pos; j--) {
          await swap(j - 1, j);
        }
      }
    }
  }

  // Schedule the next run (unsort then sort again) per app behavior.
  scheduleRepeat(cubeState);

  return cubeState;
};

export default cycleSort;
