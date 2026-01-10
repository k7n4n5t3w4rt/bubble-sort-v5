// @flow
// --------------------------------------------------
// THREE.js
// --------------------------------------------------
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import bubbleSort from "./bubbleSort.js";
import selectionSort from "./selectionSort.js";
import quickSort from "./quickSort.js";
import insertionSort from "./insertionSort.js"; // Added: insertion sort algorithm
import shellSort from "./shellSort.js"; // Added: shell sort algorithm
import heapSort from "./heapSort.js"; // Added: heap sort algorithm
import cycleSort from "./cycleSort.js"; // Added: cycle sort algorithm
import combSort from "./combSort.js"; // Added: comb sort algorithm
import cocktailSort from "./cocktailSort.js"; // Added: cocktail shaker sort algorithm
import gnomeSort from "./gnomeSort.js"; // Added: gnome sort algorithm
import oddEvenSort from "./oddEvenSort.js"; // Added: odd-even (brick) sort algorithm
import initializeHitTestSource from "./initializeHitTestSource.js";
import anime from "animejs/lib/anime.es.js";

export default (
  sceneData,
  speed,
  scaleXm,
  scaleYm,
  scaleZm,
  cols,
  rows,
  algorithm = "bubble",
) => {
  return async (timestamp, frame) => {
    const scaleZ = scaleZm / 100;

    const session =
      sceneData?.renderer?.xr?.getSession && sceneData.renderer.xr.getSession();
    const inXRFrame = Boolean(frame && session);

    // XR-only: create a hit test source once per session.
    if (
      inXRFrame &&
      sceneData?.reticleStuff &&
      !sceneData.reticleStuff.hitTestSourceInitialized
    ) {
      sceneData = await initializeHitTestSource(sceneData);
    }

    const { stats, scene, camera, renderer, reticleStuff, cubes, controls } =
      sceneData;

    if (controls && typeof controls.update === "function") {
      controls.update();
    }

    // XR-only: update reticle pose/visibility.
    if (inXRFrame && reticleStuff && reticleStuff.active) {
      if (reticleStuff.hitTestSourceInitialized) {
        const hitTestResults = frame.getHitTestResults(
          reticleStuff.hitTestSource,
        );
        if (hitTestResults.length > 0) {
          const hit = hitTestResults[0];
          const pose = hit.getPose(reticleStuff.localSpace);
          if (reticleStuff.reticle) {
            reticleStuff.reticle.visible = true;
            reticleStuff.reticle.matrix.fromArray(pose.transform.matrix);
          }
        } else if (reticleStuff.reticle) {
          reticleStuff.reticle.visible = false;
        }
      }
    } else if (reticleStuff && reticleStuff.reticle) {
      reticleStuff.reticle.visible = false;
    }

    if (cubes && cubes.pixelGrid !== undefined && cubes.active === true) {
      // Route to the selected algorithm, including new "gnome" option.
      const sorter =
        algorithm === "selection"
          ? selectionSort
          : algorithm === "quick"
          ? quickSort
          : algorithm === "cocktail"
          ? cocktailSort
          : algorithm === "insertion"
          ? insertionSort
          : algorithm === "shell"
          ? shellSort
          : algorithm === "heap"
          ? heapSort
          : algorithm === "cycle"
          ? cycleSort
          : algorithm === "comb"
          ? combSort
          : algorithm === "gnome"
          ? gnomeSort
          : algorithm === "oddeven"
          ? oddEvenSort
          : bubbleSort;
      sorter(cubes, speed, scaleZ, anime);
    }

    if (stats && typeof stats.update === "function") stats.update();

    // Always render (works for both XR and normal 3D).
    renderer.render(scene, camera);
  };
};
