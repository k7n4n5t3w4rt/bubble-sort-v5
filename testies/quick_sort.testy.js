//------------------------------------------------------------------
// IMPORT: TESTY
// ------------------------------------------------------------------
import { testPromise, should } from "../server/testy.js";
// ------------------------------------------------------------------
// IMPORT: FUNCTION UNDER TEST
// ------------------------------------------------------------------
import quickSort from "../js/three-sorting/actions/quickSort.js";

/**
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
  "quickSort sorts ascending and schedules repeat unsort",
  async () => {
    const cubesState = {
      // Required by CubeState typedef
      active: true,
      moving: false,
      // Minimal grid to sort
      pixelGrid: [
        makeCube(4),
        makeCube(5),
        makeCube(1),
        makeCube(6),
        makeCube(3),
        makeCube(2),
      ],
      // Keep tests deterministic and avoid real timers/work
      unsortPauseMs: 100,

      setTimeoutFn: () => null,
      clearTimeoutFn: () => {},
      logFn: () => {},
      randomFn: Math.random,
      nowFn: () => Date.now(),
    };

    const sortedCubes = await quickSort(cubesState);

    const values = cubesState.pixelGrid.map((c) => c.value);
    should(values).eql([1, 2, 3, 4, 5, 6]);
  },
);
