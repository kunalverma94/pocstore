import {
  MAKE_PAYMENT,
  PAYMENT_SUCCESS,
  PAYMENT_ERROR,
  REFRESH,
  CHECK_OUT,
  PAYMENT_COMPLTE,
  LOCAL_CART_UPDATE,
} from "../actiontypes/actiontypes";
import { loadError } from "../actions/dataActions";
import { config } from "../../app/config";
import * as axios from "axios";

export const ProcessPaymenntActon = (request) => {
  request = request.map((i) => ({
    id: i.item.id,
    newStock: i.item.stock - i.quantity,
  }));

  return {
    type: MAKE_PAYMENT,
    payload: request.map((y) =>
      axios.default.patch(`${config.DATA_SERVICE}/${y.id}`, {
        stock: y.newStock,
      })
    ),
  };
};

export const PaymentSuccessAction = (id) => (dispatch) => {
  dispatch({
    type: PAYMENT_SUCCESS,
    payload: {
      id: id,
      success: true,
    },
  });
  dispatch({ type: REFRESH });
  dispatch({ type: CHECK_OUT });
  dispatch({ type: LOCAL_CART_UPDATE });
};

export const PaymenntErrorActon = (e) => (dispatch) => {
  dispatch({
    type: PAYMENT_ERROR,
    payload: {
      success: false,
      error: true,
    },
  });
  dispatch(loadError(e));
};

export const PaymentComplete = () => ({
  type: PAYMENT_COMPLTE,
});
