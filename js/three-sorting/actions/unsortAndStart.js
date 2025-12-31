import unsortDiffuse from "./unsortDiffuse.js";

const defaultNowMs = () => {
  // eslint-disable-next-line no-undef
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
};

/**
 * Runs the diffusion/unsort phase, then invokes the provided startSorting callback.
 * Accepts optional injected timing/random sources for deterministic tests.
 */
export default function unsortAndStart(
  cubes,
  {
    startSorting,
    nowFn = defaultNowMs,
  } = {},
) {
  if (typeof startSorting !== "function") return;

  cubes.active = false;

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
    nowFn: cubes && typeof cubes.nowFn === "function" ? cubes.nowFn : nowFn,
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
}

