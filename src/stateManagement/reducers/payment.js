import { initial_state } from "../initial_state";
import {
  PAYMENT_SUCCESS,
  PAYMENT_ERROR,
  PAYMENT_COMPLTE,
} from "../actiontypes/actiontypes";

export default (s = initial_state.payment, action) => {
  switch (action.type) {
    case PAYMENT_SUCCESS:
      s = { ...s, ...action.payload };
      break;

    case PAYMENT_COMPLTE:
      s = {};
      break;

    case PAYMENT_ERROR:
      s = { ...s, ...action.payload };
      break;

    default:
      break;
  }
  return s;
};
