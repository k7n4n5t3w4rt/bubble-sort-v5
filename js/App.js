// @flow
import { h } from "preact";
import Router from "preact-router";
import { html } from "htm/preact";
import { AppProvider } from "./AppContext.js";
import ThreeBubbleSort from "./three-bubble-sort/ThreeBubbleSort.js";
// import registerServiceWorker from "./registerServiceWorker.js";
const finishCounter = {
  ALGORITHMS: [],
  COUNT: 0,
};

/*::
type Props = {
  url: string
};
*/
const App /*: function */ = (props /*: Props */) => {
  return html`
    <${AppProvider} >
      <${Router} url="${props.url}">
      	<${ThreeBubbleSort} path="/" />
      </${Router}>
    </${AppProvider} >
  `;
};

export default App;
