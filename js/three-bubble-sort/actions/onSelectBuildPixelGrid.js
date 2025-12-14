// --------------------------------------------------
// THREE.js
// --------------------------------------------------
import * as THREE from "three";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import pixelGrid from "./pixelGrid.js";
import scheduleUnsort from "./scheduleUnsort.js";

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

  if (cubes.active === undefined || cubes.active === false) {
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
    cubes.moving = false;
    cubes.active = true;
    cubes.currentIndex = 0;

    // Grid is created in sorted order; after it’s visible, unsort it.
    scheduleUnsort(cubes);

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
