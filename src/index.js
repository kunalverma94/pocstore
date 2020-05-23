import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./app/serviceWorker";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./stateManagement/initial_state";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
