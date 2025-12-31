// ------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------
import makeAnimateSwap from "./animateSwap.js";
import applySwap from "./applySwap.js";

/**
 * Swap two indices immediately in the pixelGrid and clear moving.
 * @param {import("./types.js").CubeState} cubeState
 * @param {number} a
 * @param {number} b
 * @param {number} scaleZ
 * @param {number} speed
 * @param {Function} anime
 */
const swapCubes = async (cubeState, a, b, scaleZ, speed, anime) => {
  const animateSwap = makeAnimateSwap(scaleZ, speed, anime);
  const { animA, animB } = animateSwap(cubeState, a, b) || {};

  const aFinished = animA && animA.finished;
  const bFinished = animB && animB.finished;

  // // If we have anime's Promise interface, await it. Otherwise, we fall back to
  // // synchronous completion (e.g. test stubs).
  // if (aFinished && typeof aFinished.then === "function" && bFinished && typeof bFinished.then === "function") {
  await Promise.all([aFinished, bFinished]);
  // }
};

export default swapCubes;

