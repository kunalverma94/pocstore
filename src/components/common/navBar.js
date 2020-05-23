/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import "./nav.css";
import { LogoutAction } from "../../stateManagement/actions/authActions";
import { AppContext } from "../../App";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(AppContext);
  const { cart, session } = useSelector((state) => state);
  const { cartItems, user, isLoggedIn } = { ...cart, ...session };

  const dnd = (e) => {
    new Promise((r) => {
      const i = setInterval(() => {
        var elems = document.querySelectorAll(".dropdown-trigger");
        if (elems.length > 0) {
          try {
            window.M.Dropdown.init(elems, {
              coverTrigger: false,
              width: "unset",
            });
          } catch (error) {
          } finally {
            clearInterval(i);
          }
        }
      }, 500);
    });
  };

  const setTheme = () =>
    document.documentElement.style.setProperty(
      "--pr",
      theme[Math.floor(Math.random() * theme.length)]
    );

  return (
    <div className="z-nav">
      <div className="z-item">
        <Link to={"home"}>
          <div className="waves-effect">
            <div className="material-icons">android</div>
            <div className="mh">POC</div>
          </div>
        </Link>
      </div>
      <div className="z-item zsearch zflex z-abs">
        <SearchBar />
      </div>
      <div className="z-item group">
        <ul
          id="dropdown1"
          className="
      dropdown-content"
        >
          <li>
            <a>Welcome {user}</a>
          </li>
          <li>
            <a>History</a>
          </li>
          <li>
            <a>Track Order</a>
          </li>
          <li className="divider"></li>
          <li>
            <a
              onClick={() => {
                dispatch(LogoutAction());
              }}
            >
              Log Out
            </a>
          </li>
        </ul>
        {user && user.length > 0 && isLoggedIn ? (
          <a
            className="dropdown-trigger"
            onLoad={dnd()}
            data-target="dropdown1"
          >
            <div className="zflex waves-effect">
              <div className="material-icons"> person_pin</div>
              <div className=" mh"> {user}</div>
              <div className="material-icons">&#xe5c5;</div>
            </div>
          </a>
        ) : (
          <Link to={"login"}>
            <div className="zflex waves-effect">
              <div className="material-icons"> person_pin</div>
              <div className="user">Login</div>
            </div>
          </Link>
        )}
        <Link to={"checkout"} className="z-cart">
          <div className="cart-group zflex waves-effect">
            <div className="material-icons">shopping_cart</div>
            <div className="z-cart-length"> {cartItems.length}</div>
          </div>
        </Link>
        <a className=" waves-effect" onClick={() => setTheme()}>
          <div className="material-icons">settings</div>
        </a>
      </div>
    </div>
  );
};
