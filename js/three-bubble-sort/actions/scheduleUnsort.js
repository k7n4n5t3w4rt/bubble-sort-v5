
import unsort from "./unsort.js";

/**
 * @typedef {Object} ScheduleUnsortOptions
 * @property {number} [delayMs]
 * @property {(cb: (...args:any[]) => void, delayMs: number) => any} [setTimeoutFn]
 * @property {(id: any) => void} [clearTimeoutFn]
 * @property {(cubes: any) => any} [unsortFn]
 */

/**
 * Schedule unsort to run after a delay. Timer functions are injectable for tests.
 *
 * @param {any} cubes
 * @param {ScheduleUnsortOptions} [options]
 * @returns {any}
 */
export const scheduleUnsort = (cubes, options = {}) => {
    if (!cubes) return null;

    const {
        delayMs = 10_000,
        setTimeoutFn = setTimeout,
        clearTimeoutFn = clearTimeout,
        unsortFn,
    } = options;

    if (cubes.unsortTimeoutId != null && typeof clearTimeoutFn === "function") {
        clearTimeoutFn(cubes.unsortTimeoutId);
    }

    // Note: keep scheduling simple; caller can inject setTimeout for tests.
    // $FlowFixMe - setTimeout return types vary across environments
    cubes.unsortTimeoutId = setTimeoutFn(() => {
        if (typeof unsortFn === "function") {
            unsortFn(cubes);
        } else {
            unsort(cubes);
        }
    }, delayMs);

    return cubes.unsortTimeoutId;
};

export default scheduleUnsort;


