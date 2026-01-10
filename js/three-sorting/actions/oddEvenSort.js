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
 * Odd-Even Sort (Brick Sort) using adjacent animated swaps.
 * This algorithm alternates between even and odd index passes until no swaps occur.
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
 * Factory for oddEvenSort that allows injecting the repeat scheduler (for tests).
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const oddEvenSortFactory =
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

    // Brick sort: keep alternating between even and odd phases until sorted.
    let sorted = false;
    const n = pixelGrid.length;
    while (!sorted) {
      sorted = true;
      // Even index pass: compare (0,1), (2,3), ...
      for (let i = 0; i <= n - 2; i += 2) {
        if (pixelGrid[i].value > pixelGrid[i + 1].value) {
          await swap(i, i + 1);
          sorted = false;
        }
      }
      // Odd index pass: compare (1,2), (3,4), ...
      for (let i = 1; i <= n - 2; i += 2) {
        if (pixelGrid[i].value > pixelGrid[i + 1].value) {
          await swap(i, i + 1);
          sorted = false;
        }
      }
    }

    // Repeat: wait configured ms, unsort (diffuse), then start next sort run
    scheduler(cubeState);

    return cubeState;
  };

export default oddEvenSortFactory(scheduleRepeat);
