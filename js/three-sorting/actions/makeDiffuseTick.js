/** @typedef {import("./types.js").Cube} Cube */

/**
 * Build the interval tick function for unsort diffusion.
 * @param {Object} params
 * @param {{ pixelGrid: Cube[], diffuseRunToken?: number, diffuseIntervalId?: any }} params.cubes
 * @param {number} params.n
 * @param {number} params.runToken
 * @param {number} params.effectiveMaxMs
 * @param {number} params.tickMs
 * @param {number} params.maxCatchUpSteps
 * @param {number} params.cappedSwapsPerTick
 * @param {boolean} params.use2D
 * @param {number} params.resolvedCols
 * @param {number} params.radius
 * @param {() => number} params.randomFn
 * @param {(cube: Cube, v: number) => void} params.setCubeGreyscale
 * @param {number} params.checkEveryMs
 * @param {number} params.targetRatio
 * @param {(ratio: number) => void=} params.onProgress
 * @param {(reason: "target" | "timeout" | "noop") => void} params.complete
 * @param {() => number} params.nowFn
 * @param {{ lastTickAt: number, lastCheckAt: number, lastRatio: number, startedAt: number, completedRef: { value: boolean } }} params.state
 * @param {(cubes: any, n: number) => Uint16Array} params.fillValuesBuffer
 * @param {(buf: Uint16Array, scratch: any) => number} params.inversionRatioFromValues
 */
const makeDiffuseTick = ({
  cubes,
  n,
  runToken,
  effectiveMaxMs,
  tickMs,
  maxCatchUpSteps,
  cappedSwapsPerTick,
  use2D,
  resolvedCols,
  radius,
  randomFn,
  setCubeGreyscale,
  checkEveryMs,
  targetRatio,
  onProgress,
  complete,
  nowFn,
  state,
  fillValuesBuffer,
  inversionRatioFromValues,
}) => {
  return () => {
    if (cubes.diffuseRunToken !== runToken) return;

    const t = nowFn();
    if (t - state.startedAt >= effectiveMaxMs) {
      complete("timeout");
      return;
    }

    // If timers get throttled (common in XR / background tabs), "catch up".
    const dt = Math.max(0, t - state.lastTickAt);
    state.lastTickAt = t;
    const rawSteps = tickMs > 0 ? Math.floor(dt / tickMs) : 1;
    const steps = Math.min(
      Math.max(1, rawSteps),
      typeof maxCatchUpSteps === "number" && maxCatchUpSteps > 0 ? maxCatchUpSteps : 120,
    );

    for (let step = 0; step < steps; step++) {
      if (cubes.diffuseRunToken !== runToken || state.completedRef.value) return;
      doSwaps(cubes, n, cappedSwapsPerTick, use2D, resolvedCols, radius, randomFn, setCubeGreyscale);
    }

    if (t - state.lastCheckAt >= checkEveryMs) {
      state.lastCheckAt = t;
      // @ts-ignore - ad-hoc fields on cubes
      state.lastRatio = inversionRatioFromValues(
        fillValuesBuffer(cubes, n),
        cubes.diffuseInversionScratch,
      );
      if (typeof onProgress === "function") onProgress(state.lastRatio);
      if (state.lastRatio >= targetRatio) {
        complete("target");
      }
    }
  };
};

import doSwaps from "./doSwaps.js";

export default makeDiffuseTick;

