// --------------------------------------------------
// TYPES
// --------------------------------------------------
/** @typedef {import("./types.js").Cube} Cube */
/** @typedef {import("./types.js").CubeState} CubeState */
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import scheduleUnsort from "./scheduleUnsortFactory.js";
import unsortAndStart from "./unsortAndStart.js";
import animateSwap from "./animateSwap.js";
import nowMs from "./nowMs.js";

/**
 * @param {CubeState} cubeState
 * @param {number} speed
 * @param {number} scaleZ
 * @param {(opts: any) => any} anime // AnimeRunner-compatible function
 * @returns {CubeState}
 */
const move = (cubeState, speed, scaleZ, anime) => {
  if (cubeState.moving === false) {
    // End condition: once we’ve placed the last item, stop and schedule an unsort for the next run.
    // Ensure currentIndex is always a valid number before using it.
    const safeCurrentIndex =
      typeof cubeState.currentIndex === "number" ? cubeState.currentIndex : 0;
    if (safeCurrentIndex >= cubeState.pixelGrid.length - 1) {
      cubeState.active = false;
      cubeState.currentIndex = 0;
      cubeState.sortEndMs = nowMs();

      const schedule = scheduleUnsort;
      const delayMs =
        cubeState && typeof cubeState.unsortPauseMs === "number"
          ? cubeState.unsortPauseMs
          : 10_000;
      schedule(cubeState, delayMs, (cs) =>
        // unsortAndStart(cs, { startSorting: startSelection, nowFn: nowMs }),
        unsortAndStart(cs),
      );

      return cubeState;
    }

    const currentIndex /*: number */ =
      typeof cubeState.currentIndex === "number" ? cubeState.currentIndex : 0;
    const nextIndex = currentIndex + 1;
    const indexOfItemWLowestSelectionValue = cubeState.pixelGrid.reduce(
      (acc, cube, index) => {
        if (index > currentIndex) {
          if (cube.selection_value < acc[1]) {
            return [index, cube.selection_value];
          } else {
            return acc;
          }
        } else {
          return acc;
        }
      },
      [currentIndex, cubeState.pixelGrid[currentIndex].selection_value],
    )[0];
    const cube1 = cubeState.pixelGrid[currentIndex];
    const cube2 = cubeState.pixelGrid[indexOfItemWLowestSelectionValue];

    // console.log(`Trying cubes[${currentIndex}] and cubes[${nextIndex}]...`);

    // console.log(
    //   `Comparing cubes[${currentIndex}] selection value (${cube1.selection_value}) with  cubes[${nextIndex}] selection value (${cube2.selection_value})`,
    // );

    if (cube1.selection_value > cube2.selection_value) {
      //   console.log(
      //     `cubes[${currentIndex}] selection value (${cube1.selection_value}) > cubes[${nextIndex}] selection value (${cube2.selection_value})`,
      //   );

      //   console.log(`cubes.moving === `, cubes.moving);
      if (cubeState.moving === false) {
        // console.log(
        //   `Preparing to swap cubes[${currentIndex}]and cubes[${nextIndex}]...`,
        // );

        // This will cause all calls to move() to have no effect... until
        // the move has finished and cubes.moving is set back to false
        cubeState.moving = true;

        animateSwap(
          scaleZ,
          speed,
          anime,
          cubeState,
          currentIndex,
          indexOfItemWLowestSelectionValue,
          // () => {
          //   movingCube1 = false;
          //   movingCube2 = false;
          //   cubes.currentIndex = nextIndex;
          // },
        );
      }
    } else {
      cubeState.currentIndex = nextIndex;
    }
  }
  return cubeState;
};

export default move;
