// ------------------------------------------------------------
// TYPES
// ------------------------------------------------------------
/** @typedef {import("./types.js").CubeState} CubeState */
// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------
import unsort from "./unsort.js";

/**
 * Factory that returns an unsort scheduler with injected timers (defaults to globals)
 *
 * @param {Function} setTimeout
 * @param {Function} clearTimeout
 */
export const scheduleUnsortFactory = (
  setTimeout = globalThis.setTimeout,
  clearTimeout = globalThis.clearTimeout,
) => {
  /**
   * Schedule unsort to run after a delay.
   * @param {CubeState} cubeState
   * @param {number} delayMs
   * @param {Function} unsortFn
   * @returns {any}
   */
  return (cubeState, delayMs, unsortFn) => {
    if (!cubeState) return null;

    if (cubeState.unsortTimeoutId != null) {
      clearTimeout(cubeState.unsortTimeoutId);
    }

    cubeState.unsortTimeoutId = setTimeout(() => {
      unsortFn(cubeState);
    }, delayMs);

    return cubeState.unsortTimeoutId;
  };
};

export const scheduleUnsort = scheduleUnsortFactory();
// Export the function that uses the global setTimeout and clearTimeout as
// default
export default scheduleUnsort;
