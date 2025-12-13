// @flow

import unsort from "./unsort.js";

/**
 * Schedule unsort to run after a delay. Timer functions are injectable for tests.
 */
export const scheduleUnsort = (
    cubes /*: any */,
    {
        delayMs = 10_000,
        setTimeoutFn = setTimeout,
        clearTimeoutFn = clearTimeout,
        unsortFn,
    } /*: any */ = {},
) /*: any */ => {
    if (!cubes) return null;

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


