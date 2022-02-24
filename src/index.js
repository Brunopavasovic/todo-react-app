import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { globalCss } from "./stitches.config";
import { opinionated } from "stitches-normalize-css";

const globalStyles = globalCss({
  ...opinionated,
  input: {
    background: "$white",
  },
  body: { margin: 0, padding: 0, background: "$white", color: "$gray-700" },
  html: { margin: 0, padding: 0 },
  "*": {
    boxSizing: "border-box",
    "&::before": {
      boxSizing: "border-box",
    },
    "&::after": {
      boxSizing: "border-box",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {globalStyles()}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
