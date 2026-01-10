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
 * Bitonic Sort visualisation using only adjacent animated swaps.
 *
 * Implementation notes:
 * - Classic bitonic sort networks compare elements at stride distances; here we
 *   emulate merges via adjacent bubble passes to maintain the visual constraint
 *   of adjacent `swapCubes(...)` swaps.
 * - For each block size `k`, we sort first half ascending, second half descending,
 *   then perform an ascending merge over the whole block, all via adjacent comparisons.
 * - Preserves in-place sorting and schedules repeat runs.
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for bitonicSort allowing injection of the repeat scheduler (for tests).
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const bitonicSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
    // Stop the render loop from invoking another sort on the next frame.
    if (cubeState) cubeState.active = false;
    const pixelGrid = cubeState.pixelGrid;

    /**
     * Adjacent swap helper using the animation.
     * @param {number} i
     * @param {number} j
     */
    const swap = async (i, j) => {
      if (i === j) return;
      await swapCubes(cubeState, i, j, scaleZ, speed, anime);
    };

    /**
     * Bubble pass within [start, end) range.
     * @param {number} start
     * @param {number} end
     * @param {boolean} ascending
     */
    const bubbleRegion = async (start, end, ascending) => {
      const n = end - start;
      if (n <= 1) return;
      for (let i = 0; i < n - 1; i++) {
        for (let j = start; j < end - i - 1; j++) {
          const a = pixelGrid[j].value;
          const b = pixelGrid[j + 1].value;
          if (ascending ? a > b : a < b) {
            await swap(j, j + 1);
          }
        }
      }
    };

    // Bitonic-style stages via adjacent bubble passes.
    const n = pixelGrid.length;
    for (let k = 2; k <= n; k *= 2) {
      for (let start = 0; start < n; start += k) {
        const end = Math.min(start + k, n);
        const half = start + Math.floor((end - start) / 2);
        // Build bitonic sequence: first half ascending, second half descending
        await bubbleRegion(start, half, true);
        await bubbleRegion(half, end, false);
        // Merge into ascending order across the whole block
        await bubbleRegion(start, end, true);
      }
    }

    // Final pass to ensure fully sorted if n is not a power of two
    await bubbleRegion(0, n, true);

    // Schedule repeat run (unsort/diffuse then restart)
    scheduler(cubeState);

    return cubeState;
  };

export default bitonicSortFactory(scheduleRepeat);
