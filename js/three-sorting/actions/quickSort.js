// --------------------------------------------------
// TYPES
// --------------------------------------------------
/** @typedef {import("./types.js").Cube} Cube */
/** @typedef {import("./types.js").CubeState} CubeState */
/** @typedef {import("./types.js").QuickPartition} QuickPartition */
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
// import swapcubeState from "./swapcubeState.js";
import scheduleUnsort from "./scheduleUnsortFactory.js";
import unsortAndStart from "./unsortAndStart.js";

/**
 * In-place quicksort for cubeState.pixelGrid, sorting by Cube.value (ascending).
 * Mutates cubeState.pixelGrid.
 *
 * Lomuto partition scheme (pivot = last element).
 * Average: O(n log n), Worst: O(n^2) depending on pivot/input.
 *
 * @param {CubeState} cubeState
 * @returns {Promise<cubeState>}
 */
//  * @param {number} speed
//  * @param {number} scaleZ
//  * @param {Function} anime
// const quickSort = async (cubeState, speed, scaleZ, anime) => {
const quickSort = async (cubeState) => {
  // Stop the render loop from invoking quickSort again next frame.
  if (cubeState) cubeState.active = false;
  const pixelGrid = cubeState.pixelGrid;

  /**
   * Swap two elements in pixelGrid.
   * @param {number} i
   * @param {number} j
   */
  const swap = (i, j) => {
    const tmp = pixelGrid[i];
    pixelGrid[i] = pixelGrid[j];
    pixelGrid[j] = tmp;
  };

  /**
   * Partition pixelGrid[lo..hi] around pivot pixelGrid[hi].value and return pivot’s final index.
   * All elements with value <= pivotValue move to the left side.
   *
   * @param {number} lo
   * @param {number} hi
   * @returns {number}
   */
  const partition = (lo, hi) => {
    const pivotValue = pixelGrid[hi].value;
    let i = lo;

    for (let j = lo; j < hi; j++) {
      if (pixelGrid[j].value <= pivotValue) {
        swap(i, j);
        i++;
      }
    }

    swap(i, hi);
    return i;
  };

  /**
   * Quicksort subarray pixelGrid[lo..hi].
   * @param {number} lo
   * @param {number} hi
   */
  const sort = (lo, hi) => {
    if (lo >= hi) return;
    const p = partition(lo, hi);
    sort(lo, p - 1);
    sort(p + 1, hi);
  };

  sort(0, pixelGrid.length - 1);

  // Repeat: wait N ms, unsort (diffuse), then start next quick sort run
  const delayMs =
    cubeState && typeof cubeState.unsortPauseMs === "number"
      ? cubeState.unsortPauseMs
      : 10_000;
  scheduleUnsort(cubeState, delayMs, (cs) => unsortAndStart(cs));

  return cubeState;
};

// Usage:
// quickSort(cubeState);
// cubeState.pixelGrid is now sorted by cube.value

export default quickSort;
