// --------------------------------------------------
// THREE.js
// --------------------------------------------------
import * as THREE from "three";

export default () => {
  // Reuse a single renderer instance across rerenders/param changes.
  // This prevents duplicate canvases and keeps WebXR state consistent.
  // $FlowFixMe - globalThis typing
  const existing = globalThis.__bubbleSortRenderer;
  if (existing) {
    existing.setPixelRatio(window.devicePixelRatio);
    existing.setSize(window.innerWidth, window.innerHeight);
    existing.xr.enabled = true;
    return existing;
  }

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;
  // $FlowFixMe - globalThis typing
  globalThis.__bubbleSortRenderer = renderer;
  return renderer;
};

