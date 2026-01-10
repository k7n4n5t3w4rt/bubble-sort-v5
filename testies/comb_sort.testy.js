// @flow
//------------------------------------------------------------------
// TYPEDEFS
//------------------------------------------------------------------
/** @typedef {import("../js/three-sorting/actions/types.js").AnimeRunner} AnimeRunner */
//------------------------------------------------------------------
// IMPORT: TESTY
// ------------------------------------------------------------------
import { testPromise, should } from "../server/testy.js";
// ------------------------------------------------------------------
// IMPORT: FUNCTION UNDER TEST (factory)
// ------------------------------------------------------------------
// Use factory to allow injecting a noop scheduler for tests
import { combSortFactory } from "../js/three-sorting/actions/combSort.js";

/**
 * Make a minimal `Cube` for tests.
 * @param {number} v
 * @returns {import("../js/three-sorting/actions/types.js").Cube}
 */
const makeCube = (v) => ({
  value: v,
  bubble_value: v,
  selection_value: v,
  position: { x: 0, y: 0, z: 0 },
  // Satisfy Cube typedef
  gridCols: 1,
});

// ------------------------------------------------------------------
// TEST: combSort sorts ascending in-place
// ------------------------------------------------------------------
// Using a no-op AnimeRunner: immediately triggers `complete` and resolves
// to keep test swaps instant and deterministic.

testPromise(
  "combSort.js: combSort(...) sorts ascending (in-place)",
  async () => {
    const cubesState = {
      active: true,
      moving: false,
      pixelGrid: [
        makeCube(4),
        makeCube(5),
        makeCube(1),
        makeCube(6),
        makeCube(3),
        makeCube(2),
      ],
      // keep only fields required by current CubeState typedef
    };

    /**
     * No-op animation to keep swaps instant - calls the complete callback immediately
     * and returns a finished-like handle similar to anime.js.
     * @type {AnimeRunner}
     */
    const fakeAnime = (opts) => {
      if (opts && typeof opts.complete === "function") {
        try {
          opts.complete();
        } catch {}
      }
      return { finished: Promise.resolve() };
    };

    // Inject a stub scheduleRepeat to prevent timers during tests
    /** @type {(state: import("../js/three-sorting/actions/types.js").CubeState) => void} */
    const noopScheduleRepeat = () => {};
    const combSort = combSortFactory(noopScheduleRepeat);

    await combSort(cubesState, 1, 1, fakeAnime);

    // Sorted ascending
    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 2, 3, 4, 5, 6]);
  },
);
