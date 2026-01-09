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
  // Determine delay before unsorting - default to 10s if not specified (aligns with other flows)
  const delayMs =
    cubeState && typeof cubeState.unsortPauseMs === "number"
      ? cubeState.unsortPauseMs
      : 10_000;
  scheduleUnsort(cubeState, delayMs, (/** @type {CubeState} */ cs) =>
    unsortAndStart(cs),
  );
};

export default scheduleRepeatQuick;
