// --------------------------------------------------
// THREE.js
// --------------------------------------------------
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
// HELPERS
// --------------------------------------------------
import seedString from "../simple_css_seed.js";
import {
  rawStyles,
  createStyles,
  setSeed,
} from "simplestyle-js";

setSeed(seedString("threebubblesortparams"));

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


export default (props )  => {
  // Set some defaults for missing props
  const cols  = props.cols;
  const rows  = props.rows;
  const speed  = props.speed;
  const scaleX  = props.scaleX;
  const scaleY  = props.scaleY;
  const scaleZ  = props.scaleZ;
  const dispatch  = props.dispatch;

  useEffect(() => {});

  const changeParam = (
    dispatch ,
    param ,
  )  => (
    e ,
  )  => {
    dispatch({
      type: "CHANGE_PARAM",
      payload: { param, value: e.target.value },
    });
  };

  return html`
    <div id="params-container" className="${styles.paramsContainer}">
      <fieldset>
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
