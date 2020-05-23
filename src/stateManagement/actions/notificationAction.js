import { NOTIFICATION, LOADING } from "../actiontypes/actiontypes";

export const NotificationType = {
  ERROR: "ERROR",
  UNAUTHORISED: "UNAUTHORISED",
  WARNING: "WARNING",
  INFO: "INFO",
};

export const NotificationInfoAction = (msg) => ({
  type: NOTIFICATION,
  payload: { type: NotificationType.INFO, message: msg },
});

export const NotificationUnauthorisedAction = (msg) => ({
  type: NOTIFICATION,
  payload: { type: NotificationType.UNAUTHORISED, message: msg },
});

export const NotificationErrorAction = (msg) => ({
  type: NOTIFICATION,
  payload: { type: NotificationType.ERROR, message: msg },
});

export const BeginLoading = () => ({ type: LOADING, payload: true });

export const EndLoading = () => ({ type: LOADING, payload: false });
