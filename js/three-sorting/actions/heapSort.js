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
 * Perform an adjacent-only transposition to swap two indices i and j.
 * This decomposes a long-distance swap into a product of neighbor swaps:
 *  - for k = i..j-1: swap(k, k+1)
 *  - for k = j-2..i: swap(k, k+1)
 * Result: values at i and j are exchanged, intermediate elements restored.
 * @param {CubeState} cubeState
 * @param {number} i
 * @param {number} j
 * @param {number} scaleZ
 * @param {number} speed
 * @param {AnimeRunner} anime
 */
const swapViaAdjacent = async (cubeState, i, j, scaleZ, speed, anime) => {
  if (i === j) return;
  if (i > j) {
    return swapViaAdjacent(cubeState, j, i, scaleZ, speed, anime);
  }
  for (let k = i; k < j; k++) {
    // Bubble the value forward by one.
    await swapCubes(cubeState, k, k + 1, scaleZ, speed, anime);
  }
  for (let k = j - 2; k >= i; k--) {
    // Restore intermediate elements; move the far end value back.
    await swapCubes(cubeState, k, k + 1, scaleZ, speed, anime);
  }
};

/**
 * Sift-down heapify for a max-heap using adjacent-only swaps.
 * @param {CubeState} cubeState
 * @param {number} heapSize
 * @param {number} i
 * @param {number} scaleZ
 * @param {number} speed
 * @param {AnimeRunner} anime
 */
const heapify = async (cubeState, heapSize, i, scaleZ, speed, anime) => {
  const pixelGrid = cubeState.pixelGrid;
  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;
    if (left < heapSize && pixelGrid[left].value > pixelGrid[largest].value) {
      largest = left;
    }
    if (right < heapSize && pixelGrid[right].value > pixelGrid[largest].value) {
      largest = right;
    }
    if (largest !== i) {
      await swapViaAdjacent(cubeState, i, largest, scaleZ, speed, anime);
      i = largest;
    } else {
      break;
    }
  }
};

/**
 * Heap Sort using adjacent animated swaps.
 * Builds a max-heap, then extracts max to end repeatedly, all swaps
 * decomposed into neighbor swaps for visual consistency.
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {AnimeRunner} anime
 * @returns {Promise<CubeState>}
 */
/**
 * Factory for heapSort with injected scheduler.
 *
 * @param {(state: CubeState) => void} scheduler
 * @returns {(cubeState: CubeState, speed: number, scaleZ: number, anime: AnimeRunner) => Promise<CubeState>}
 */
export const heapSortFactory =
  (scheduler) => async (cubeState, speed, scaleZ, anime) => {
    // Pause the render loop while sorting.
    if (cubeState) cubeState.active = false;
    const n = cubeState.pixelGrid.length;

    // Build max-heap.
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(cubeState, n, i, scaleZ, speed, anime);
    }

    // Extract elements from heap one by one.
    for (let end = n - 1; end > 0; end--) {
      // Move current root (max) to the end via adjacent transposition.
      await swapViaAdjacent(cubeState, 0, end, scaleZ, speed, anime);
      // Heapify reduced heap.
      await heapify(cubeState, end, 0, scaleZ, speed, anime);
    }

    // Schedule next cycle.
    scheduler(cubeState);
    return cubeState;
  };

export default heapSortFactory(scheduleRepeat);
