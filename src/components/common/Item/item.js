import React from "react";
import { CartMenu } from "../cartMenu";
import { Link } from "react-router-dom";
import { AppContext } from "../../../App";
import { config } from "../../../app/config";

export const Item = (props) => {
  const { item, children } = props;
  const { id, title, image, price, stock, rating } = item;
  const getStar = (n) =>
    Array.apply(null, { length: 5 }).map((v, i) => (
      <i
        key={i}
        className={"stars material-icons " + (n < i + 1 ? "filled" : "empty")}
      >
        star
      </i>
    ));

  return (
    <div className="flex-item">
      <div className="card">
        <Link to={{ pathname: `/detail?id=${id}` }}>
          <div className="card-image">
            <img src={image} alt={id} />
            <span className="card-title insight-rating ">
              <i className="stars material-icons filled ">&#xe838; </i>
              <span className="rating">{rating}</span>
            </span>
          </div>
          <div className="waves-effect">
            <div className="card-action card-title">
              <div className="info-title">{title}</div>
            </div>
            <div className="card-content ">
              <div className="info-tab">
                <div className="info">
                  <div className="s-badge">Price</div>
                  <div className="value-price">
                    <AppContext.Consumer>
                      {(value) => value.REGION[config.CURRENT_REGION]}
                    </AppContext.Consumer>
                    {price}
                  </div>
                </div>
                <div className="info">
                  <div className="s-badge">Stock</div>
                  <div className="value-stock">{stock}</div>
                </div>
                <div className="info">
                  <div className="s-badge">Rating</div>
                  <div className="value">{getStar(rating, stock)}</div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </Link>
        <div className="card-action">
          <CartMenu item={item} />
        </div>
      </div>
    </div>
  );
};
