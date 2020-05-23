/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  pageChange,
  loadDetfault,
} from "../../stateManagement/actions/dataActions";

export const Pagenation = ({ newPageNumber }) => {
  const { appSetting, data } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { list, searchCache, total } = { ...appSetting, ...data };

  let { page, limit } = searchCache;
  let pagelimit = total / limit;

  const getPages = () => {
    return Array.apply(null, { length: pagelimit }).map((v, i) => (
      <li
        key={i}
        onClick={() =>
          i + 1 !== page
            ? dispatch(pageChange({ ...searchCache, page: i + 1 }))
            : false
        }
        className={i + 1 === page ? "active" : ""}
      >
        <a>{i + 1}</a>
      </li>
    ));
  };

  const getPagination = () => {
    if (searchCache.title === "") {
      if (list.length === 0) {
        return;
      }
      return (
        <ul className="pagination" style={{ textAlign: "center" }}>
          <li className={page === 1 ? "disabled waves-effect" : "waves-effect"}>
            <a
              onClick={() =>
                page === 1
                  ? false
                  : dispatch(pageChange({ ...searchCache, page: page - 1 }))
              }
            >
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          {getPages()}
          <li
            className={`waves-effect ${page === pagelimit ? "disabled " : ""}`}
          >
            <a
              onClick={() =>
                page !== pagelimit
                  ? dispatch(pageChange({ ...searchCache, page: page + 1 }))
                  : false
              }
            >
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <>
          <div className="search-page">
            <div className="end-result waves-effect">
              No More Result <i className="material-icons">&#xe612;</i>{" "}
            </div>
            <div
              className="exit-search waves-effect"
              onClick={() => dispatch(loadDetfault())}
            >
              Exit Search <i className="material-icons">&#xe879;</i>
            </div>
          </div>
        </>
      );
    }
  };

  return <div className="pagenation">{getPagination()}</div>;
};
