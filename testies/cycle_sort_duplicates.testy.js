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
 * Minimal Cube factory satisfying typedefs used by the sorter.
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

// Duplicates regression: ensure completion and correct order.
// This specifically guards against the previous infinite loop when duplicates exist.

testPromise(
  "cycleSort.js: handles duplicates without hanging and sorts ascending",
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
        makeCube(3),
        makeCube(5),
        makeCube(1),
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

    const result = await cycleSort(cubesState, 1, 1, fakeAnime);

    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 1, 2, 3, 3, 4, 5, 5, 6]);
    should(result === cubesState).eql(true);
  },
);
