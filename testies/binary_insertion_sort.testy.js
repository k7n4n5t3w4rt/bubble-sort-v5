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
import { binaryInsertionSortFactory } from "../js/three-sorting/actions/binaryInsertionSort.js";

/**
 * Build a minimal `Cube` for tests.
 * Mirrors bubble_sort.testy.js to satisfy typedefs.
 * @param {number} v
 * @returns {import("../js/three-sorting/actions/types.js").Cube}
 */
const makeCube = (v) => ({
  value: v,
  bubble_value: v,
  selection_value: v,
  position: { x: 0, y: 0, z: 0 },
  gridCols: 1,
});

// ------------------------------------------------------------------
// TEST: binaryInsertionSort sorts ascending in-place
// ------------------------------------------------------------------
// Uses a no-op AnimeRunner which immediately calls `complete` and resolves
// so that swap animations are effectively instantaneous and deterministic.

testPromise(
  "binaryInsertionSort.js: binaryInsertionSort(...) sorts ascending (in-place)",
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
    };

    /** @type {AnimeRunner} */
    const fakeAnime = (opts) => {
      if (opts && typeof opts.complete === "function") {
        try {
          opts.complete();
        } catch {}
      }
      return { finished: Promise.resolve() };
    };

    // Inject a stub scheduleRepeat to avoid timers in tests
    /** @type {(state: import("../js/three-sorting/actions/types.js").CubeState) => void} */
    const noopScheduleRepeat = () => {};
    const binaryInsertionSort = binaryInsertionSortFactory(noopScheduleRepeat);

    const result = await binaryInsertionSort(cubesState, 1, 1, fakeAnime);

    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 2, 3, 4, 5, 6]);
    should(result).equal(cubesState);
  },
);
