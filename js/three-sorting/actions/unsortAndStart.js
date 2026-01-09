// --------------------------------------------------
// TYPES
// --------------------------------------------------
/** @typedef {import("./types.js").CubeState} cubeState */
// ------------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------------
import unsortDiffuse from "./unsortDiffuseFactory.js";
import startSorting from "./startSorting.js";

/**
 * Runs the diffusion/unsort phase, then starts the next quick sort run.
 * @param {cubeState} cubeState
 */
const unsortAndStart = (cubeState) => {
  cubeState.active = false;
  if (!cubeState.gridCols || cubeState.gridCols <= 0) {
    const n = Array.isArray(cubeState.pixelGrid)
      ? cubeState.pixelGrid.length
      : 1;
    cubeState.gridCols = Math.max(1, n);
  }

  unsortDiffuse(cubeState, {
    targetRatio: cubeState.diffuseTargetRatio,
    minMaxMs: cubeState.diffuseMinMaxMs,
    swapsPerTick: cubeState.diffuseSwapsPerTick,
    neighborRadius: cubeState.diffuseNeighborRadius,

    onComplete: ({
      ratio,
      reason: _reason,
      elapsedMs: _elapsedMs,
      maxMs: _maxMs,
    }) => {
      startSorting(cubeState, { inversionRatio: ratio });
    },
  });
};

export default unsortAndStart;
