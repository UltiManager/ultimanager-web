import * as React from "react";
import { render } from "react-dom";
import App from "./App";

const root = document.getElementById("app");

if (root) {
  document.body.appendChild(root);

  render(<App />, root);
} else {
  console.error("Could not find root element to render application in.");
}
