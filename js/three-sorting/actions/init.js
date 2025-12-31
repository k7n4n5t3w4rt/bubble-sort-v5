import rendererSetup from "./rendererSetup.js";
import startButtonSetup from "./startButtonSetup.js";
import initNormal3D from "./initNormal3D.js";
import initAR from "./initAR.js";

export default (cols, rows, speed, scaleX, scaleY, scaleZ, diffusionParams = {}) => {
  const renderer = rendererSetup();

  const params = { cols, rows, speed, scaleX, scaleY, scaleZ, ...diffusionParams };
  const {
    algorithm,
    diffuseTargetRatio,
    diffuseMinMaxMs,
    diffuseSwapsPerTick,
    diffuseNeighborRadius,
    unsortPauseMs,
  } = diffusionParams || {};

  const locationString =
    `/?speed=${speed}` +
    `&scalex=${scaleX}&scaley=${scaleY}&scalez=${scaleZ}` +
    `&cols=${cols}&rows=${rows}` +
    `&algorithm=${algorithm ?? ""}` +
    `&diffuseTargetRatio=${diffuseTargetRatio ?? ""}` +
    `&diffuseMinMaxMs=${diffuseMinMaxMs ?? ""}` +
    `&diffuseSwapsPerTick=${diffuseSwapsPerTick ?? ""}` +
    `&diffuseNeighborRadius=${diffuseNeighborRadius ?? ""}` +
    `&unsortPauseMs=${unsortPauseMs ?? ""}`;

  // Workflow-style orchestration: create renderer once, then offer mode choices.
  /** @type {any} */ (startButtonSetup)(
      renderer,
      (r) => initNormal3D(r, params),
      (r) => initAR(r, params),
      { locationString, displayName: "START" },
    );
};
