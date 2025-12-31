// --------------------------------------------------
// TYPES
// --------------------------------------------------
/** @typedef {import("./types.js").Cube} Cube */
/** @typedef {import("./types.js").CubeState} CubeState */
/** @typedef {import("./types.js").QuickPartition} QuickPartition */
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import nowMs from "./nowMs.js";
import startQuick from "./startQuick.js";
import scheduleRepeatQuick from "./scheduleRepeatQuick.js";
import onQuickPivotPlaced from "./onQuickPivotPlaced.js";
import swapCubes from "./swapCubes.js";

/**
 * Quick sort (iterative) with animated swaps.
 * Reuses shared unsort/diffuse + restart flow via unsortAndStart.
 */
/**
 * Quick sort (iterative, animated).
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {Function} anime
 * @returns {Promise<CubeState>}
 */
const quickSort = async (cubeState, speed, scaleZ, anime) => {
  // defensive: return early if cubeState is not valid
  if (!cubeState || !Array.isArray(cubeState.pixelGrid)) return cubeState;

  // defensive: return early if cubeState is not active
  if (!cubeState.active) return cubeState;

  // Initialize if needed (e.g., first run or after unsort restart).
  if (!cubeState.quickInit || !Array.isArray(cubeState.quickStack) || cubeState.quickStack.length === 0) {
    startQuick(cubeState);
  }
  if (cubeState.moving) return cubeState;

  const stack = Array.isArray(cubeState.quickStack) ? cubeState.quickStack : [];
  let part = cubeState.quickPartition;
  const maxIterations = Math.max(2000, (cubeState.pixelGrid.length || 0) * 50);
  let iterations = 0;

  // Process until we either start an animation or finish.
  while (!cubeState.moving && cubeState.active && iterations < maxIterations) {
    while ((!part || part.done) && stack.length > 0) {
      const seg = stack.pop();
      if (!seg) break;
      const [lo, hi] = seg;
      if (hi - lo <= 0) continue;
      part = {
        lo,
        hi,
        i: lo,
        j: lo,
        pivotIndex: hi,
        pivotValue: cubeState.pixelGrid[hi] && cubeState.pixelGrid[hi].value,
        done: false,
      };
      cubeState.quickPartition = part;
    }

    if (!part || part.done) {
      // Finished all partitions
      cubeState.active = false;
      cubeState.sortEndMs = nowMs();
      cubeState.quickPartition = null;
      cubeState.quickStack = [];
      scheduleRepeatQuick(cubeState);
      return cubeState;
    }

    // Partition step (Lomuto)
    if (!part) {
      // Defensive: should not happen, but avoid null access if state resets unexpectedly.
      cubeState.quickPartition = null;
      return cubeState;
    }

    const partLo = part.lo;
    const partHi = part.hi;
    const partPivotIndex = part.pivotIndex;
    const partPivotValue = part.pivotValue;
    const partJ = part.j;

    if (part.j < partHi) {
      const cubeJ = cubeState.pixelGrid[part.j];
      const pivotVal = partPivotValue;
      if (cubeJ && cubeJ.value < pivotVal) {
        const swapI = part.i;
        const swapJ = part.j;
        part.i += 1;
        part.j += 1;
        if (swapI !== swapJ) {
          await swapCubes(cubeState, swapI, swapJ, scaleZ, speed, anime);
        }
        // no-op swap (same index); continue loop
        continue;
      }
      part.j += 1;
      continue;
    }

    // Place pivot
    const pivotPos = part.i;
    if (pivotPos !== partHi) {
      part.done = true;
      await swapCubes(
        cubeState,
        pivotPos,
        partHi,
        scaleZ,
        speed,
        anime,
      );
      continue;
    }

    // Pivot already in place
    if (part) {
      part.done = true;
      if (pivotPos - 1 > partLo) stack.push([partLo, pivotPos - 1]);
      if (pivotPos + 1 < partHi) stack.push([pivotPos + 1, partHi]);
      cubeState.quickPartition = {
        lo: partLo,
        hi: partHi,
        i: pivotPos,
        j: partJ,
        pivotIndex: partPivotIndex,
        pivotValue: partPivotValue,
        done: true,
      };
      part = cubeState.quickPartition;
      cubeState.quickStack = stack;
    }
    // loop continues to pick next partition

    iterations += 1;
  }

  if (iterations >= maxIterations) {
    // Safety net to avoid runaway loops in tests/dev; restart cycle.
    cubeState.active = false;
    cubeState.sortEndMs = nowMs();
    cubeState.quickPartition = null;
    cubeState.quickStack = [];
    scheduleRepeatQuick(cubeState);
  }

  return cubeState;
};

export default quickSort;

