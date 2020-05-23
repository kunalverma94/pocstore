import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./checkout.css";
import { TableView } from "./TableView";

export const CheckOut = () => {
  const { cart, session } = useSelector((state) => state);
  const { cartItems, isLoggedIn } = { ...cart, ...session };

  const getList = () => {
    let _list = cartItems
      .filter((v, i, a) => a.findIndex((g) => g.id === v.id) === i)
      .map((v, i) => ({
        item: v,
        quantity: cartItems.filter((j) => j.id === v.id).length,
      }));
    _list.sort((a, b) => a.item.id - b.item.id);
    return _list;
  };

  let _cartItems = getList();

  const nextPage = isLoggedIn
    ? { pathname: "/payment", state: { requiredData: _cartItems } }
    : {
        pathname: "/login",
        state: {
          redirectTo: "/checkout",
          message: "You must be logged in to place order .Please login ",
        },
      };

  const OrderPage = () => (
    <>
      <TableView data={_cartItems} />
      <div className="place-order">
        <Link to={nextPage}>
          <button className="waves-effect waves-light btn-small">
            Place Order
          </button>
        </Link>
      </div>
    </>
  );

  return _cartItems.length > 0 ? OrderPage() : <h1>Cart Is empty!!</h1>;
};
