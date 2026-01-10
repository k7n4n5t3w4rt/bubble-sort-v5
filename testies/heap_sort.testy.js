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
// Use factory to inject a noop scheduler for tests
import { heapSortFactory } from "../js/three-sorting/actions/heapSort.js";

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

testPromise(
  "heapSort.js: heapSort(...) sorts ascending (in-place)",
  async () => {
    const cubesState = {
      active: true,
      moving: false,
      pixelGrid: [
        makeCube(9),
        makeCube(1),
        makeCube(4),
        makeCube(7),
        makeCube(3),
        makeCube(8),
        makeCube(2),
        makeCube(5),
        makeCube(6),
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

    // Inject stub scheduleRepeat to avoid timers in tests
    /** @type {(state: import("../js/three-sorting/actions/types.js").CubeState) => void} */
    const noopScheduleRepeat = () => {};
    const heapSort = heapSortFactory(noopScheduleRepeat);

    const result = await heapSort(cubesState, 1, 1, fakeAnime);

    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    should(result).equal(cubesState);
  },
);
