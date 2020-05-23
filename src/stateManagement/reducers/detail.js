import { initial_state } from "../initial_state";
import { LOAD_DETAIL, LOAD_ITEM } from "../actiontypes/actiontypes";
import { getFirstOrDefault } from "../helper";

export default (s = initial_state.detail, action) => {
  switch (action.type) {
    case LOAD_DETAIL:
      s = { ...s, detail: getFirstOrDefault(action.payload) };
      break;

    case LOAD_ITEM:
      s = { ...s, item: getFirstOrDefault(action.payload) };
      break;

    case "CLEAR":
      s = { ...s, item: undefined, detail: undefined };
      break;

    default:
      break;
  }
  return s;
};
