import { LOGIN, LOGOUT } from "../actiontypes/actiontypes";
import { getLocalStorage, setLocalStorage, getFirstOrDefault } from "../helper";
import {
  BeginLoading,
  EndLoading,
  NotificationInfoAction,
} from "../actions/notificationAction";

export const authmiddleware = (store) => (next) => (action) => {
  if (action.type === LOGIN) {
    next(BeginLoading());
    let { jwt, user } = getFirstOrDefault(action.payload);
    setLocalStorage("session", { jwt: jwt, user: user, isLoggedIn: true });
    action.payload = { jwt, user };
    next(EndLoading());
    store.dispatch(NotificationInfoAction("Welcom " + user));
  }

  if (action.type === LOGOUT) {
    next(BeginLoading());
    setTimeout(() => {
      let { session } = getLocalStorage;
      setLocalStorage("session", { ...session, isLoggedIn: false });
      next(EndLoading());
      store.dispatch(NotificationInfoAction("Logged out Successful"));
    }, 1500);
  }

  next(action);
};
