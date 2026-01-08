// --------------------------------------------------
// TYPES
// --------------------------------------------------
/** @typedef {import("./types.js").Cube} Cube */
/** @typedef {import("./types.js").cubeState} cubeState */
/** @typedef {import("./types.js").QuickPartition} QuickPartition */
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
// import swapcubeState from "./swapcubeState.js";
import { scheduleUnsort } from "./scheduleUnsort.js";
import { makeUnsortDiffuse } from "./unsortDiffuse.js";
import nowMs from "./nowMs.js";

/**
 * In-place quicksort for cubeState.pixelGrid, sorting by Cube.value (ascending).
 * Mutates cubeState.pixelGrid.
 *
 * Lomuto partition scheme (pivot = last element).
 * Average: O(n log n), Worst: O(n^2) depending on pivot/input.
 *
 * @param {cubeState} cubeState
//  * @param {number} speed
//  * @param {number} scaleZ
//  * @param {Function} anime
 * @returns {Promise<cubeState>}
 */
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
  const schedule =
    cubeState && typeof cubeState.scheduleUnsort === "function"
      ? cubeState.scheduleUnsort
      : scheduleUnsort;
  const delayMs =
    cubeState && typeof cubeState.unsortPauseMs === "number"
      ? cubeState.unsortPauseMs
      : 10_000;

  schedule(cubeState, delayMs, (cs) => {
    if (!cs.gridCols || cs.gridCols <= 0) {
      const n = Array.isArray(cs.pixelGrid) ? cs.pixelGrid.length : 1;
      cs.gridCols = Math.max(1, n);
    }

    const runDiffuse = makeUnsortDiffuse(
      cs && typeof cs.setIntervalFn === "function"
        ? cs.setIntervalFn
        : setInterval,
      cs && typeof cs.clearIntervalFn === "function"
        ? cs.clearIntervalFn
        : clearInterval,
      cs && typeof cs.nowFn === "function" ? cs.nowFn : nowMs,
    );

    runDiffuse(cs, {
      targetRatio:
        cs && typeof cs.diffuseTargetRatio === "number"
          ? cs.diffuseTargetRatio
          : 0.5,
      minMaxMs:
        cs && typeof cs.diffuseMinMaxMs === "number"
          ? cs.diffuseMinMaxMs
          : undefined,
      swapsPerTick:
        cs &&
        typeof cs.diffuseSwapsPerTick === "number" &&
        cs.diffuseSwapsPerTick > 0
          ? cs.diffuseSwapsPerTick
          : undefined,
      neighborRadius:
        cs && typeof cs.diffuseNeighborRadius === "number"
          ? cs.diffuseNeighborRadius
          : undefined,
      randomFn:
        cs && typeof cs.randomFn === "function" ? cs.randomFn : Math.random,
      onComplete: ({ ratio, reason, elapsedMs, maxMs }) => {
        if (reason === "timeout" && typeof cs.logFn === "function") {
          const cubeCount = Array.isArray(cs.pixelGrid)
            ? cs.pixelGrid.length
            : 0;
          cs.logFn("[unsort] diffuse timeout", {
            cubeCount,
            inversionRatio: ratio,
            elapsedMs,
            maxMs,
          });
        }
        cs.moving = false;
        cs.currentIndex = 0;
        cs.sortStartMs = nowMs();
        cs.sortEndMs = undefined;
        cs.sortRunId = (cs.sortRunId || 0) + 1;
        if (typeof cs.logFn === "function") {
          const cubeCount = Array.isArray(cs.pixelGrid)
            ? cs.pixelGrid.length
            : 0;
          cs.logFn(`[sort] #${cs.sortRunId} start (quick)`, {
            startMs: cs.sortStartMs,
            cubeCount,
            inversionRatio: ratio,
          });
        }
        cs.active = true;
      },
    });
  });

  return cubeState;
};

// Usage:
// quickSort(cubeState);
// cubeState.pixelGrid is now sorted by cube.value

export default quickSort;
