import { h } from "preact";
import Router from "preact-router";
import { html } from "htm/preact";
import { AppProvider } from "./AppContext.js";
import Sort from "./three-sorting/Sort.js";
const finishCounter = {
  ALGORITHMS: [],
  COUNT: 0,
};


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
