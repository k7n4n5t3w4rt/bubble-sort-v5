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

export default (renderer, params) => {
  const {
    cols,
    rows,
    speed,
    scaleX,
    scaleY,
    scaleZ,
    diffuseTargetRatio,
    diffuseMinMaxMs,
    diffuseSwapsPerTick,
    diffuseNeighborRadius,
    unsortPauseMs,
  } = params || {};
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

  /** @type {{ pixelGridGroup: any, pixelGrid: any[], moving: boolean, active: boolean, currentIndex: number, passHadSwap?: boolean, sortStartMs?: number, sortEndMs?: number, sortRunId?: number, unsortTimeoutId?: any, setTimeoutFn?: any, clearTimeoutFn?: any, unsortPauseMs?: number, diffusing?: boolean, diffuseIntervalId?: any, diffuseRunToken?: number, setIntervalFn?: any, clearIntervalFn?: any, nowFn?: any, diffuseTargetRatio?: number, diffuseMinMaxMs?: number, diffuseSwapsPerTick?: number, diffuseNeighborRadius?: number, gridCols?: number, gridRows?: number, randomFn?: any, logFn?: any, hasGrid?: boolean }} */
  const cubes = {
    pixelGridGroup: {},
    pixelGrid: /** @type {any[]} */ ([]),
    moving: false,
    active: false,
    currentIndex: 0,
  };
  cubes.logFn = console.log;
  if (diffuseTargetRatio != null && Number.isFinite(Number(diffuseTargetRatio))) {
    cubes.diffuseTargetRatio = Math.max(0, Math.min(1, Number(diffuseTargetRatio)));
  }
  if (diffuseMinMaxMs != null && Number.isFinite(Number(diffuseMinMaxMs))) {
    cubes.diffuseMinMaxMs = Math.max(0, Number(diffuseMinMaxMs));
  }
  if (diffuseSwapsPerTick != null && Number.isFinite(Number(diffuseSwapsPerTick))) {
    cubes.diffuseSwapsPerTick = Math.max(0, Number(diffuseSwapsPerTick));
  }
  if (diffuseNeighborRadius != null && Number.isFinite(Number(diffuseNeighborRadius))) {
    cubes.diffuseNeighborRadius = Math.max(1, Math.floor(Number(diffuseNeighborRadius)));
  }
  if (unsortPauseMs != null && Number.isFinite(Number(unsortPauseMs))) {
    cubes.unsortPauseMs = Math.max(0, Number(unsortPauseMs));
  }

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

