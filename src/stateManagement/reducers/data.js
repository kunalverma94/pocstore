import { initial_state } from "../initial_state";
import { LOAD_DATA, REFRESH } from "../actiontypes/actiontypes";

export default (s = initial_state.data, action) => {
  switch (action.type) {
    case LOAD_DATA:
      s = { ...s, list: action.payload };
      break;

    case REFRESH:
      s = { ...initial_state.data };
      break;

    default:
      break;
  }
  return s;
};
