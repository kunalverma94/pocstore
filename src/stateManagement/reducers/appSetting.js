import { initial_state } from "../initial_state";
import {
  INITILISE_APP,
  LOADING,
  PAGE_CHANGE,
} from "../actiontypes/actiontypes";

export default (s = initial_state.appSetting, action) => {
  switch (action.type) {
    case INITILISE_APP:
      s = { ...s, appState: action.payload.appState };
      break;

    case LOADING:
      s = { ...s, loading: action.payload };
      break;

    case PAGE_CHANGE:
      s = { ...s, searchCache: action.payload };
      break;

    default:
      break;
  }
  return s;
};
