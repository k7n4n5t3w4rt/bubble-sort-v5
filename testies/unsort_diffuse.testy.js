//------------------------------------------------------------------
// IMPORT: TESTY
//------------------------------------------------------------------
import { test, should } from "../server/testy.js";
//------------------------------------------------------------------
// IMPORT: FUNCTIONS UNDER TEST
//------------------------------------------------------------------
import unsortDiffuse from "../js/three-bubble-sort/actions/unsortDiffuse.js";
import { inversionRatioFromValues } from "../js/three-bubble-sort/actions/inversionRatio.js";

const makeCube = (v) => ({
  bubble_value: v,
  // material/color are optional; unsortDiffuse is defensive.
});

test("unsortDiffuse() increases inversion ratio and calls onComplete (deterministic timers)", () => {
  const cubes = {
    pixelGrid: Array.from({ length: 10 }, (_, i) => makeCube(i)), // sorted
  };

  const before = cubes.pixelGrid.map((c) => c.bubble_value);
  const beforeRatio = inversionRatioFromValues(before);
  should(beforeRatio).be.exactly(0);

  /** @type {{ cb: null | Function, ms: null | number }} */
  const intervalCaptured = { cb: null, ms: null };
  let t = 0;

  const setIntervalFn = (cb, ms) => {
    intervalCaptured.cb = cb;
    intervalCaptured.ms = ms;
    return 1;
  };
  const clearIntervalFn = () => { };
  const nowFn = () => t;

  // Deterministic RNG (LCG) so multiple random() calls per tick stay repeatable.
  let seed = 123456789;
  const randomFn = () => {
    // LCG: https://en.wikipedia.org/wiki/Linear_congruential_generator
    seed = (1103515245 * seed + 12345) & 0x7fffffff;
    return seed / 0x80000000;
  };

  /** @type {{ info: any }[]} */
  const completes = [];

  unsortDiffuse(cubes, {
    targetRatio: 0.5,
    maxMs: 250,
    tickMs: 1,
    checkEveryMs: 1,
    swapsPerTick: 5,
    randomFn,
    setIntervalFn,
    clearIntervalFn,
    nowFn,
    onComplete: (info) => completes.push({ info }),
  });

  should(cubes.diffusing).be.exactly(true);
  should(typeof intervalCaptured.cb).be.exactly("function");

  // Drive the diffusion loop synchronously.
  for (let i = 0; i < 2000 && completes.length === 0; i++) {
    t += intervalCaptured.ms || 1;
    intervalCaptured.cb && intervalCaptured.cb();
  }

  should(completes.length).be.exactly(1);
  should(completes[0].info).have.property("reason");
  should(["target", "timeout", "noop"]).containEql(completes[0].info.reason);

  const after = cubes.pixelGrid.map((c) => c.bubble_value);
  const afterRatio = inversionRatioFromValues(after);

  // Still a permutation (swaps only).
  should([...after].sort((a, b) => a - b)).eql([...before].sort((a, b) => a - b));
  // But order changed and inversion ratio increased.
  should(after).not.eql(before);
  should(afterRatio).be.above(0);
});

