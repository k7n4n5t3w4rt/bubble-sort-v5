import { h } from "preact";
import Router from "preact-router";
import { html } from "htm/preact";
import { AppProvider } from "./AppContext.js";
import ThreeBubbleSort from "./three-bubble-sort/ThreeBubbleSort.js";
const finishCounter = {
  ALGORITHMS: [],
  COUNT: 0,
};


const App  = (props ) => {
  return html`
    <${AppProvider} >
      <${Router} url="${props.url}">
      	<${ThreeBubbleSort} path="/" />
      </${Router}>
    </${AppProvider} >
  `;
};

export default App;
