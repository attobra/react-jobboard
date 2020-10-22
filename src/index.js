import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import LandingPage from "./components/home/LandingPage";

import "./css/styles.css";
ReactDOM.render(
  <Provider store={store}>
    <LandingPage />
  </Provider>,
  document.getElementById("root")
);
