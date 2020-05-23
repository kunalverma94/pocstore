import {
  INITILISE_APP,
  BOOT_LOCAL,
  LOCAL_CART_UPDATE,
} from "../actiontypes/actiontypes";
import { getLocalStorage, setLocalStorage } from "../helper";

export const localStorageMiddleware = (store) => (next) => (action) => {
  if (action.type === LOCAL_CART_UPDATE) {
    setLocalStorage("cartItems", store.getState().cart.cartItems);
  }
  if (action.type === BOOT_LOCAL) {
    next({ type: INITILISE_APP, payload: getLocalStorage });
  }
  next(action);
};
