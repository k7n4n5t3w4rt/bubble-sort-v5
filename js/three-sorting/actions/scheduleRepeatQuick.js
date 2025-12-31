/** @typedef {import("./types.js").CubeState} CubeState */

import { scheduleUnsort } from "./scheduleUnsort.js";
import unsortAndStart from "./unsortAndStart.js";
import nowMs from "./nowMs.js";
import startQuick from "./startQuick.js";

/** @param {CubeState} cubes */
const scheduleRepeatQuick = (cubes) => {
  const schedule =
    cubes && typeof cubes.scheduleUnsort === "function" ? cubes.scheduleUnsort : scheduleUnsort;

  const delayMs = cubes && typeof cubes.unsortPauseMs === "number" ? cubes.unsortPauseMs : 10_000;
  schedule(cubes, delayMs, (cs) => unsortAndStart(cs, { startSorting: startQuick, nowFn: nowMs }));
};

export default scheduleRepeatQuick;

