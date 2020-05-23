import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getDetail,
  clear,
} from "../../../stateManagement/actions/detailAction";
import "./detail.css";
import { Item } from "../../common/Item/item";

class Detail extends Component {
  componentDidMount() {
    let id = window.location.href.split("id=").reverse()[0];
    this.props.getDetail(id);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  render() {
    const { detail, item } = this.props.detail;
    return (
      <>
        <div className="details">
          {item && detail ? (
            <Item item={item}>
              <div className="info">
                <div className="s-badge">ID</div>
                <div className="value-stock">{detail.id}</div>
              </div>
              <div className="info">
                <div className="s-badge">ram</div>
                <div className="value-stock">{detail.ram} GB</div>
              </div>
              <div className="info">
                <div className="s-badge">storage</div>
                <div className="value-storage">{detail.storage} GB</div>
              </div>
              <div className="info">
                <div className="s-badge">color</div>
                <div className="value-stock">{detail.color} </div>
              </div>
              <div className="info">
                <div> Description:</div>
                <div>
                  <br />
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt perferendis odit eveniet? Amet est id rem explicabo
                    libero laborum sunt, similique dolor. Excepturi sed quas
                    omnis, reprehenderit distinctio ducimus cumque.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nesciunt perferendis odit eveniet? Amet est id rem explicabo
                    libero laborum sunt, similique dolor. Excepturi sed quas
                    omnis, reprehenderit distinctio ducimus cumque.
                  </p>
                </div>
              </div>
            </Item>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  detail: state.detail,
});

const mapDispatchToProps = {
  getDetail,
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
