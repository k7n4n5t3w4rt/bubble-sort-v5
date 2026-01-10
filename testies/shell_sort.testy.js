//------------------------------------------------------------------
// TYPEDEFS
//------------------------------------------------------------------
/** @typedef {import("../js/three-sorting/actions/types.js").AnimeRunner} AnimeRunner */
//------------------------------------------------------------------
// IMPORT: TESTY
// ------------------------------------------------------------------
import { testPromise, should } from "../server/testy.js";
// ------------------------------------------------------------------
// IMPORT: FUNCTION UNDER TEST
// ------------------------------------------------------------------
import shellSort from "../js/three-sorting/actions/shellSort.js";

/**
 * Build a minimal `Cube` for tests.
 * Use the same shape as bubble_sort.testy.js to satisfy typedefs.
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

testPromise(
  "shellSort.js: shellSort(...) sorts ascending (in-place)",
  async () => {
    /**
     * Minimal CubeState to drive the algorithm.
     * Mirrors bubble_sort.testy.js structure.
     */
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

    const result = await shellSort(cubesState, 1, 1, fakeAnime);

    // Sorted ascending in-place
    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 2, 3, 4, 5, 6]);
    // ensure the function returns the same object reference
    should(result).equal(cubesState);
  },
);
