import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import LandingPage from "./components/home/LandingPage";

// import "./css/styles.scss";
ReactDOM.render(
  <Provider store={store}>
    <Header />
    <LandingPage />
  </Provider>,
  document.getElementById("root")
);
