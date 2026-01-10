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
import { oddEvenSortFactory } from "../js/three-sorting/actions/oddEvenSort.js";

/**
 * Construct a minimal `Cube` for tests.
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

// Ensure odd-even (brick) sort sorts ascending in-place using adjacent swaps, with no animation delay.
// We inject a no-op scheduler to avoid timers during tests.

testPromise(
  "oddEvenSort.js: oddEvenSort(...) sorts ascending (in-place)",
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
    const oddEvenSort = oddEvenSortFactory(noopScheduleRepeat);
    const result = await oddEvenSort(cubesState, 1, 1, fakeAnime);

    // Sorted ascending
    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 2, 3, 4, 5, 6]);
  },
);
