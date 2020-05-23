import React, { Component } from "react";
import { connect } from "react-redux";
import { GetData } from "../../stateManagement/actions/dataActions";
import { Item } from "../common/Item/item";
import { ItemLoadingAnimation } from "../common/loading";
import { Filters } from "../common/Filters";
import "../common/Item/item.css";

class List extends Component {
  componentDidMount() {
    if (this.props.list && this.props.list.length === 0) {
      this.props.GetData(this.props.searchCache);
    }
  }

  showItems = () => {
    if (this.props.loading || this.props.list.length === 0) {
      return <ItemLoadingAnimation />;
    } else {
      return this.props.list.map((v, i, a) => <Item key={i} item={v} />);
    }
  };

  render() {
    return (
      <>
        <Filters />
        <div id="top" className="flex">
          {this.showItems()}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.data.list,
    loading: state.appSetting.loading,
    searchCache: state.appSetting.searchCache,
  };
};

const mapDispatchToProps = {
  GetData,
};

export const ListView = connect(mapStateToProps, mapDispatchToProps)(List);
