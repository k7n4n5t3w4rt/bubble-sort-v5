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
 * Shell Sort using canonical gapped insertion realized as visual pairwise
 * swaps.
 *
 * For each gap, runs a standard insertion sort where elements are compared
 * by `cube.value`. Each logical "shift step" in the gapped insertion is
 * implemented as a direct swap between indices `j - gap` and `j`, using the
 * original swap animation so that cube A and cube B fly out in opposite
 * directions before landing in each other's positions.
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for shellSort with injected scheduler.
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const shellSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
    // Pause the render loop for the duration of sorting.
    if (cubeState) cubeState.active = false;
    const pixelGrid = cubeState.pixelGrid;
    /**
     * Swap two elements in pixelGrid using the standard animated swap.
     * Await the animation so each visual pairwise swap completes before
     * continuing the current gapped insertion step.
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
    // Standard Shell Sort gap sequence: n/2, ..., 1
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i++) {
        // Perform gapped insertion by repeatedly swapping the element at j
        // left by `gap` positions while it is smaller than its gapped
        // predecessor. Each step is a visual pairwise swap using the
        // original animation.
        let j = i;
        while (j >= gap && pixelGrid[j - gap].value > pixelGrid[j].value) {
          await swap(j - gap, j);
          j -= gap;
        }
      }
    }

    // Schedule a repeat run (unsort then sort again) to maintain visual behavior.
    scheduler(cubeState);

    return cubeState;
  };

export default shellSortFactory(scheduleRepeat);
