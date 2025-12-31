//------------------------------------------------------------------
// IMPORT: TESTY
// ------------------------------------------------------------------
import { test, should } from "../server/testy.js";
// ------------------------------------------------------------------
// IMPORT: FUNCTION UNDER TEST
// ------------------------------------------------------------------
import quickSort from "../js/three-sorting/actions/quickSort.js";

const makeCube = (v) => ({
  value: v,
  bubble_value: v,
  selection_value: v,
  position: { x: 0, y: 0, z: 0 },
});

const makeCubeWithPos = (v, y, z) => ({
  value: v,
  bubble_value: v,
  selection_value: v,
  position: { x: 0, y, z },
});

const immediateAnime = (opts) => {
  if (opts && typeof opts.complete === "function") {
    opts.complete(opts);
  }
  return {};
};

test("quickSort sorts ascending and schedules repeat unsort", async () => {
  const captured = { cb: null, delay: null };
  const fakeScheduleUnsort = (_, delayMs, unsortFn) => {
    captured.delay = delayMs;
    captured.cb = () => unsortFn && unsortFn(cubes);
    return 1;
  };
  const cubes = {
    pixelGrid: [makeCube(3), makeCube(1), makeCube(2)],
    gridCols: 3,
    moving: false,
    active: true,
    scheduleUnsort: fakeScheduleUnsort,
    logFn: () => {},
  };

  // Step through quick sort until it completes (mock animation completes immediately).
  for (let i = 0; i < 200 && cubes.active; i++) {
    await quickSort(cubes, 1, 1, immediateAnime);
  }

  const values = cubes.pixelGrid.map((c) => c.value);
  should(values).eql([1, 2, 3]);
  should(cubes.active).be.exactly(false);
  should(typeof captured.cb).be.exactly("function");
});

test("quickSort handles pivot already in place (no stalls)", async () => {
  const captured = { cb: null, delay: null };
  const fakeScheduleUnsort = (_, delayMs, unsortFn) => {
    captured.delay = delayMs;
    captured.cb = () => unsortFn && unsortFn(cubes);
    return 1;
  };
  const cubes = {
    pixelGrid: [makeCube(1), makeCube(2), makeCube(3), makeCube(4)],
    gridCols: 4,
    moving: false,
    active: true,
    scheduleUnsort: fakeScheduleUnsort,
    logFn: () => {},
  };

  for (let i = 0; i < 200 && cubes.active; i++) {
    await quickSort(cubes, 1, 1, immediateAnime);
  }

  const values = cubes.pixelGrid.map((c) => c.value);
  should(values).eql([1, 2, 3, 4]);
  should(cubes.active).be.exactly(false);
  should(typeof captured.cb).be.exactly("function");
});

test("quickSort swap completion keeps cubes on distinct grid slots", async () => {
  const cubes = {
    pixelGrid: [makeCubeWithPos(3, 0, 0), makeCubeWithPos(1, 1, 0), makeCubeWithPos(2, 2, 0)],
    gridCols: 3,
    moving: false,
    active: true,
    scheduleUnsort: () => 1,
    logFn: () => {},
  };

  for (let i = 0; i < 200 && cubes.active; i++) {
    await quickSort(cubes, 1, 1, immediateAnime);
  }

  const values = cubes.pixelGrid.map((c) => c.value);
  const slots = cubes.pixelGrid.map((c) => `${c.position.x},${c.position.y},${c.position.z}`);
  const uniqueSlots = new Set(slots);

  should(values).eql([1, 2, 3]);
  should(uniqueSlots.size).be.exactly(cubes.pixelGrid.length);
});

