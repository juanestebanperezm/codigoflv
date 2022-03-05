import React from "react";
import ReactDOM from "react-dom";

//Redux
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
   
      <App />
   
  </BrowserRouter>,
  document.getElementById("root")
);
