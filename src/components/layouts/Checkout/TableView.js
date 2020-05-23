import React from "react";
import { CartMenu } from "../../common/cartMenu";
import { Link } from "react-router-dom";
import { getGeographicalPrice } from "../../context/getGeographicalPrice";
export const TableView = ({ data }) => (
  <table>
    <thead>
      <tr>
        <th>Device</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {data.map((v, i) => (
        <tr key={i} title={v.item.title}>
          <td style={{ width: "1px" }} className="inline-link bill-device">
            <Link to={{ pathname: `/detail?id=${v.item.id}` }}>
              <div>{v.item.id}</div>
              <img src={v.item.image} alt="" className="check-img"></img>
              <div>{v.item.title.substr(0, 20)}...</div>
            </Link>
          </td>
          <td>
            <CartMenu item={v.item} />
            <div className="bill-quantity">{v.quantity}</div>
          </td>
          <td> {getGeographicalPrice(v.item.price)} </td>
          <td> {getGeographicalPrice(v.item.price * v.quantity)} </td>
        </tr>
      ))}
      <tr>
        <td></td>
        <td></td>
        <td>Total Payment</td>
        <td>
          {getGeographicalPrice(
            data
              .map((a) => a.quantity * a.item.price)
              .reduce(function (a, b) {
                return a + b;
              }, 0)
          )}
        </td>
      </tr>
    </tbody>
  </table>
);
