// --------------------------------------------------
// THREE.js
// --------------------------------------------------
import * as THREE from "three";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import pixelGrid from "./pixelGrid.js";
import scheduleUnsort from "./scheduleUnsort.js";
import unsortDiffuse from "./unsortDiffuse.js";

const nowMs = () => {
  // eslint-disable-next-line no-undef
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
};

export default (
  reticleStuff,
  cubes,
  cols,
  rows,
  scaleX,
  scaleY,
  scaleZ,
  scene,
  camera,
) => () => {
  // Once the user selects a placement point, we should stop hit-testing and hide
  // the reticle. Previously this only happened if the reticle happened to be
  // visible at the exact moment of the tap, which could leave it visible.
  reticleStuff.active = false;
  if (reticleStuff.reticle) reticleStuff.reticle.visible = false;

  // Only build the grid once (do NOT use `cubes.active` for this, since we
  // intentionally keep sorting inactive until unsort completes).
  if (cubes.hasGrid !== true) {
    // Build the grid of pixels
    const { pixelGridGroup, pixelGridCubes } = pixelGrid(
      cols,
      rows,
      scaleX,
      scaleY,
      scaleZ,
      scene,
      reticleStuff,
    );
    cubes.pixelGrid = pixelGridCubes;
    cubes.pixelGridGroup = pixelGridGroup;
    cubes.gridCols = cols;
    cubes.gridRows = rows;
    cubes.moving = false;
    cubes.active = false;
    cubes.currentIndex = 0;
    cubes.passHadSwap = false;
    cubes.hasGrid = true;

    // Grid is created in sorted order; after it’s visible, unsort it, then begin sorting.
    scheduleUnsort(cubes, {
      delayMs: 10_000,
      unsortFn: (cs) => {
        cs.active = false;

        unsortDiffuse(cs, {
          targetRatio:
            cs && typeof cs.diffuseTargetRatio === "number" ? cs.diffuseTargetRatio : 0.5,
          minMaxMs:
            cs && typeof cs.diffuseMinMaxMs === "number" ? cs.diffuseMinMaxMs : undefined,
          swapsPerTick:
            cs && typeof cs.diffuseSwapsPerTick === "number" && cs.diffuseSwapsPerTick > 0
              ? cs.diffuseSwapsPerTick
              : undefined,
          neighborRadius:
            cs && typeof cs.diffuseNeighborRadius === "number"
              ? cs.diffuseNeighborRadius
              : undefined,
          randomFn: cs && typeof cs.randomFn === "function" ? cs.randomFn : Math.random,
          setIntervalFn:
            cs && typeof cs.setIntervalFn === "function" ? cs.setIntervalFn : setInterval,
          clearIntervalFn:
            cs && typeof cs.clearIntervalFn === "function"
              ? cs.clearIntervalFn
              : clearInterval,
          nowFn: cs && typeof cs.nowFn === "function" ? cs.nowFn : nowMs,
          onComplete: ({ ratio, reason, elapsedMs, maxMs }) => {
            if (reason === "timeout" && typeof cs.logFn === "function") {
              const cubeCount = Array.isArray(cs.pixelGrid) ? cs.pixelGrid.length : 0;
              cs.logFn("[unsort] diffuse timeout", {
                cubeCount,
                inversionRatio: ratio,
                elapsedMs,
                maxMs,
              });
            }
            cs.moving = false;
            cs.currentIndex = 0;
            cs.passHadSwap = false;
            cs.sortStartMs = nowMs();
            cs.sortEndMs = undefined;
            cs.sortRunId = (cs.sortRunId || 0) + 1;
            if (typeof cs.logFn === "function") {
              const cubeCount = Array.isArray(cs.pixelGrid) ? cs.pixelGrid.length : 0;
              cs.logFn(
                `[sort] #${cs.sortRunId} start`,
                { startMs: cs.sortStartMs, cubeCount, inversionRatio: ratio },
              );
            }
            cs.active = true;
          },
        });
      },
    });

    // console.log("cubes = ", JSON.stringify(cubes));

    // Get the direction in which the camera is looking
    const vector = new THREE.Vector3();
    camera.getWorldDirection(vector);
    const radians = Math.atan2(vector.x, vector.z);
    // Rotate the group on the Y axis (around it's centre, always the 0,0,0 point)
    cubes.pixelGridGroup.rotateY(radians);
    // Last thing: set the position of the cube based on the location of  the reticle
    pixelGridGroup.position.setFromMatrixPosition(reticleStuff.reticle.matrix);
  }
};
