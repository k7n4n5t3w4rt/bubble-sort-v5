// --------------------------------------------------
// THREE.js
// --------------------------------------------------
import * as THREE from "three";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import createStats from "../../create_stats.js";
import onWindowResize from "../calculations/onWindowResize.js";
import onSelectBuildPixelGrid from "./onSelectBuildPixelGrid.js";
import animate from "./animate.js";
import addReticleToScene from "../calculations/addReticleToScene.js";
import getOrCreateRenderContainer from "./getOrCreateRenderContainer.js";

export default (renderer, { cols, rows, speed, scaleX, scaleY, scaleZ }) => {
  // Stop any existing animation loop before switching modes.
  renderer.setAnimationLoop(null);

  const container = getOrCreateRenderContainer();
  if (!container) return;
  container.innerHTML = "";

  // Stats (useful in AR).
  const stats = createStats();

  // Make the scene, camera, geometry, etc.
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    50,
  );

  // Lighting
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  light.position.set(0.5, 1, 0.25);
  scene.add(light);

  // Attach canvas + stats to container
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  container.appendChild(stats.domElement ?? stats.dom);

  const reticleStuff = addReticleToScene({ stats, scene, camera, renderer });

  /** @type {{ pixelGridGroup: any, pixelGrid: any[], moving: boolean, active: boolean, currentIndex: number }} */
  const cubes = {
    pixelGridGroup: {},
    pixelGrid: /** @type {any[]} */ ([]),
    moving: false,
    active: false,
    currentIndex: 0,
  };

  const controller = renderer.xr.getController(0);
  controller.addEventListener(
    "select",
    onSelectBuildPixelGrid(
      reticleStuff,
      cubes,
      cols,
      rows,
      scaleX,
      scaleY,
      scaleZ,
      scene,
      camera,
    ),
  );
  scene.add(controller);

  animate(
    {
      stats,
      scene,
      camera,
      renderer,
      reticleStuff,
      cubes,
    },
    speed,
    scaleX,
    scaleY,
    scaleZ,
    cols,
    rows,
  );

  window.addEventListener("resize", onWindowResize(camera, renderer, window));
};

