// ------------------------------------------------------------
// TYPES
// ------------------------------------------------------------
/** @typedef {import("./types.js").CubeState} CubeState */
// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------
import finalizeSwap from "./finalizeSwap.js";

/**
 * Animate swapping of two cubes with the given animation parameters.
 * @param {number} scaleZ - Scale factor along Z used to offset the X movement arc.
 * @param {number} speed - Higher is faster; used to compute durations.
 * @param {import("./types.js").AnimeRunner} anime - Animation runner (e.g., animejs) that returns an animation instance.
 * @param {CubeState} cubeState - Current cube grid/state.
 * @param {number} i - Index of the first cube.
 * @param {number} j - Index of the second cube.
 * @returns {{ animA?: any, animB?: any }} Animation instances for both cubes (if both targets exist); empty object otherwise.
 */
const animateSwap = (scaleZ, speed, anime, cubeState, i, j) => {
  const cubeA = cubeState.pixelGrid[i];
  const cubeB = cubeState.pixelGrid[j];
  if (!cubeA || !cubeB) {
    return {};
  }
  // const logFn = cubes && typeof cubes.logFn === "function" ? cubes.logFn : null;

  const cubeAStartZ = cubeA.position.z;
  const cubeAStartY = cubeA.position.y;
  const cubeBStartZ = cubeB.position.z;
  const cubeBStartY = cubeB.position.y;
  const cubeAStartX = cubeA.position.x;
  const cubeBStartX = cubeB.position.x;

  cubeState.moving = true;
  let aDone = false;
  let bDone = false;

  const maybeFinalize = () => {
    finalizeSwap({
      cubeState,
      cubeA,
      cubeB,
      i,
      j,
      cubeAStartX,
      cubeAStartY,
      cubeAStartZ,
      cubeBStartX,
      cubeBStartY,
      cubeBStartZ,
      aDoneRef: () => aDone,
      bDoneRef: () => bDone,
    });
  };

  const animA = anime({
    targets: [cubeA.position],
    x: [
      {
        value: cubeA.position.x - 2 * scaleZ,
        duration: 1000 / speed / 2,
        delay: 0,
      },
      { value: cubeA.position.x, duration: 1000 / speed, delay: 0 },
    ],
    z: [{ value: cubeBStartZ, duration: 1000 / speed, delay: 0 }],
    y: [{ value: cubeBStartY, duration: 1000 / speed, delay: 0 }],
    delay: 500,
    easing: "easeInOutCirc",
    complete: () => {
      aDone = true;
      maybeFinalize();
    },
  });

  const animB = anime({
    targets: [cubeB.position],
    x: [
      {
        value: cubeB.position.x + 2 * scaleZ,
        duration: 1000 / speed / 2,
        delay: 0,
      },
      { value: cubeB.position.x, duration: 1000 / speed, delay: 0 },
    ],
    z: [{ value: cubeAStartZ, duration: 1000 / speed, delay: 0 }],
    y: [{ value: cubeAStartY, duration: 1000 / speed, delay: 0 }],
    delay: 500,
    easing: "easeInOutCirc",
    complete: () => {
      bDone = true;
      maybeFinalize();
    },
  });

  return { animA, animB };
};

export default animateSwap;
