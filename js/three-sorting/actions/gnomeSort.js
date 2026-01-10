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
 * Gnome Sort using adjacent animated swaps.
 * Stops repeated invocation by setting `cubeState.active = false`, performs in-place sorting,
 * and schedules the next run via `scheduleRepeat(cubeState)`.
 *
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for gnomeSort that allows injecting the repeat scheduler (for tests).
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const gnomeSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
    // Stop the render loop from invoking another sort on the next frame.
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

    // Classic Gnome Sort:
    // Walk forward if in correct order; otherwise swap with previous and step back.
    let i = 1;
    const n = pixelGrid.length;
    while (i < n) {
      if (i === 0 || pixelGrid[i].value >= pixelGrid[i - 1].value) {
        i += 1;
      } else {
        await swap(i, i - 1);
        i -= 1;
      }
    }

    // Repeat: wait configured ms, unsort (diffuse), then start next sort run
    scheduler(cubeState);

    return cubeState;
  };

export default gnomeSortFactory(scheduleRepeat);
