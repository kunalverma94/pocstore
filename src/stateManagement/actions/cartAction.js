import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOCAL_CART_UPDATE,
} from "../actiontypes/actiontypes";

export const addToCartAction = (item) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
  dispatch(updateCartAction());
};

export const removeFromCartAction = (item) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: item,
  });
  dispatch(updateCartAction());
};

export const updateCartAction = () => {
  return {
    type: LOCAL_CART_UPDATE,
  };
};
