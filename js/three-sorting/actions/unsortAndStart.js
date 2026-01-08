// --------------------------------------------------
// TYPES
// --------------------------------------------------
/** @typedef {import("./types.js").CubeState} cubeState */
// ------------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------------
import unsortDiffuse from "./unsortDiffuseFactory.js";
import startQuick from "./startQuick.js";

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
    onComplete: ({ ratio, reason, elapsedMs, maxMs }) => {
      if (reason === "timeout") {
        const cubeCount = Array.isArray(cubeState.pixelGrid)
          ? cubeState.pixelGrid.length
          : 0;

        // const logFn = /** @type {any} */ (cubeState).logFn;
        // if (typeof logFn === "function") {
        //   logFn("[unsort] diffuse timeout", {
        //     cubeCount,
        //     inversionRatio: ratio,
        //     elapsedMs,
        //     maxMs,
        //   });
        // }
      }
      startQuick(cubeState, { inversionRatio: ratio });
    },
  });
};

export default unsortAndStart;
