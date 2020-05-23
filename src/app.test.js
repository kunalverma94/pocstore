import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./stateManagement/initial_state";
import * as jest from "@testing-library/jest-dom";

function setupTestApp() {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

test("renders nav bar", () => {
  const app = setupTestApp();
  expect(app.container.firstChild.classList.contains("z-nav")).toBe(true);
});

test("renders main screen layout", () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(app.container.children[1].classList.contains("main-screen")).toBe(
    true
  );
});
