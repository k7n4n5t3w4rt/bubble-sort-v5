//------------------------------------------------------------------
// IMPORT: TESTY
//------------------------------------------------------------------
import { test, should } from "../server/testy.js";
//------------------------------------------------------------------
// IMPORT: THREE + FUNCTIONS UNDER TEST
//------------------------------------------------------------------
import * as THREE from "three";
import pixelGrid from "../js/three-bubble-sort/actions/pixelGrid.js";
import unsort from "../js/three-bubble-sort/actions/unsort.js";
import scheduleUnsort from "../js/three-bubble-sort/actions/scheduleUnsort.js";

test("unsort() makes a sorted pixelGrid no longer sorted (deterministic shuffle)", () => {
  const cols = 6;
  const rows = 4;
  const scaleX = 10;
  const scaleY = 10;
  const scaleZ = 10;
  const scene = new THREE.Scene();

  const { pixelGridCubes } = pixelGrid(
    cols,
    rows,
    scaleX,
    scaleY,
    scaleZ,
    scene,
    {},
  );

  const before = pixelGridCubes.map((c) => c.bubble_value);

  // Deterministic "always 0" RNG forces swaps with index 0 in Fisher-Yates.
  unsort({ pixelGrid: pixelGridCubes }, () => 0);

  const after = pixelGridCubes.map((c) => c.bubble_value);

  // Still a permutation of the original values
  should([...after].sort((a, b) => a - b)).eql([...before].sort((a, b) => a - b));

  // But not identical order
  should(after).not.eql(before);

  // And specifically no longer sorted ascending
  let stillSorted = true;
  for (let i = 0; i < after.length - 1; i++) {
    if (after[i] > after[i + 1]) {
      stillSorted = false;
      break;
    }
  }
  should(stillSorted).be.exactly(false);
});

test("scheduleUnsort() schedules unsort after 10s and calls unsort via injected timer", () => {
  const calls = [];
  /** @type {{ cb: null | ((...args:any[]) => any), delay: null | number }} */
  const captured = { cb: null, delay: null };

  const fakeSetTimeout = (cb, delay) => {
    captured.cb = cb;
    captured.delay = delay;
    return 123;
  };

  const fakeUnsort = (cubes) => {
    calls.push(cubes);
  };

  const cubes = { pixelGrid: [] };
  const id = scheduleUnsort(cubes, {
    delayMs: 10_000,
    setTimeoutFn: fakeSetTimeout,
    unsortFn: fakeUnsort,
  });

  should(id).be.exactly(123);
  should(captured.delay).be.exactly(10_000);

  // Trigger the scheduled callback
  if (captured.cb) captured.cb();
  should(calls.length).be.exactly(1);
  should(calls[0]).be.exactly(cubes);
});





