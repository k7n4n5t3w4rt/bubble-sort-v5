# Algorithms — AR Sorting Sculpture

An artwork that turns sorting algorithms into site-specific augmented-reality sculptures. You tune parameters in normal 3D mode until the motion and form feel right, then drop the algorithm into the world via AR, record the run in public space, and fold the captures into larger composite works (e.g., Instagram series).

## What it does
- Visualises Bubble Sort (more algorithms coming) as a grid of cubes that unsorts then sorts.
- Two modes: normal 3D for rapid iteration; AR for in-situ placement and capture.
- Parameter-driven performances: grid size, animation speed, physical scale, and unsort/diffusion behaviour to sculpt the motion before recording.

## How the app is wired
- Preact shell: `js/main.js` mounts `js/App.js`, which wraps routes in `AppProvider` (context/state).
- State & params: `js/AppContext.js` + `js/appReducer.js` manage param changes; `ThreeBubbleSort` owns the algorithm view and synchronises params to the URL for reproducible runs.
- Parameter UI: `js/three-bubble-sort/ThreeBubbleSortParams.js` renders sliders for grid dimensions, speed, physical scale (cm), and diffusion/unsort settings; dispatches `CHANGE_PARAM` into the reducer.
- Orchestration: `js/three-bubble-sort/actions/init.js` builds a shared WebGL renderer, then hands off to either 3D or AR entrypoints via `startButtonSetup` and a generated `locationString` (querystring preserving params).

### Three.js pipeline (shared pieces)
- Renderer: `rendererSetup.js` reuses a singleton `THREE.WebGLRenderer` with WebXR enabled to avoid duplicate canvases and keep AR session state consistent.
- Scene setup: both modes create a `Scene`, `PerspectiveCamera`, lights, stats overlay, and attach the renderer canvas into `#ar-container`.
- Grid data: `pixelGrid.js` (3D) and `onSelectBuildPixelGrid.js` (AR) build a cube grid whose dimensions and spacing come from current params.
- Animation loop: `animate.js` drives per-frame updates; `move.js` performs Bubble Sort steps when `cubes.active` is true; stats overlay updates every frame.
- Unsort → sort cycle: `scheduleUnsort.js` triggers `unsortDiffuse.js` to introduce inversion noise (controlled by target ratio, swaps per tick, neighbour radius, min/max duration), then hands control back to the sorter.
- Cleanup: both modes install `renderer.__bubbleSortCleanup` to stop animation loops, clear timers/intervals, remove listeners, and dispose geometries/materials to free GPU memory. WebGL context loss/restoration is logged to help diagnose hot-device failures.

### Normal 3D mode (`initNormal3D.js`)
- Adds `OrbitControls` for camera manipulation and immediately builds the grid.
- Frames the camera around the grid’s bounding box for a clean starting view.
- Runs the unsort-diffuse phase, then activates Bubble Sort; you iterate quickly here to find visually interesting parameter sets.

### AR mode (`initAR.js`)
- Uses WebXR; `ARButton` requests an `immersive-ar` session with hit-test and DOM overlay.
- `addReticleToScene` + `initializeHitTestSource` manage reticle placement; selecting places the grid at the hit-test pose.
- Caps pixel ratio to reduce GPU/thermal load on mobile; listens for WebGL context loss and logs telemetry.
- Animation loop renders within XR; reticle visibility updates per-frame based on hit-test results.

## Static type checking & tooling
- TypeScript-on-JS: `tsconfig.json` enables `allowJs` + `checkJs` with `strict: true` (JS is type-checked without emitting). `include` covers `js/**`, `server/**`, tests, and config files; vendor code is excluded.
- Globals: `types/globals.d.ts` supplies typings for `window.NODE_ENV`, `window.REMEMBER_ME`, `navigator.xr`, and `eruda` used by mobile debug tooling.
- Annotations: selective `@ts-ignore` / Flow-style comments are used where Three.js/WebXR types are ad-hoc or where global renderer reuse is intentional.
- Scripts: `npm run typecheck` runs tsc in no-emit mode; lint/format scripts are available in `package.json`. Vite serves/builds the app; Cypress E2E specs cover basic UI flows.

## Working with it
1) Iterate in 3D: open the app, adjust sliders (grid size, speed, physical scales, unsort/diffusion), watch the unsort→sort loop until you like the motion.  
2) Capture in AR: switch to AR mode, place the reticle on a surface, tap to drop the grid, record video in-situ.  
3) Share/compose: export captures (e.g., Instagram) and combine runs into larger works.  

## Future extensions
- Additional algorithms (e.g., Selection, Insertion) alongside Bubble Sort.
- Presets for “performance-ready” parameter sets tuned for AR scale/tempo.
- Richer logging/telemetry for field captures (context loss, frame rates).