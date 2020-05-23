import { API, LOGIN, AUTHORISE, LOGOUT } from "../actiontypes/actiontypes";
import { config } from "../../app/config";

export const ProcessLoginRequestAction = (user, password) => {
  return {
    type: API,
    payload: {
      request: fetch(
        `${config.USER_SERVICE}?user=${user}&password=${password}`
      ),
      onSuccess: LoginAction,
    },
  };
};

export const LoginAction = (d) => {
  return {
    type: LOGIN,
    payload: d,
  };
};

export const LogoutAction = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const Authorise = () => {
  return {
    type: AUTHORISE,
  };
};
