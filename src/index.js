// Imports
// --------------------------------
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import GlobalStyles from "./styles/GlobalStyles";

// Render
// --------------------------------
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
