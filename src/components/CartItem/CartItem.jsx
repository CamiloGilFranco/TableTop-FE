import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { es } from "../../assets/languages/languageES";
import { en } from "../../assets/languages/languajeEN";
import {
  ORDER_SWITCH,
  ORDER_ID,
  ORDER_NUMBER,
} from "../../store/reducers/Order.reducer";
import "./CartItem.css";
import SingleDishItem from "./SingleDishItem";
import { Link } from 'react-router-dom';

const CartItem = () => {
  const language = useSelector((state) => state.languageReducer);
  const itemsStore = useSelector((state) => state.cartReducer);
  const cartSubtotal = useSelector((state) => state.subtotalReducer);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const pathRegExp = /checkout/;

  const cartFinishWarning = () => {
    switch (language) {
      case "en":
        return en.cartFinishWarning;
      case "es":
        return es.cartFinishWarning;
      default:
        return en.cartFinishWarning;
    }
  };
  const cartPlaceOrder = () => {
    switch (language) {
      case "en":
        return en.cartPlaceOrder;
      case "es":
        return es.cartPlaceOrder;
      default:
        return en.cartPlaceOrder;
    }
  };

  return (
    <div className="cart-item">
      {itemsStore.map((item, index) => {
        return (
          <SingleDishItem
            key={index}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            subtotal={item.subtotal}
          />
        );
      })}
      <div className="cart-item-finish">
        <div className="cart-item-finish-subtotal-container">
          <span className="cart-item-finish-subtotal-text">Subtotal</span>
          <span className="cart-item-finish-subtotal-value">
            ${cartSubtotal}
          </span>
        </div>
        <p className="cart-item-finish-waring">{cartFinishWarning()}</p>
        {pathRegExp.test(location) ? (
          ""
        ) : (
          <button
            className="cart-item-finish-button"
            onClick={() => navigate("/restaurant/checkout")}
          >
            {cartPlaceOrder()}
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
