import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  pageChange,
  loadDetfault,
} from "../../stateManagement/actions/dataActions";

export const Filters = () => {
  const dispatch = useDispatch();
  const { searchCache } = useSelector((state) => state.appSetting);
  const { list } = useSelector((state) => state.data);

  if (list.length === 0) {
    return <></>;
  }

  const sort = (sortOrder) => {
    let _sc = searchCache;
    if (_sc.sortOrder !== sortOrder) {
      _sc.sortField = "price";
      _sc.sortOrder = sortOrder;
      dispatch(pageChange(_sc));
    }
  };

  return (
    <div className="filters">
      <div
        className={"waves-effect low-" + searchCache.sortOrder}
        onClick={() => sort("asc")}
      >
        Price :Low To High
      </div>
      <div
        className={"waves-effect high-" + searchCache.sortOrder}
        onClick={() => sort("desc")}
      >
        Price :High To Low
      </div>
      <div
        className="waves-effect"
        onClick={() =>
          searchCache.sortOrder !== "" ? dispatch(loadDetfault()) : false
        }
      >
        Default
      </div>
    </div>
  );
};
