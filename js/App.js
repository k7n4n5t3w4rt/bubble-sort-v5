// --------------------------------------------------
// PREACT
// --------------------------------------------------
import Router from "preact-router";
import { html } from "htm/preact";
import { AppProvider } from "./AppContext.js";
// --------------------------------------------------
// HELPERS
// --------------------------------------------------
import Sort from "./three-sorting/Sort.js";

/**
 *
 * @param {string} props
 * @returns
 */
const App = (props) => {
  return html`
    <${AppProvider} >
      <${Router} url="${props.url}">
      	<${Sort} path="/" />
      </${Router}>
    </${AppProvider} >
  `;
};

export default App;
