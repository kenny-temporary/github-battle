import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common/common.less";

import App from "./App";

function startApp(container) {
  const rootContainer = document.getElementById(container);
  ReactDOM.render(<App />, rootContainer);
}

startApp("root");
