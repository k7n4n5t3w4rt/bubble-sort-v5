// ------------------------------------------------
// TYPES
// ------------------------------------------------
/** @typedef {import("./types.js").CubeState} CubeState */
// ------------------------------------------------
// HELPERS
// ------------------------------------------------
import scheduleUnsort from "./scheduleUnsortFactory.js";
import unsortAndStart from "./unsortAndStart.js";
import nowMs from "./nowMs.js";

/**
 * Schedule the unsort/diffuse phase after a sort completes.
 * Also logs a centralized end-of-sort event with elapsed milliseconds.
 *
 * @param {CubeState} cubeState
 */
const scheduleRepeat = (cubeState) => {
  // Determine delay before unsorting - default to 10s if not specified (aligns with other flows)
  const delayMs =
    cubeState && typeof cubeState.unsortPauseMs === "number"
      ? cubeState.unsortPauseMs
      : 0;

  // --------------------------------------------------------------
  // Centralized end-of-sort logging
  // --------------------------------------------------------------
  // Compute end timestamp and elapsed duration since `startSorting`.
  if (cubeState) {
    /** @type {number} */
    cubeState.sortEndMs = nowMs();

    const startMs =
      typeof cubeState.sortStartMs === "number"
        ? cubeState.sortStartMs
        : cubeState.sortEndMs;
    const elapsedMs = Math.max(0, cubeState.sortEndMs - startMs);

    const cubeCount = Array.isArray(cubeState.pixelGrid)
      ? cubeState.pixelGrid.length
      : 0;

    // Log an end-of-sort line to pair with startSorting's log.
    // Example: [sort] #5 end { endMs: 1736870000000, elapsedMs: 842, cubeCount: 256 }
    console.log(`[sort] #${cubeState.sortRunId} end`, {
      endMs: cubeState.sortEndMs,
      elapsedMs,
      cubeCount,
    });
  }
  scheduleUnsort(cubeState, delayMs, (/** @type {CubeState} */ cs) =>
    unsortAndStart(cs),
  );
};

export default scheduleRepeat;
