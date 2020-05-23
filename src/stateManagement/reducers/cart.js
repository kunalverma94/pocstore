import { initial_state } from "../initial_state";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INITILISE_APP,
  CHECK_OUT,
} from "../actiontypes/actiontypes";

export default (s = initial_state.cart, action) => {
  switch (action.type) {
    case INITILISE_APP:
      s = { ...s, cartItems: action.payload.cartItems };
      break;

    case ADD_TO_CART:
      let _cart = [...s.cartItems, action.payload];
      s = { cartItems: _cart };
      break;

    case REMOVE_FROM_CART:
      let _i = s.cartItems.findIndex((g) => g.id === action.payload.id);
      if (_i >= 0) {
        s.cartItems.splice(_i, 1);
        let _cart = [...s.cartItems];
        s = { cartItems: _cart };
      }
      break;

    case CHECK_OUT:
      s = { cartItems: [] };
      break;

    default:
      break;
  }
  return s;
};
