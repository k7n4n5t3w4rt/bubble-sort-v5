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
import Params from "./ThreeBubbleSortParams.js";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import AppReducer from "../appReducer.js";
import setupMobileDebug from "../setup_mobile_debug.js";
import init from "./actions/init.js";
import seedString from "../simple_css_seed.js";
import {
  rawStyles,
  createStyles,
  setSeed,
} from "simplestyle-js";

setSeed(seedString("bubblesort"));

const [styles] = createStyles({
  bubbleSort: {
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

  const [state, dispatch] = useReducer(AppReducer, {
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

        url.searchParams.set("diffuseTargetRatio", String(state.diffuseTargetRatio));
        url.searchParams.set("diffuseMinMaxMs", String(state.diffuseMinMaxMs));
        url.searchParams.set("diffuseSwapsPerTick", String(state.diffuseSwapsPerTick));
        url.searchParams.set("diffuseNeighborRadius", String(state.diffuseNeighborRadius));

        window.history.replaceState({}, "", `${url.pathname}?${url.searchParams.toString()}`);
      } catch (e) {
        // Ignore URL update failures (e.g. older browsers / sandboxed envs).
      }
    }

    // setupMobileDebug();
    init(
      state.cols,
      state.rows,
      state.speed,
      state.scaleX,
      state.scaleY,
      state.scaleZ,
      {
        diffuseTargetRatio: state.diffuseTargetRatio,
        diffuseMinMaxMs: state.diffuseMinMaxMs,
        diffuseSwapsPerTick: state.diffuseSwapsPerTick,
        diffuseNeighborRadius: state.diffuseNeighborRadius,
      },
    );
  }, [
    state.cols,
    state.rows,
    state.speed,
    state.scaleX,
    state.scaleY,
    state.scaleZ,
    state.diffuseTargetRatio,
    state.diffuseMinMaxMs,
    state.diffuseSwapsPerTick,
    state.diffuseNeighborRadius,
  ]);

  return html`
    <div id="bubble-sort" className="${styles.bubbleSort}">
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
        diffuseTargetRatio="${state.diffuseTargetRatio}"
        diffuseMinMaxMs="${state.diffuseMinMaxMs}"
        diffuseSwapsPerTick="${state.diffuseSwapsPerTick}"
        diffuseNeighborRadius="${state.diffuseNeighborRadius}"
        dispatch="${dispatch}"
      />
    </div>
  `;
};
