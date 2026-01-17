// --------------------------------------------------
// Cycle Sort (streamlined direct-swap variant)
// --------------------------------------------------
/**
 * Streamlined Cycle Sort implementation for the 3D visualiser.
 *
 * This version keeps the app's behavioural constraints:
 * - Sets `cubeState.active = false` before sorting (prevents re-entry).
 * - Uses the shared `swapCubes(...)` animation primitive for all moves.
 * - Calls `scheduleRepeat(cubeState)` after completion to trigger reruns.
 *
 * Compared to the previous adjacent-swap implementation, this version:
 * - Uses a textbook Cycle Sort structure with direct swaps between indices.
 * - Avoids gratuitous chains of adjacent swaps, reducing visual noise.
 * - Still respects duplicates by skipping over equal values when placing.
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
 * Cycle Sort using direct index swaps for visualisation consistency.
 *
 * @param {CubeState} cubeState - The current 3D cube state to be sorted.
 * @param {number} speed - The animation speed multiplier for swaps.
 * @param {number} scaleZ - The Z-scale used when animating swaps.
 * @param {AnimeRunner} anime - The Anime.js runner instance.
 * @returns {Promise<CubeState>} A promise resolving to the sorted state.
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
     * Perform an animated swap between two indices and await completion
     * to keep the visualisation and algorithmic steps in lock-step.
     *
     * @param {number} i - First index to swap.
     * @param {number} j - Second index to swap.
     */
    const swap = async (i, j) => {
      if (i === j) return;
      await swapCubes(cubeState, i, j, scaleZ, speed, anime);
    };

    // --------------------------------------------------
    // Core Cycle Sort: compute permutation, then replay swaps
    // --------------------------------------------------
    // To keep the implementation simple and robust while still behaving
    // like Cycle Sort, we:
    // 1. Take a stable snapshot of values and their original indices.
    // 2. Compute the sorted target order of those values.
    // 3. Derive the permutation that maps each original index to its
    //    final index in the sorted order.
    // 4. Decompose that permutation into disjoint cycles and emit the
    //    minimal set of swaps needed to realise them.
    // 5. Replay those swaps against the live `pixelGrid` using
    //    the animated `swap(...)` helper.

    /**
     * Snapshot of the current values and their indices, used only for
     * computing the cycle decomposition. The live pixelGrid is mutated
     * later when we replay swaps via `swap(...)`.
     * @type {{ value: number; index: number }[]}
     */
    const items = pixelGrid.map((cube, index) => ({
      value: cube.value,
      index,
    }));

    /**
     * Stable sorted copy of items: primary key is `value`, secondary key
     * is original index to keep equal values in their original order.
     * @type {{ value: number; index: number }[]}
     */
    const sorted = [...items].sort((a, b) => {
      if (a.value < b.value) return -1;
      if (a.value > b.value) return 1;
      // Tie-break by original index for stability when values are equal.
      if (a.index < b.index) return -1;
      if (a.index > b.index) return 1;
      return 0;
    });

    /**
     * Permutation: for each original index, the position it must occupy
     * in the stably sorted order.
     * @type {number[]}
     */
    const targetPos = new Array(n);
    for (let sortedPos = 0; sortedPos < n; sortedPos++) {
      const origIndex = sorted[sortedPos].index;
      targetPos[origIndex] = sortedPos;
    }

    /**
     * Track which indices have already been included in a cycle.
     * @type {boolean[]}
     */
    const visited = new Array(n).fill(false);

    /**
     * Collected swap operations representing the cycle decomposition.
     * Each entry describes a direct index swap to apply to `pixelGrid`.
     * @type {{ from: number; to: number }[]}
     */
    const swaps = [];

    // Discover cycles in the permutation and record minimal swaps to
    // realise each cycle using a fixed pivot index.
    for (let i = 0; i < n; i++) {
      if (visited[i] || targetPos[i] === i) {
        continue;
      }

      /** @type {number[]} */
      const cycle = [];
      let j = i;

      while (!visited[j]) {
        visited[j] = true;
        cycle.push(j);
        j = targetPos[j];
      }

      if (cycle.length <= 1) {
        continue;
      }

      const pivot = cycle[0];
      for (let k = 1; k < cycle.length; k++) {
        swaps.push({ from: pivot, to: cycle[k] });
      }
    }

    // Replay the computed swaps against the live pixelGrid, using the
    // shared animated swap helper to keep the visualisation consistent
    // with the other algorithms.
    for (const op of swaps) {
      await swap(op.from, op.to);
    }

    scheduler(cubeState);
    return cubeState;
  };

export default cycleSortFactory(scheduleRepeat);
