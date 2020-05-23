import { API, LOAD_DETAIL, LOAD_ITEM, CLEAR } from "../actiontypes/actiontypes";
import { config } from "../../app/config";
import { loadError, loadSuccess } from "./dataActions";

export const getDetail = (id) => (dispatch) => {
  dispatch({
    type: API,
    payload: {
      request: fetch(`${config.DATA_SERVICE}?id=${id}`),
      onSuccess: loadItem,
      OnError: loadError,
      loadSuccess: loadSuccess,
    },
  });

  dispatch({
    type: API,
    payload: {
      request: fetch(`${config.DETAIL_SERVICE}?id=${id}`),
      onSuccess: loadItemDetail,
      OnError: loadError,
      loadSuccess: loadSuccess,
    },
  });
};

export const loadItem = (d) => ({ type: LOAD_ITEM, payload: d });
export const clear = () => ({ type: CLEAR });
export const loadItemDetail = (d) => ({ type: LOAD_DETAIL, payload: d });
