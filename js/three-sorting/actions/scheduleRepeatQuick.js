// ------------------------------------------------
// TYPES
// ------------------------------------------------
/** @typedef {import("./types.js").CubeState} CubeState */
// ------------------------------------------------
// HELPERS
// ------------------------------------------------
import scheduleUnsort from "./scheduleUnsortFactory.js";
import unsortAndStart from "./unsortAndStart.js";

/** @param {CubeState} cubeState */
const scheduleRepeatQuick = (cubeState) => {
  scheduleUnsort(cubeState, cubeState.unsortPauseMs, (cs) =>
    unsortAndStart(cs),
  );
};

export default scheduleRepeatQuick;
