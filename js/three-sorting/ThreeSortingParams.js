// @flow
// --------------------------------------------------
// THREE.js
// --------------------------------------------------
// --------------------------------------------------
// PREACT
// --------------------------------------------------

import { useEffect } from "preact/hooks";
import { html } from "htm/preact";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import seedString from "../simple_css_seed.js";
import { rawStyles, createStyles, setSeed } from "simplestyle-js";

setSeed(seedString("threebubblesortparams"));

/**
 * Predefined 3D sorting presets, each expressed as a full
 * query string that can be applied via window.location.search.
 *
 * @typedef {Object} ThreeSortingPreset
 * @property {string} id Stable identifier for the preset.
 * @property {string} label Human-readable label shown in the UI.
 * @property {string} query Full query string (starting with "?").
 */
const threeSortingPresets /*: Array<ThreeSortingPreset> */ = [
  {
    id: "bitonic",
    label: "Bitonic",
    query:
      "?cols=6&rows=11&speed=5&scalex=1.2&scaley=2.3&scalez=1.9&algorithm=bitonic&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "pancake",
    label: "Pancake",
    query:
      "?cols=6&rows=11&speed=5&scalex=6.9&scaley=13.4&scalez=10.9&algorithm=pancake&diffuseSwapsPerTick=10&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "oddeven",
    label: "Odd-Even",
    query:
      "?cols=6&rows=13&speed=5&scalex=2.4&scaley=3.9&scalez=3.8&algorithm=oddeven&diffuseSwapsPerTick=10&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "insertion",
    label: "Insertion",
    query:
      "?cols=6&rows=11&speed=5&scalex=40.8&scaley=78.5&scalez=64.0&algorithm=insertion&diffuseSwapsPerTick=10&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "bubble",
    label: "Bubble",
    query:
      "?cols=7&rows=12&speed=5&scalex=4.2&scaley=8.6&scalez=6.5&algorithm=bubble&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "cocktail",
    label: "Cocktail",
    query:
      "?cols=7&rows=12&speed=5&scalex=1.4&scaley=3.0&scalez=2.3&algorithm=cocktail&diffuseSwapsPerTick=10&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "binaryinsertion",
    label: "Binary Insertion",
    query:
      "?cols=7&rows=12&speed=5&scalex=2.9&scaley=6.0&scalez=4.6&algorithm=binaryinsertion&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "gnome",
    label: "Gnome",
    query:
      "?cols=7&rows=12&speed=5&scalex=8.5&scaley=17.5&scalez=13.3&algorithm=gnome&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "heap",
    label: "Heap",
    query:
      "?cols=5&rows=10&speed=5&scalex=69.7&scaley=123.1&scalez=109.4&algorithm=heap&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "shell",
    label: "Shell",
    query:
      "?cols=11&rows=22&speed=5&scalex=15.6&scaley=27.6&scalez=24.5&algorithm=shell&diffuseSwapsPerTick=90&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "quick",
    label: "Quick",
    query:
      "?cols=11&rows=19&speed=5&scalex=7.7&scaley=15.7&scalez=12.1&algorithm=quick&diffuseSwapsPerTick=70&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "comb",
    label: "Comb",
    query:
      "?cols=10&rows=18&speed=5&scalex=70.8&scaley=138.9&scalez=111.1&algorithm=comb&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
  {
    id: "cycle",
    label: "Cycle",
    query:
      "?cols=20&rows=35&speed=5&scalex=24.8&scaley=50.1&scalez=39.0&algorithm=cycle&diffuseSwapsPerTick=200&diffuseNeighborRadius=2&unsortPauseMs=20000",
  },
  {
    id: "selection",
    label: "Selection",
    query:
      "?cols=19&rows=36&speed=5&scalex=6.3&scaley=11.8&scalez=9.9&algorithm=selection&diffuseSwapsPerTick=20&diffuseNeighborRadius=1&unsortPauseMs=20000",
  },
];

const [styles] = createStyles({
  paramsContainer: {
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    padding: "1rem",
    paddingTop: "3rem",
  },
});

rawStyles({
  output: {
    display: "block",
    float: "left",
    fontSize: "1rem",
    padding: "0.2rem",
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 2px grey",
  },
  label: {
    display: "block",
    float: "left",
    fontSize: "1rem",
    padding: "0.2rem",
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 2px grey",
  },
  ["input[type=text]"]: {
    boxSizing: "border-box",
    backgroundColor: "white",
    padding: "0.5rem",
  },
});

export default (props) => {
  // Set some defaults for missing props
  const cols = props.cols;
  const rows = props.rows;
  const speed = props.speed;
  const scaleX = props.scaleX;
  const scaleY = props.scaleY;
  const scaleZ = props.scaleZ;
  const algorithm = props.algorithm || "bubble";
  // Note: Unsort target inversion ratio is hard-coded elsewhere (0.5)
  const diffuseSwapsPerTick = props.diffuseSwapsPerTick ?? 0;
  const diffuseNeighborRadius = props.diffuseNeighborRadius ?? 1;
  const unsortPauseMs = props.unsortPauseMs ?? 10_000;
  const dispatch = props.dispatch;

  useEffect(() => {});

  const changeParam = (dispatch, param) => (e) => {
    dispatch({
      type: "CHANGE_PARAM",
      payload: { param, value: e.target.value },
    });
  };

  /**
   * Handles selection of a 3D sorting preset by reloading the page
   * with the preset's query string applied. This allows the existing
   * URL → state initialisation logic to configure the scene.
   *
   * @param {Event} event Change event from the preset <select>.
   * @returns {void}
   */
  const handlePresetChange = (event) => {
    const target = /** @type {HTMLSelectElement} */ (event.target);
    const selectedQuery = target.value;

    // When the neutral "Custom" option is selected, do nothing.
    if (!selectedQuery) {
      return;
    }

    // Assign the query string directly to trigger a full reload
    // with the preset parameters encoded in the URL.
    // This mirrors the AR-button pattern where a full URL
    // (including query) is used to re-enter the experience.
    window.location.search = selectedQuery;
  };

  return html`
    <div id="params-container" className="${styles.paramsContainer}">
      <fieldset>
        <div>
          <label for="presets">Preset:</label>
          <select id="preset" name="preset" onChange=${handlePresetChange}>
            <option value="">Custom</option>
            ${threeSortingPresets.map(
              (preset) =>
                html`<option value="${preset.query}">${preset.label}</option>`,
            )}
          </select>
        </div>
        <div>
          <label for="algorithm">Algorithm:</label>
          <select
            id="algorithm"
            name="algorithm"
            value="${algorithm}"
            onChange=${changeParam(dispatch, "algorithm")}
          >
            <option value="bubble">Bubble Sort</option>
            <!-- Added: Pancake Sort option to enable UI selection -->
            <option value="pancake">Pancake Sort</option>
            <!-- Added: Gnome Sort option to enable UI selection -->
            <option value="gnome">Gnome Sort</option>
            <!-- Added: Odd-Even (Brick) Sort option to enable UI selection -->
            <option value="oddeven">Odd-Even Sort</option>
            <!-- Added: Bitonic Sort option to enable UI selection -->
            <option value="bitonic">Bitonic Sort</option>
            <!-- Added: Cocktail Shaker Sort option to enable UI selection -->
            <option value="cocktail">Cocktail Shaker Sort</option>
            <!-- Added: Insertion Sort option to enable UI selection -->
            <option value="insertion">Insertion Sort</option>
            <!-- Added: Binary Insertion Sort option to enable UI selection -->
            <option value="binaryinsertion">Binary Insertion Sort</option>
            <!-- Added: Shell Sort option to enable UI selection -->
            <option value="shell">Shell Sort</option>
            <!-- Added: Heap Sort option to enable UI selection -->
            <option value="heap">Heap Sort</option>
            <!-- Added: Cycle Sort option to enable UI selection -->
            <option value="cycle">Cycle Sort</option>
            <!-- Added: Comb Sort option to enable UI selection -->
            <option value="comb">Comb Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="quick">Quick Sort</option>
          </select>
        </div>
        <div>
          <label for="cols">Columns:</label>
          <output id="colsOutput" name="colsOutput" for="cols"
            >${cols.toString()}</output
          >
          <input
            type="range"
            id="cols"
            name="cols"
            min="1"
            max="100"
            step="1"
            value="${cols.toString()}"
            onChange=${changeParam(dispatch, "cols")}
          />
        </div>
        <div>
          <label for="rows">Rows:</label>
          <output id="rowsOutput" name="rowsOutput" for="rows"
            >${rows.toString()}</output
          >
          <input
            type="range"
            name="rows"
            id="rows"
            min="1"
            max="100"
            step="1"
            onChange=${changeParam(dispatch, "rows")}
            value="${rows.toString()}"
          />
        </div>
        <div>
          <label for="speed">Speed:</label>
          <output id="speedOutput" name="speedOutput" for="speed"
            >${speed.toString()}</output
          >
          <input
            type="range"
            id="speed"
            name="speed"
            min="1"
            max="10"
            step="1"
            onChange=${changeParam(dispatch, "speed")}
            value="${speed.toString()}"
          />
        </div>
        <!-- Removed: diffuseMinMaxMs label and input (hard-coded to 3000ms) -->
        <div>
          <label for="diffuseSwapsPerTick"
            >Unsort swaps-per-tick (0 = auto):</label
          >
          <output
            id="diffuseSwapsPerTickOutput"
            name="diffuseSwapsPerTickOutput"
            for="diffuseSwapsPerTick"
            >${diffuseSwapsPerTick.toString()}</output
          >
          <input
            type="range"
            id="diffuseSwapsPerTick"
            name="diffuseSwapsPerTick"
            min="0"
            max="2000"
            step="10"
            onChange=${changeParam(dispatch, "diffuseSwapsPerTick")}
            value="${diffuseSwapsPerTick.toString()}"
          />
        </div>
        <div>
          <label for="diffuseNeighborRadius"
            >Unsort neighbor radius (1 = adjacent):</label
          >
          <output
            id="diffuseNeighborRadiusOutput"
            name="diffuseNeighborRadiusOutput"
            for="diffuseNeighborRadius"
            >${diffuseNeighborRadius.toString()}</output
          >
          <input
            type="range"
            id="diffuseNeighborRadius"
            name="diffuseNeighborRadius"
            min="1"
            max="6"
            step="1"
            onChange=${changeParam(dispatch, "diffuseNeighborRadius")}
            value="${diffuseNeighborRadius.toString()}"
          />
        </div>
        <div>
          <label for="unsortPauseMs">Pause before unsort (ms):</label>
          <output
            id="unsortPauseMsOutput"
            name="unsortPauseMsOutput"
            for="unsortPauseMs"
            >${unsortPauseMs.toString()}</output
          >
          <input
            type="range"
            id="unsortPauseMs"
            name="unsortPauseMs"
            min="0"
            max="60000"
            step="500"
            onChange=${changeParam(dispatch, "unsortPauseMs")}
            value="${unsortPauseMs.toString()}"
          />
        </div>
        <div>
          <label for="scaleX">Xcm:</label>
          <output id="scaleXOutput" name="scaleXOutput" for="scaleX"
            >${scaleX.toString()}</output
          >
          <input
            type="range"
            id="scaleX"
            name="scaleX"
            min="1"
            max="100"
            step="1"
            onChange=${changeParam(dispatch, "scaleX")}
            value="${scaleX.toString()}"
          />
        </div>
        <div>
          <label for="scaleY">Ycm:</label>
          <output id="scaleYOutput" name="scaleYOutput" for="scaleY"
            >${scaleY.toString()}</output
          >
          <input
            type="range"
            id="scaleY"
            name="scaleY"
            min="1"
            max="100"
            step="1"
            onChange=${changeParam(dispatch, "scaleY")}
            value="${scaleY.toString()}"
          />
        </div>
        <div>
          <label for="scaleZ">Zcm:</label>
          <output id="scaleZOutput" name="scaleZOutput" for="scaleZ"
            >${scaleZ.toString()}</output
          >
          <input
            type="range"
            id="scaleZ"
            name="scaleZ"
            min="1"
            max="100"
            step="1"
            onChange=${changeParam(dispatch, "scaleZ")}
            value="${scaleZ.toString()}"
          />
        </div>
      </fieldset>
    </div>
  `;
};
