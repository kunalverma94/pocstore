import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  pageChange,
  loadDetfault,
} from "../../stateManagement/actions/dataActions";
import { useHistory } from "react-router-dom";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchCache } = useSelector((state) => state.appSetting);
  const history = useHistory();
  const [searchText, setsearchText] = useState(searchCache.title);

  const OnSearch = (e) => {
    e.preventDefault();
    if (searchText.trim() === "") {
      dispatch(loadDetfault());
    } else {
      dispatch(
        pageChange({
          page: 1,
          title: searchText,
          sortField: "id",
          sortOrder: "asc",
          limit: 100,
        })
      );
      history.push("/home");
    }
    return false;
  };

  return (
    <form style={{ width: "100%" }} onSubmit={(e) => OnSearch(e)}>
      <input
        id="search"
        type="search"
        name="search"
        className="search-input"
        placeholder="Search for products, brands and more"
        onInput={(e) => setsearchText(e.target.value)}
        required
      />
    </form>
  );
};
