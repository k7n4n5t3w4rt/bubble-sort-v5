// --------------------------------------------------
// THREE.js
// --------------------------------------------------
import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { TGALoader } from "three/examples/jsm/loaders/TGALoader.js";
// --------------------------------------------------
// PREACT
// --------------------------------------------------
import {
  useEffect,
  useState,
  useReducer,
} from "preact/hooks";
import { html } from "htm/preact";
// --------------------------------------------------
// COMPONENTS
// --------------------------------------------------
import Params from "./ThreeSortingParams.js";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import AppReducer from "../appReducer.js";
import init from "./actions/init.js";
import seedString from "../simple_css_seed.js";
import {
  rawStyles,
  createStyles,
  setSeed,
} from "simplestyle-js";

setSeed(seedString("sortingvis"));

const [styles] = createStyles({
  sortingContainer: {
    width: "100%",
    height: "100%",
    backgroundImage: "url(/img/bg1.png)",
    backgroundClip: "border-box",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    position: "absolute",
  },
});


export default (props) => {
  // Set some defaults for missing props
  const cols = Math.abs(parseInt(props.cols) || 5);
  const rows = Math.abs(parseInt(props.rows) || 4);
  const speed = Math.abs(parseFloat(props.speed) || 1);
  const scaleX = Math.abs(Math.floor(parseFloat(props.scalex)) || 10);
  const scaleY = Math.abs(Math.floor(parseFloat(props.scaley)) || 10);
  const scaleZ = Math.abs(Math.floor(parseFloat(props.scalez)) || 10);
  const algorithm =
    typeof props.algorithm === "string" && props.algorithm.length > 0
      ? props.algorithm
      : "bubble";
  const diffuseTargetRatio = Math.min(
    1,
    Math.max(0, parseFloat(props.diffuseTargetRatio) || 0.5),
  );
  const diffuseMinMaxMs = Math.max(0, Math.floor(parseFloat(props.diffuseMinMaxMs)) || 5000);
  const diffuseSwapsPerTick = Math.max(0, Math.floor(parseFloat(props.diffuseSwapsPerTick)) || 0);
  const diffuseNeighborRadius = Math.max(
    1,
    Math.floor(parseFloat(props.diffuseNeighborRadius)) || 1,
  );
  const unsortPauseMs = Math.max(0, Math.floor(parseFloat(props.unsortPauseMs)) || 10_000);

  const [state, dispatch] = useReducer(AppReducer, {
    cols,
    rows,
    speed,
    scaleX,
    scaleY,
    scaleZ,
    algorithm,
    diffuseTargetRatio,
    diffuseMinMaxMs,
    diffuseSwapsPerTick,
    diffuseNeighborRadius,
    unsortPauseMs,
  });

  useEffect(() => {
    // Keep URL query params in sync so reloads preserve settings (desktop + mobile).
    // This mirrors the AR flow which already reloads with a querystring on STOP AR.
    // eslint-disable-next-line no-undef
    if (typeof window !== "undefined" && window.history && typeof window.history.replaceState === "function") {
      try {
        // eslint-disable-next-line no-undef
        const url = new URL(window.location.href);
        url.searchParams.set("cols", String(state.cols));
        url.searchParams.set("rows", String(state.rows));
        url.searchParams.set("speed", String(state.speed));
        // Note: query uses scalex/scaley/scalez (legacy)
        url.searchParams.set("scalex", String(state.scaleX));
        url.searchParams.set("scaley", String(state.scaleY));
        url.searchParams.set("scalez", String(state.scaleZ));
        url.searchParams.set("algorithm", String(state.algorithm || "bubble"));

        url.searchParams.set("diffuseTargetRatio", String(state.diffuseTargetRatio));
        url.searchParams.set("diffuseMinMaxMs", String(state.diffuseMinMaxMs));
        url.searchParams.set("diffuseSwapsPerTick", String(state.diffuseSwapsPerTick));
        url.searchParams.set("diffuseNeighborRadius", String(state.diffuseNeighborRadius));
        url.searchParams.set("unsortPauseMs", String(state.unsortPauseMs));

        window.history.replaceState({}, "", `${url.pathname}?${url.searchParams.toString()}`);
      } catch (e) {
        // Ignore URL update failures (e.g. older browsers / sandboxed envs).
      }
    }

    init(
      state.cols,
      state.rows,
      state.speed,
      state.scaleX,
      state.scaleY,
      state.scaleZ,
      {
        algorithm: state.algorithm,
        diffuseTargetRatio: state.diffuseTargetRatio,
        diffuseMinMaxMs: state.diffuseMinMaxMs,
        diffuseSwapsPerTick: state.diffuseSwapsPerTick,
        diffuseNeighborRadius: state.diffuseNeighborRadius,
        unsortPauseMs: state.unsortPauseMs,
      },
    );
  }, [
    state.cols,
    state.rows,
    state.speed,
    state.scaleX,
    state.scaleY,
    state.scaleZ,
    state.algorithm,
    state.diffuseTargetRatio,
    state.diffuseMinMaxMs,
    state.diffuseSwapsPerTick,
    state.diffuseNeighborRadius,
    state.unsortPauseMs,
  ]);

  return html`
    <div id="sorting-vis" className="${styles.sortingContainer}">
      <div id="dom-overlay">
        <div id="console-ui"></div>
      </div>
      <${Params}
        cols="${state.cols}"
        rows="${state.rows}"
        speed="${state.speed}"
        scaleX="${state.scaleX}"
        scaleY="${state.scaleY}"
        scaleZ="${state.scaleZ}"
        algorithm="${state.algorithm}"
        diffuseTargetRatio="${state.diffuseTargetRatio}"
        diffuseMinMaxMs="${state.diffuseMinMaxMs}"
        diffuseSwapsPerTick="${state.diffuseSwapsPerTick}"
        diffuseNeighborRadius="${state.diffuseNeighborRadius}"
        unsortPauseMs="${state.unsortPauseMs}"
        dispatch="${dispatch}"
      />
    </div>
  `;
};
