// --------------------------------------------------
// THREE.js
// --------------------------------------------------
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import createStats from "../../create_stats.js";
import onWindowResize from "../calculations/onWindowResize.js";
import animate from "./animate.js";
import pixelGrid from "./pixelGrid.js";
import scheduleUnsort from "./scheduleUnsort.js";
import unsort from "./unsort.js";
import getOrCreateRenderContainer from "./getOrCreateRenderContainer.js";

const nowMs = () => {
  // eslint-disable-next-line no-undef
  if (typeof performance !== "undefined" && typeof performance.now === "function") {
    return performance.now();
  }
  return Date.now();
};

const makeNonARReticleStuff = () => ({
  active: false,
  reticle: { visible: false },
  hitTestSourceInitialized: false,
  hitTestSource: null,
  localSpace: null,
});

export default (renderer, { cols, rows, speed, scaleX, scaleY, scaleZ }) => {
  // Stop any existing animation loop before switching modes.
  renderer.setAnimationLoop(null);

  const container = getOrCreateRenderContainer();
  if (!container) return;
  container.innerHTML = "";

  const stats = createStats();

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.01,
    100,
  );

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const hemi = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 0.8);
  hemi.position.set(0.5, 1, 0.25);
  scene.add(hemi);

  // Attach canvas + stats to container
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  container.appendChild(stats.domElement ?? stats.dom);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  const reticleStuff = makeNonARReticleStuff();

  /** @type {{ pixelGridGroup: any, pixelGrid: any[], moving: boolean, active: boolean, currentIndex: number, passHadSwap?: boolean, sortStartMs?: number, sortEndMs?: number, sortRunId?: number, unsortTimeoutId?: any, setTimeoutFn?: any, clearTimeoutFn?: any, randomFn?: any, logFn?: any }} */
  const cubes = {
    pixelGridGroup: {},
    pixelGrid: /** @type {any[]} */ ([]),
    moving: false,
    active: false,
    currentIndex: 0,
  };
  cubes.logFn = console.log;

  // Build grid immediately (normal 3D mode).
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
  // Do not start sorting until after the initial unsort runs.
  cubes.active = false;
  cubes.currentIndex = 0;
  cubes.passHadSwap = false;

  // Grid starts sorted; after it’s visible, unsort it, then begin sorting.
  scheduleUnsort(cubes, {
    delayMs: 10_000,
    unsortFn: (cs) => {
      unsort(cs, cs && typeof cs.randomFn === "function" ? cs.randomFn : Math.random);
      cs.moving = false;
      cs.currentIndex = 0;
      cs.passHadSwap = false;
      cs.sortStartMs = nowMs();
      cs.sortEndMs = undefined;
      cs.sortRunId = (cs.sortRunId || 0) + 1;
      if (typeof cs.logFn === "function") {
        const cubeCount = Array.isArray(cs.pixelGrid) ? cs.pixelGrid.length : 0;
        cs.logFn(`[sort] #${cs.sortRunId} start`, { startMs: cs.sortStartMs, cubeCount });
      }
      cs.active = true;
    },
  });

  // Frame the grid nicely.
  const box = new THREE.Box3().setFromObject(pixelGridGroup);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);

  const maxDim = Math.max(size.x, size.y, size.z);
  camera.position.set(center.x + maxDim * 0.8, center.y + maxDim * 0.6, center.z + maxDim * 2.0);
  camera.lookAt(center);
  controls.target.copy(center);
  controls.update();

  animate(
    {
      stats,
      scene,
      camera,
      renderer,
      reticleStuff,
      cubes,
      controls,
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

