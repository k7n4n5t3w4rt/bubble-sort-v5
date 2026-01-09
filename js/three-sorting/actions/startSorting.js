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
  cubeState.currentIndex = 0;
  cubeState.sortStartMs = nowMs();
  cubeState.sortEndMs = undefined;

  cubeState.sortRunId = (cubeState.sortRunId || 0) + 1;

  {
    const cubeCount = Array.isArray(cubeState.pixelGrid)
      ? cubeState.pixelGrid.length
      : 0;

    console.log(`[sort] #${cubeState.sortRunId} start`, {
      startMs: cubeState.sortStartMs,
      cubeCount,
      ...meta,
    });
  }
};

export default startQuick;
