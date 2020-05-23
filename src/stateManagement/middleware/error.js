import { ERROR, NOTIFICATION } from "../actiontypes/actiontypes";

export const error = (store) => (next) => (action) => {
  if (action.type === ERROR) {
    next({
      type: NOTIFICATION,
      payload: { type: ERROR, message: action.payload },
    });
    return;
  }

  next(action);
};
