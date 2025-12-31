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
export const makeScheduleUnsort = (
    setTimeout = globalThis.setTimeout,
    clearTimeout = globalThis.clearTimeout,
) => {

    /**
     * Schedule unsort to run after a delay.
     * @param {CubeState} cubes
     * @param {number} delayMs
     * @param {Function} unsortFn
     * @returns {any}
     */
    return (
        cubes,
        delayMs = 10_000,
        unsortFn
    ) => {
        if (!cubes) return null;

        if (cubes.unsortTimeoutId != null) {
            clearTimeout(cubes.unsortTimeoutId);
        }

        cubes.unsortTimeoutId = setTimeout(() => {
            if (typeof unsortFn === "function") {
                unsortFn(cubes);
            } else {
                unsort(cubes);
            }
        }, delayMs);

        return cubes.unsortTimeoutId;
    };
};

export const scheduleUnsort = makeScheduleUnsort();
// Export the function that uses the global setTimeout and clearTimeout as
// default
export default scheduleUnsort;