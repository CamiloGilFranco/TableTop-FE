import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ORDER_SWITCH,
  ORDER_ID,
  ORDER_NUMBER,
} from "../../store/reducers/Order.reducer";
import "./CartItem.css";
import SingleDishItem from "./SingleDishItem";
import languageSelector from "../../assets/languages/languageSelector";

import Cookies from "universal-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";

import routePaths from "../../constants/routePaths";

const CartItem = () => {
  const cookies = new Cookies();
  const language = useSelector((state) => state.languageReducer);
  const itemsStore = useSelector((state) => state.cartReducer);
  const cartSubtotal = useSelector((state) => state.subtotalReducer);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const pathRegExp = /checkout/;
  const login = useSelector((state) => state.userReducer);
  const { isExpired } = useJwt(login.user.token);

  const handlePlaceOrder = () => {
    console.log(!cookies.get("token"));
    console.log(!isExpired);
    if (!cookies.get("token")) {
      toast.error("You must log in to continue", {
        position: "bottom-right",
      });
    } else if (!cartSubtotal) {
      toast.error("Your cart is empty", {
        position: "bottom-right",
      });
    } else {
      navigate("/restaurant/checkout");
    }
  };

  return (
    <div className="cart-item">
      <ToastContainer />
      {itemsStore.map((item, index) => {
        return (
          <SingleDishItem
            key={index}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            subtotal={item.subtotal}
            id={item.id}
            id_restaurant={item.id_restaurant}
          />
        );
      })}
      <div className="cart-item-finish">
        <div className="cart-item-finish-subtotal-container">
          <span className="cart-item-finish-subtotal-text">Subtotal</span>
          <span className="cart-item-finish-subtotal-value">
            ${cartSubtotal.toLocaleString()}
          </span>
        </div>
        <p className="cart-item-finish-warning">
          {languageSelector(language, "cartFinishWarning")}
        </p>
        {pathRegExp.test(location) ? (
          ""
        ) : (
          <button
            className="cart-item-finish-button"
            onClick={handlePlaceOrder}
          >
            {languageSelector(language, "cartPlaceOrder")}
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
