import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { http } from "./middleware/http";
import { error } from "./middleware/error";
import { logger } from "./middleware/logger";
import reducers from "./reducers/index";
import { localStorageMiddleware } from "./middleware/localstorage";
import { authmiddleware } from "./middleware/authmiddleware";
import { paymentmiddleware } from "./middleware/paymentmiddleware";

export const initial_state = {
  data: { list: [] },
  detail: {},
  session: {
    user: "",
    jwt: "",
    isLoggedIn: false,
    notification: {
      type: "",
      message: "",
    },
  },
  cart: { cartItems: [] },
  appSetting: {
    appState: 0,
    title: "POC e-Shop",
    loading: false,
    total: 20,
    searchCache: {
      page: 1,
      title: "",
      sortField: "",
      sortOrder: "",
      limit: 4,
    },
  },
  payment: { id: null },
};

const middlewares = [
  thunk,
  logger,
  http,
  paymentmiddleware,
  authmiddleware,
  localStorageMiddleware,
  error,
];

export const store = createStore(
  combineReducers(reducers),
  initial_state,
  applyMiddleware(...middlewares)
);
