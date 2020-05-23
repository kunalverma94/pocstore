import { MAKE_PAYMENT } from "../actiontypes/actiontypes";
import * as jwt from "jsonwebtoken";
import { config } from "../../app/config";
import {
  PaymentSuccessAction,
  PaymenntErrorActon,
} from "../actions/paymentActions";
import { BeginLoading, EndLoading } from "../actions/notificationAction";

export const paymentmiddleware = (store) => (next) => (action) => {
  if (action.type === MAKE_PAYMENT) {
    store.dispatch(BeginLoading());
    let token = store.getState().session.jwt;
    let verifiedUser = jwt.verify(token, config.JWT_KEY);
    if (token && verifiedUser) {
      setTimeout(() => {
        Promise.all(action.payload)
          .then((w) => {
            if (w.every((f) => f.status === 200)) {
              store.dispatch(
                PaymentSuccessAction(
                  `POC#${Math.floor(Math.random() * 100000)}#ABC`
                )
              );
            }
          })
          .catch((e) => store.dispatch(PaymenntErrorActon(e)))
          .finally(store.dispatch(EndLoading()));
      }, 1500);
    } else {
      store.dispatch(PaymenntErrorActon("Server Authentication Failed"));
      store.dispatch(EndLoading());
    }
  }
  next(action);
};
