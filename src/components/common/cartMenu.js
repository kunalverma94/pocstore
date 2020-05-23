import { useSelector, useDispatch } from "react-redux";
import React from "react";
import {
  addToCartAction,
  removeFromCartAction,
} from "../../stateManagement/actions/cartAction";

export const CartMenu = ({ item }) => {
  const dispatch = useDispatch();
  const { stock } = item || {};
  const { cartItems } = useSelector((state) => state.cart);

  let quantity = cartItems.filter((f) => f.id === item.id).length;

  const addToCart = () => {
    if (quantity < stock) {
      dispatch(addToCartAction(item));
    }
  };

  const removeFromCart = () => {
    if (quantity >= 0) {
      dispatch(removeFromCartAction(item));
    }
  };

  const getControll = () => {
    let controll = (
      <div className="add-cart waves-effect" onClick={() => addToCart()}>
        Add To cart
      </div>
    );
    if (stock === 0) {
      controll = <div>Out Of Stock</div>;
    }
    if (quantity > 0) {
      controll = (
        <>
          <div className="add-to-cart" onClick={() => addToCart()}>
            <i className="material-icons">add_box</i>
          </div>
          <div className="cart-quantity">{quantity}</div>
          <div className="remove-from-cart" onClick={() => removeFromCart()}>
            <i className="material-icons">indeterminate_check_box</i>
          </div>
        </>
      );
    }
    return controll;
  };

  return <div className="cart-menu">{getControll()}</div>;
};
