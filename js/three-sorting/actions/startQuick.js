/** @typedef {import("./types.js").CubeState} CubeState */

import nowMs from "./nowMs.js";

/**
 * Initialize quick sort state.
 * @param {CubeState} cubeState
 * @param {Object} [meta]
 */
const startQuick = (cubeState, meta = {}) => {
  if (!cubeState || !Array.isArray(cubeState.pixelGrid)) return;
  cubeState.active = true;
  cubeState.moving = false;
  cubeState.quickInit = true;
  cubeState.currentIndex = 0;
  cubeState.sortStartMs = nowMs();
  cubeState.sortEndMs = undefined;
  cubeState.quickStack = [[0, cubeState.pixelGrid.length - 1]];
  cubeState.quickPartition = null;
  cubeState.quickInit = true;

  cubeState.sortRunId = (cubeState.sortRunId || 0) + 1;

  if (typeof cubeState.logFn === "function") {
    const cubeCount = Array.isArray(cubeState.pixelGrid) ? cubeState.pixelGrid.length : 0;
    cubeState.logFn(`[sort] #${cubeState.sortRunId} start (quick)`, {
      startMs: cubeState.sortStartMs,
      cubeCount,
      ...meta,
    });
  }
};

export default startQuick;

