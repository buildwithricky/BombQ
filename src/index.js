import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
const Renderable = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  Renderable
);
