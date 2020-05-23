import React from "react";
import { CartMenu } from "./components/common/cartMenu";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./stateManagement/initial_state";

test("renders cartMenu", () => {
  const cartMenu = render(
    <Provider store={store}>
      <CartMenu />
    </Provider>
  );
  expect(cartMenu).toBeDefined();
});

test("cartMenu should show 'Out Of Stock' when stock 0", () => {
  const cartMenu = render(
    <Provider store={store}>
      <CartMenu item={{ stock: 0 }} />
    </Provider>
  );
  expect(cartMenu.container.querySelector("div").textContent).toBe(
    "Out Of Stock"
  );
});

test("cartMenu should show 'Add To cart' when stock greater than 0", () => {
  const cartMenu = render(
    <Provider store={store}>
      <CartMenu item={{ stock: 99 }} />
    </Provider>
  );
  expect(cartMenu.container.querySelector("div").textContent).toBe(
    "Add To cart"
  );
});
