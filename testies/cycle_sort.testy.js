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
// IMPORT: FUNCTION UNDER TEST
// ------------------------------------------------------------------
import cycleSort from "../js/three-sorting/actions/cycleSort.js";

/**
 * Create a minimal `Cube` compatible with the visualizer typedefs.
 * Values are duplicated across algorithm-specific fields for simplicity.
 *
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
  "cycleSort.js: cycleSort(...) sorts ascending (in-place)",
  async () => {
    // Build a minimal CubeState with a shuffled pixelGrid.
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

    // No-op animation runner: immediately invokes complete and resolves finished.
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

    // Execute the algorithm under test.
    const result = await cycleSort(cubesState, 1, 1, fakeAnime);

    // Verify values are sorted ascending, in-place.
    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 2, 3, 4, 5, 6]);
    // Also confirm the function returns the same CubeState reference.
    should(result === cubesState).eql(true);
  },
);
