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
    algorithm = "bubble",
    diffuseTargetRatio,
    diffuseMinMaxMs,
    diffuseSwapsPerTick,
    diffuseNeighborRadius,
    unsortPauseMs,
  } = params || {};
  // Stop any existing animation loop before switching modes.
  renderer.setAnimationLoop(null);
  // Cleanup any previous run to avoid accumulating listeners/GPU resources.
  // @ts-ignore - ad-hoc internal property
  if (renderer && typeof renderer.__bubbleSortCleanup === "function") {
    try {
      // @ts-ignore - ad-hoc internal property
      renderer.__bubbleSortCleanup();
    } catch (_) {
      // ignore cleanup errors
    }
    // @ts-ignore - ad-hoc internal property
    renderer.__bubbleSortCleanup = null;
  }

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
  // In AR, cap pixel ratio to reduce GPU load / heat (helps prevent WebGL context loss).
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.0));
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

  // Log WebGL context loss/restoration (common failure mode on hot devices).
  // Attach once per renderer so repeated inits don't add duplicate listeners.
  if (
    renderer &&
    renderer.domElement &&
    // @ts-ignore - ad-hoc internal property
    renderer.__bubbleSortWebglListenersAttached !== true
  ) {
    // @ts-ignore - ad-hoc internal property
    renderer.__bubbleSortWebglListenersAttached = true;

    const getStats = () => ({
      cubeCount: Array.isArray(cubes.pixelGrid) ? cubes.pixelGrid.length : 0,
      active: Boolean(cubes.active),
      diffusing: Boolean(cubes.diffusing),
      pixelRatio:
        typeof renderer.getPixelRatio === "function" ? renderer.getPixelRatio() : undefined,
    });

    const onLost = (e) => {
      try {
        if (e && typeof e.preventDefault === "function") e.preventDefault();
      } catch (_) {
        // ignore
      }
      if (typeof cubes.logFn === "function") {
        cubes.logFn("[webgl] context lost", { mode: "ar", ...getStats() });
      }
    };
    const onRestored = () => {
      if (typeof cubes.logFn === "function") {
        cubes.logFn("[webgl] context restored", { mode: "ar", ...getStats() });
      }
    };

    renderer.domElement.addEventListener("webglcontextlost", onLost, false);
    renderer.domElement.addEventListener("webglcontextrestored", onRestored, false);

    // Store for later cleanup if needed.
    // @ts-ignore - ad-hoc internal property
    renderer.__bubbleSortWebglListenerFns = { onLost, onRestored };
  }

  const controller = renderer.xr.getController(0);
  const onSelect = onSelectBuildPixelGrid(
    reticleStuff,
    cubes,
    cols,
    rows,
    scaleX,
    scaleY,
    scaleZ,
    scene,
    camera,
  );
  controller.addEventListener("select", onSelect);
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
    algorithm,
  );

  const onResize = onWindowResize(camera, renderer, window);
  window.addEventListener("resize", onResize);

  const disposeMaterial = (m) => {
    if (!m) return;
    if (Array.isArray(m)) {
      for (const mm of m) disposeMaterial(mm);
      return;
    }
    if (typeof m.dispose === "function") m.dispose();
  };

  const disposeObject3D = (obj) => {
    if (!obj) return;
    if (obj.geometry && typeof obj.geometry.dispose === "function") obj.geometry.dispose();
    if (obj.material) disposeMaterial(obj.material);
  };

  // @ts-ignore - ad-hoc internal property
  renderer.__bubbleSortCleanup = () => {
    try {
      renderer.setAnimationLoop(null);
    } catch (_) {
      // ignore
    }

    // Stop any scheduled unsort/diffusion timers.
    try {
      if (cubes && cubes.unsortTimeoutId != null) {
        // eslint-disable-next-line no-undef
        if (typeof clearTimeout === "function") clearTimeout(cubes.unsortTimeoutId);
        cubes.unsortTimeoutId = null;
      }
    } catch (_) {
      // ignore
    }
    try {
      if (cubes && cubes.diffuseIntervalId != null) {
        // eslint-disable-next-line no-undef
        if (typeof clearInterval === "function") clearInterval(cubes.diffuseIntervalId);
        cubes.diffuseIntervalId = null;
      }
    } catch (_) {
      // ignore
    }

    try {
      window.removeEventListener("resize", onResize);
    } catch (_) {
      // ignore
    }

    try {
      controller.removeEventListener("select", onSelect);
      scene.remove(controller);
    } catch (_) {
      // ignore
    }

    // Dispose scene objects/materials/geometries to free GPU memory.
    try {
      if (scene && typeof scene.traverse === "function") {
        scene.traverse(disposeObject3D);
      }
    } catch (_) {
      // ignore
    }
  };
};

