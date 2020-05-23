import { initial_state } from "../initial_state";
import {
  CLOSE_NOTIFICATION,
  NOTIFICATION,
  LOGIN,
  LOGOUT,
  INITILISE_APP,
} from "../actiontypes/actiontypes";

export default (s = initial_state.session, action) => {
  switch (action.type) {
    case INITILISE_APP:
      s = { ...s, ...action.payload.session };
      break;

    case LOGIN:
      s = { ...s, ...action.payload, isLoggedIn: true };
      break;

    case LOGOUT:
      s = { ...s, isLoggedIn: false, user: undefined, jwt: undefined };
      break;

    case NOTIFICATION:
      s = { ...s, loading: false, notification: action.payload };
      break;

    case CLOSE_NOTIFICATION:
      s = { ...s, notification: null };
      break;
    default:
      break;
  }
  return s;
};
