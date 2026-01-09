// --------------------------------------------------
// TYPES
// --------------------------------------------------
/** @typedef {import("./types.js").Cube} Cube */
/** @typedef {import("./types.js").CubeState} CubeState */
/** @typedef {import("./types.js").QuickPartition} QuickPartition */
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import swapCubes from "./swapCubes.js";
import scheduleRepeatQuick from "./scheduleRepeatQuick.js";

/**
 * In-place quicksort for cubeState.pixelGrid, sorting by Cube.value (ascending).
 * Mutates cubeState.pixelGrid.
 *
 * Lomuto partition scheme (pivot = last element).
 * Average: O(n log n), Worst: O(n^2) depending on pivot/input.
 *
 * @param {CubeState} cubeState
 * @returns {Promise<CubeState>}
 */
const quickSort = async (cubeState, speed = 1, scaleZ = 1, anime) => {
  // Stop the render loop from invoking quickSort again next frame.
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

  /**
   * Partition pixelGrid[lo..hi] around pivot pixelGrid[hi].value and return pivot’s final index.
   * All elements with value <= pivotValue move to the left side.
   *
   * @param {number} lo
   * @param {number} hi
   * @returns {Promise<number>}
   */
  const partition = async (lo, hi) => {
    const pivotValue = pixelGrid[hi].value;
    let i = lo;

    for (let j = lo; j < hi; j++) {
      if (pixelGrid[j].value <= pivotValue) {
        await swap(i, j);
        i++;
      }
    }

    await swap(i, hi);
    return i;
  };

  /**
   * Quicksort subarray pixelGrid[lo..hi].
   * @param {number} lo
   * @param {number} hi
   */
  const sort = async (lo, hi) => {
    if (lo >= hi) return;
    const p = await partition(lo, hi);
    await sort(lo, p - 1);
    await sort(p + 1, hi);
  };

  await sort(0, pixelGrid.length - 1);

  // Repeat: wait N ms, unsort (diffuse), then start next quick sort run
  scheduleRepeatQuick(cubeState);

  return cubeState;
};

// Usage:
// quickSort(cubeState);
// cubeState.pixelGrid is now sorted by cube.value

export default quickSort;
