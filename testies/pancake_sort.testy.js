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
import { pancakeSortFactory } from "../js/three-sorting/actions/pancakeSort.js";

/**
 * Helper to create a minimal Cube instance with the given value.
 *
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

testPromise(
  "pancakeSort.js: pancakeSort(...) sorts ascending (in-place)",
  async () => {
    /** @type {import("../js/three-sorting/actions/types.js").CubeState} */
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

    // no-op animation to keep swaps instant - calls the complete callback immediately
    /**
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

    // Use factory to inject a stub scheduleRepeat so tests don't start timers
    /** @type {(state: import("../js/three-sorting/actions/types.js").CubeState) => void} */
    const noopScheduleRepeat = () => {};
    const pancakeSort = pancakeSortFactory(noopScheduleRepeat);
    const result = await pancakeSort(cubesState, 1, 1, fakeAnime);

    // Sorted ascending
    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 2, 3, 4, 5, 6]);

    // Ensure the same object reference is returned (in-place sort)
    should(result).equal(cubesState);
  },
);
