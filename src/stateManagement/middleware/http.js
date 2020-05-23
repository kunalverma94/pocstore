import { API } from "../actiontypes/actiontypes";
import { loadError, loadSuccess } from "../actions/dataActions";
import { BeginLoading, EndLoading } from "../actions/notificationAction";

export const http = (store) => (next) => (action) => {
  if (action.type !== API) {
    next(action);
    return;
  }
  const { onSuccess, request } = action.payload;
  next(BeginLoading());
  setTimeout(() => {
    try {
      request
        .then((h) => {
          return h.json ? h.json() : h;
        })
        .then((d) => {
          next(onSuccess(d));
        })
        .catch((e) => {
          next(loadError(e));
        })
        .finally(next(loadSuccess()));
    } catch (error) {
      next(loadError(error));
    } finally {
      next(EndLoading());
    }
  }, 500);
  next(action);
};
