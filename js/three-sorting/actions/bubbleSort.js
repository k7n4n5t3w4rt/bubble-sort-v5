// --------------------------------------------------
// HELPERS
// --------------------------------------------------

import { scheduleUnsortFactory } from "./scheduleUnsortFactory.js";
import { unsortDiffuseFactory } from "./unsortDiffuseFactory.js";
import swapCubes from "./swapCubes.js";

const nowMs = () => {
  // eslint-disable-next-line no-undef
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    return performance.now();
  }
  return Date.now();
};

const formatMinutesSeconds = (totalMs) => {
  const totalSeconds = Math.max(0, Math.floor(totalMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
};

const startSorting = (cubes, meta = {}) => {
  cubes.active = true;
  cubes.moving = false;
  cubes.currentIndex = 0;
  cubes.passHadSwap = false;
  cubes.swapCount = 0;
  // Bubble-sort optimization:
  // - passEndIndex: exclusive upper bound for comparisons in the current pass.
  //   We never need to compare beyond the last known unsorted index.
  // - lastSwapIndex: last index involved in a swap during the current pass; next
  //   pass can stop at that index (everything after is already ordered).
  const n = Array.isArray(cubes?.pixelGrid) ? cubes.pixelGrid.length : 0;
  cubes.passEndIndex = Math.max(0, n - 1);
  cubes.lastSwapIndex = 0;
  cubes.sortStartMs = nowMs();
  cubes.sortEndMs = undefined;

  cubes.sortRunId = (cubes.sortRunId || 0) + 1;
  {
    const cubeCount = Array.isArray(cubes.pixelGrid)
      ? cubes.pixelGrid.length
      : 0;
    console.log(`[sort] #${cubes.sortRunId} start`, {
      startMs: cubes.sortStartMs,
      cubeCount,
      ...meta,
    });
  }
};

const move = (cubes, speed, scaleZ, anime) => {
  const doSwap = (from, to) => swapCubes(cubes, from, to, scaleZ, speed, anime);
  // NOTE:
  // This might not be very clear so:
  //
  // cubes is an an array of columns of cubes.
  // Each cube object is a REFERENCE to a THREE.js Mesh object that
  // was attached to the THREE.js scene in:
  //
  //		/js/three-sorting/actions/pixelGrid.js (Line 34)
  //
  let movingCube1 = true;
  let movingCube2 = true;
  if (cubes.passHadSwap == null) cubes.passHadSwap = false;
  // Ensure optimization state exists even if startSorting wasn't called (older state).
  if (cubes.passEndIndex == null || !Number.isFinite(cubes.passEndIndex)) {
    const n = Array.isArray(cubes?.pixelGrid) ? cubes.pixelGrid.length : 0;
    cubes.passEndIndex = Math.max(0, n - 1);
  }
  if (cubes.lastSwapIndex == null || !Number.isFinite(cubes.lastSwapIndex)) {
    cubes.lastSwapIndex = 0;
  }
  const currentIndex = cubes.currentIndex;
  const nextIndex = cubes.currentIndex + 1;
  const cube1 = cubes.pixelGrid[currentIndex];
  const cube2 = cubes.pixelGrid[nextIndex];

  if (cubes.moving === false) {
    // End-of-pass handling:
    // - stop comparisons once nextIndex exceeds the current pass bound (passEndIndex)
    // - also handle the array-end case defensively (cube2 === undefined)
    if (nextIndex > cubes.passEndIndex || cube2 === undefined) {
      // Stop after the first full pass with no swaps.
      if (cubes.passHadSwap === false) {
        cubes.active = false;
        cubes.currentIndex = 0;
        cubes.sortEndMs = nowMs();
        const sortStartMs =
          typeof cubes.sortStartMs === "number"
            ? cubes.sortStartMs
            : cubes.sortEndMs;
        const delayMs =
          cubes && typeof cubes.unsortPauseMs === "number"
            ? cubes.unsortPauseMs
            : 10_000;

        const schedule = scheduleUnsortFactory(
          cubes.setTimeoutFn || globalThis.setTimeout,
          cubes.clearTimeoutFn || globalThis.clearTimeout,
        );
        schedule(cubes, delayMs, (cs) => {
          if (!cs.gridCols || cs.gridCols <= 0) {
            const n = Array.isArray(cs.pixelGrid) ? cs.pixelGrid.length : 1;
            cs.gridCols = Math.max(1, n);
          }

          const runUnsortDiffuse = unsortDiffuseFactory(
            cs.setIntervalFn || globalThis.setInterval,
            cs.clearIntervalFn || globalThis.clearInterval,
            cs.nowFn || nowMs,
            cs.randomFn || Math.random,
          );

          runUnsortDiffuse(cs, {
            targetRatio:
              cs && typeof cs.diffuseTargetRatio === "number"
                ? cs.diffuseTargetRatio
                : 0.5,
            minMaxMs:
              cs && typeof cs.diffuseMinMaxMs === "number"
                ? cs.diffuseMinMaxMs
                : undefined,
            swapsPerTick:
              cs &&
              typeof cs.diffuseSwapsPerTick === "number" &&
              cs.diffuseSwapsPerTick > 0
                ? cs.diffuseSwapsPerTick
                : undefined,
            neighborRadius:
              cs && typeof cs.diffuseNeighborRadius === "number"
                ? cs.diffuseNeighborRadius
                : undefined,
            onComplete: ({ ratio, reason, elapsedMs, maxMs }) => {
              if (reason === "timeout") {
                const cubeCount = Array.isArray(cs.pixelGrid)
                  ? cs.pixelGrid.length
                  : 0;
                console.log("[unsort] diffuse timeout", {
                  cubeCount,
                  inversionRatio: ratio,
                  elapsedMs,
                  maxMs,
                });
              }
              cs.moving = false;
              cs.currentIndex = 0;
              cs.passHadSwap = false;
              const n = Array.isArray(cs.pixelGrid) ? cs.pixelGrid.length : 0;
              cs.passEndIndex = Math.max(0, n - 1);
              cs.lastSwapIndex = 0;
              cs.sortStartMs = nowMs();
              cs.sortEndMs = undefined;
              cs.sortRunId = (cs.sortRunId || 0) + 1;
              {
                const cubeCount = Array.isArray(cs.pixelGrid)
                  ? cs.pixelGrid.length
                  : 0;
                console.log(`[sort] #${cs.sortRunId} start`, {
                  startMs: cs.sortStartMs,
                  cubeCount,
                  inversionRatio: ratio,
                });
              }
              cs.active = true;
            },
          });
        });

        return cubes;
      }

      // Pass had swaps -> tighten the bound for the next pass and start over.
      // Everything after lastSwapIndex is already in correct relative order.
      cubes.passEndIndex = Math.max(
        0,
        Math.min(cubes.passEndIndex, cubes.lastSwapIndex || 0),
      );
      cubes.lastSwapIndex = 0;
      cubes.currentIndex = 0;
      cubes.passHadSwap = false;
      return cubes;
    }
    // console.log(`Trying cubes[${currentIndex}] and cubes[${nextIndex}]...`);

    // console.log(
    //   `Comparing cubes[${currentIndex}] bubble value (${cube1.bubble_value}) with  cubes[${nextIndex}] bubble value (${cube2.bubble_value})`,
    // );

    if (cube1.bubble_value > cube2.bubble_value) {
      // Mark that this pass performed at least one swap.
      cubes.passHadSwap = true;
      cubes.swapCount = (cubes.swapCount || 0) + 1;
      // Track the last swap position so we can skip the tail on the next pass.
      cubes.lastSwapIndex = nextIndex;
      //   console.log(
      //     `cubes[${currentIndex}] bubble value (${cube1.bubble_value}) > cubes[${nextIndex}] bubble value (${cube2.bubble_value})`,
      //   );

      //   console.log(`cubes.moving === `, cubes.moving);
      if (cubes.moving === false) {
        // console.log(
        //   `Preparing to swap cubes[${currentIndex}]and cubes[${nextIndex}]...`,
        // );

        const cube1StartZ = cube1.position.z;
        const cube1StartY = cube1.position.y;
        // This will cause all calls to move() to have no effect... until
        // the move has finished and cubes.moving is set back to false
        cubes.moving = true;

        // Advance index now; animation blocks further move() calls via cubes.moving.
        cubes.currentIndex = nextIndex;

        // Kick off the swap animation (BubbleSort does not await it here).
        doSwap(currentIndex, nextIndex);
      }
    } else {
      cubes.currentIndex = nextIndex;
    }
  }
  return cubes;
};

export default move;
