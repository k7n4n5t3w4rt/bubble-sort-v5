// --------------------------------------------------
// TYPES (JSDoc only)
// --------------------------------------------------
/** @typedef {import("./types.js").CubeState} CubeState */
/** @typedef {import("./types.js").AnimeRunner} AnimeRunner */
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import swapCubes from "./swapCubes.js";
import scheduleRepeat from "./scheduleRepeat.js";

/**
 * Comb Sort (canonical gapped swap version):
 * - Sorts `cubeState.pixelGrid` in ascending order, in-place.
 * - Uses a decreasing gap strategy (shrink factor ~1.3).
 * - When a pair at distance `gap` is out of order, performs a single
 *   swap of that gapped pair and continues scanning.
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for combSort with injected scheduler.
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const combSortFactory =
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

    // Classic comb sort gap shrink logic
    const shrink = 1.3;
    const n = pixelGrid.length;
    let gap = n;
    let swapped = true;

    while (gap > 1 || swapped) {
      // Update gap
      gap = Math.floor(gap / shrink);
      if (gap < 1) gap = 1;

      swapped = false;

      // Compare elements at i and i+gap. When out of order, perform a
      // single gapped swap (canonical comb sort behaviour).
      for (let i = 0; i + gap < n; i++) {
        const grid = cubeState.pixelGrid || pixelGrid;
        const j = i + gap;
        if (grid[i].value > grid[j].value) {
          await swap(i, j);
          swapped = true;
        }
      }
    }

    // Repeat: wait N ms, unsort (diffuse), then start next sort run
    scheduler(cubeState);

    return cubeState;
  };

export default combSortFactory(scheduleRepeat);
