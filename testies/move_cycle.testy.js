//------------------------------------------------------------------
// IMPORT: TESTY
//------------------------------------------------------------------
import { test, should } from "../server/testy.js";
//------------------------------------------------------------------
// IMPORT: FUNCTION UNDER TEST
//------------------------------------------------------------------
import move from "../js/three-bubble-sort/actions/move.js";

const makeCube = (v) => ({
  bubble_value: v,
  position: { x: 0, y: 0, z: 0 },
});

const immediateAnime = (opts) => {
  if (opts && typeof opts.complete === "function") {
    opts.complete(opts);
  }
  return {};
};

test("move() stops after a full no-swap pass and schedules unsort+restart", () => {
  /** @type {{ cb: null | Function, delay: null | number }} */
  const captured = { cb: null, delay: null };
  /** @type {{ cb: null | Function, ms: null | number }} */
  const intervalCaptured = { cb: null, ms: null };
  let t = 0;

  const cubes = {
    pixelGrid: [makeCube(1), makeCube(2), makeCube(3)], // already sorted
    currentIndex: 0,
    moving: false,
    active: true,
    passHadSwap: false,
    // Inject timer so we can assert scheduling without waiting.
    setTimeoutFn: (cb, delay) => {
      captured.cb = cb;
      captured.delay = delay;
      return 1;
    },
    clearTimeoutFn: () => { },
    // Inject interval + clock for diffusion restart.
    setIntervalFn: (cb, ms) => {
      intervalCaptured.cb = cb;
      intervalCaptured.ms = ms;
      return 99;
    },
    clearIntervalFn: () => { },
    nowFn: () => t,
    // Deterministic random for unsort (doesn't matter much for this test)
    randomFn: () => 0,
  };

  // Walk the pass: compare [0,1], [1,2], then end-of-pass on index 2.
  move(cubes, 1, 1, immediateAnime);
  move(cubes, 1, 1, immediateAnime);
  move(cubes, 1, 1, immediateAnime);

  should(cubes.active).be.exactly(false);
  should(captured.delay).be.exactly(10_000);
  should(typeof captured.cb).be.exactly("function");

  const beforeRestartStartMs = cubes.sortStartMs;

  // Trigger scheduled restart (unsort + start sorting again).
  captured.cb && captured.cb();

  // Restart is now: diffuse (active=false), then start sorting when diffusion completes.
  should(cubes.active).be.exactly(false);
  should(cubes.diffusing).be.exactly(true);
  should(typeof intervalCaptured.cb).be.exactly("function");

  // Drive the diffusion interval until completion (target or timeout).
  for (let i = 0; i < 500 && cubes.diffusing === true; i++) {
    t += intervalCaptured.ms || 16;
    intervalCaptured.cb && intervalCaptured.cb();
  }

  should(cubes.diffusing).be.exactly(false);
  should(cubes.active).be.exactly(true);
  should(cubes.currentIndex).be.exactly(0);
  should(cubes.passHadSwap).be.exactly(false);
  should(cubes.sortStartMs !== beforeRestartStartMs).be.exactly(true);
});

test("move() starts a new pass when swaps occurred (does not stop)", () => {
  /** @type {{ cb: null | Function, delay: null | number }} */
  const captured = { cb: null, delay: null };

  const cubes = {
    // First comparison needs a swap.
    pixelGrid: [makeCube(2), makeCube(1), makeCube(3)],
    currentIndex: 0,
    moving: false,
    active: true,
    passHadSwap: false,
    setTimeoutFn: (cb, delay) => {
      captured.cb = cb;
      captured.delay = delay;
      return 1;
    },
    clearTimeoutFn: () => { },
  };

  // First call swaps and advances to nextIndex.
  move(cubes, 1, 1, immediateAnime);
  should(cubes.passHadSwap).be.exactly(true);

  // Continue to end-of-pass; since passHadSwap is true, it should reset for new pass.
  move(cubes, 1, 1, immediateAnime); // compare index 1/2 (no swap)
  move(cubes, 1, 1, immediateAnime); // end-of-pass (cube2 undefined)

  should(cubes.active).be.exactly(true);
  should(cubes.currentIndex).be.exactly(0);
  should(cubes.passHadSwap).be.exactly(false);
  should(captured.cb).be.exactly(null);
});

