// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import scheduleUnsort from "./scheduleUnsort.js";
import unsortDiffuse from "./unsortDiffuse.js";

const nowMs = () => {
  // eslint-disable-next-line no-undef
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
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
  cubes.sortStartMs = nowMs();
  cubes.sortEndMs = undefined;

  cubes.sortRunId = (cubes.sortRunId || 0) + 1;
  if (typeof cubes.logFn === "function") {
    const cubeCount = Array.isArray(cubes.pixelGrid) ? cubes.pixelGrid.length : 0;
    cubes.logFn(
      `[sort] #${cubes.sortRunId} start`,
      { startMs: cubes.sortStartMs, cubeCount, ...meta },
    );
  }
};

const unsortAndStartSorting = (cubes) => {
  cubes.active = false;

  // Allow deterministic tests by injecting timer + RNG sources.
  unsortDiffuse(cubes, {
    targetRatio:
      cubes && typeof cubes.diffuseTargetRatio === "number" ? cubes.diffuseTargetRatio : 0.5,
    minMaxMs:
      cubes && typeof cubes.diffuseMinMaxMs === "number" ? cubes.diffuseMinMaxMs : undefined,
    swapsPerTick:
      cubes && typeof cubes.diffuseSwapsPerTick === "number" && cubes.diffuseSwapsPerTick > 0
        ? cubes.diffuseSwapsPerTick
        : undefined,
    neighborRadius:
      cubes && typeof cubes.diffuseNeighborRadius === "number" ? cubes.diffuseNeighborRadius : undefined,
    randomFn: cubes && typeof cubes.randomFn === "function" ? cubes.randomFn : Math.random,
    setIntervalFn:
      cubes && typeof cubes.setIntervalFn === "function" ? cubes.setIntervalFn : setInterval,
    clearIntervalFn:
      cubes && typeof cubes.clearIntervalFn === "function" ? cubes.clearIntervalFn : clearInterval,
    nowFn: cubes && typeof cubes.nowFn === "function" ? cubes.nowFn : nowMs,
    onComplete: ({ ratio, reason, elapsedMs, maxMs }) => {
      if (reason === "timeout" && typeof cubes.logFn === "function") {
        const cubeCount = Array.isArray(cubes.pixelGrid) ? cubes.pixelGrid.length : 0;
        cubes.logFn("[unsort] diffuse timeout", {
          cubeCount,
          inversionRatio: ratio,
          elapsedMs,
          maxMs,
        });
      }
      startSorting(cubes, { inversionRatio: ratio });
    },
  });
};

const move = (
  cubes,
  speed,
  scaleZ,
  anime,
) => {
  // NOTE:
  // This might not be very clear so:
  //
  // cubes is an an array of columns of cubes.
  // Each cube object is a REFERENCE to a THREE.js Mesh object that
  // was atached to the THREE.js scene in:
  //
  //		/js/three-bubble-sort/actions/pixelGrid.js (Line 34)
  //
  let movingCube1 = true;
  let movingCube2 = true;
  if (cubes.passHadSwap == null) cubes.passHadSwap = false;
  const currentIndex = cubes.currentIndex;
  const nextIndex = cubes.currentIndex + 1;
  const cube1 = cubes.pixelGrid[currentIndex];
  const cube2 = cubes.pixelGrid[nextIndex];

  if (cubes.moving === false) {
    // End-of-pass handling (when nextIndex runs off the end).
    if (cube2 === undefined) {
      // Stop after the first full pass with no swaps.
      if (cubes.passHadSwap === false) {
        cubes.active = false;
        cubes.currentIndex = 0;
        cubes.sortEndMs = nowMs();
        const sortStartMs =
          typeof cubes.sortStartMs === "number" ? cubes.sortStartMs : cubes.sortEndMs;
        const totalMs = Math.max(0, cubes.sortEndMs - sortStartMs);
        const total = formatMinutesSeconds(totalMs);

        if (typeof cubes.logFn === "function") {
          cubes.logFn(
            `[sort] #${cubes.sortRunId || "?"} stop`,
            { stopMs: cubes.sortEndMs, totalMs, total },
          );
        }

        // Repeat: wait 10s, unsort, then start sorting again.
        const setTimeoutFn =
          cubes && typeof cubes.setTimeoutFn === "function" ? cubes.setTimeoutFn : setTimeout;
        const clearTimeoutFn =
          cubes && typeof cubes.clearTimeoutFn === "function" ? cubes.clearTimeoutFn : clearTimeout;
        scheduleUnsort(cubes, {
          delayMs:
            cubes && typeof cubes.unsortPauseMs === "number" ? cubes.unsortPauseMs : 10_000,
          setTimeoutFn,
          clearTimeoutFn,
          unsortFn: unsortAndStartSorting,
        });

        return cubes;
      }

      // Pass had swaps -> start a new pass.
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

        // Move cube1
        anime({
          targets: [cube1.position],
          x: [
            {
              value: cube1.position.x - 2 * scaleZ,
              duration: 1000 / speed / 2,
              delay: 0,
            },
            {
              value: cube1.position.x,
              duration: 1000 / speed,
              delay: 0,
            },
          ],
          z: [
            {
              value: cube2.position.z,
              duration: 1000 / speed,
              delay: 0,
            },
          ],
          y: [
            {
              value: cube2.position.y,
              duration: 1000 / speed,
              delay: 0,
            },
          ],
          delay: 500,
          easing: "easeInOutCirc",
          complete: function (anim) {
            // Move cube1
            movingCube1 = false;
            if (movingCube2 === false) {
              cubes.moving = false;
              cubes.currentIndex = nextIndex;
              cubes.pixelGrid[currentIndex] = cube2;
              cubes.pixelGrid[nextIndex] = cube1;
              return cubes;
            }
          },
        });
        anime({
          targets: [cube2.position],
          x: [
            {
              value: cube2.position.x + 2 * scaleZ,
              duration: 1000 / speed / 2,
              delay: 0,
            },
            {
              value: cube2.position.x,
              duration: 1000 / speed,
              delay: 0,
            },
          ],
          z: [{ value: cube1StartZ, duration: 1000 / speed, delay: 0 }],
          y: [{ value: cube1StartY, duration: 1000 / speed, delay: 0 }],
          delay: 500,
          easing: "easeInOutCirc",
          complete: function (anim) {
            // Move cube2
            movingCube2 = false;
            if (movingCube1 === false) {
              cubes.moving = false;
              cubes.currentIndex = nextIndex;
              cubes.pixelGrid[currentIndex] = cube2;
              cubes.pixelGrid[nextIndex] = cube1;
              return cubes;
            }
          },
        });
      }
    } else {
      cubes.currentIndex = nextIndex;
    }
  }
  return cubes;
};

export default move;
