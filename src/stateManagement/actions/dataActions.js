import {
  API,
  LOAD_DATA,
  ERROR,
  LOADING,
  PAGE_CHANGE,
} from "../actiontypes/actiontypes";
import { config } from "../../app/config";

export const GetData = (criterion) => {
  return {
    type: API,
    payload: {
      request: fetch(
        `${config.DATA_SERVICE}?title_like=${criterion.title}&_sort=${criterion.sortField}&_order=${criterion.sortOrder}&_page=${criterion.page}&_limit=${criterion.limit}`
      ),
      onSuccess: loadData,
    },
  };
};

export const pageChange = (page) => (dispatch) => {
  let c = {
    type: PAGE_CHANGE,
    payload: page,
  };
  dispatch(c);
  dispatch(GetData(page));
};

export const loadDetfault = () => (dispatch) => {
  let c = {
    type: PAGE_CHANGE,
    payload: {
      page: 1,
      title: "",
      sortField: "",
      sortOrder: "",
      limit: 4,
    },
  };
  dispatch(c);
  dispatch(GetData(c.payload));
};

export const loadData = (d) => ({
  type: LOAD_DATA,
  payload: d,
});

export const loadSuccess = (d) => ({
  type: LOADING,
  payload: false,
});

export const loadError = (e) => ({
  type: ERROR,
  payload: e,
});
