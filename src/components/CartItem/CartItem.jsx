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
import routePaths from "../../constants/routePaths";

const CartItem = () => {
  const language = useSelector((state) => state.languageReducer);
  const itemsStore = useSelector((state) => state.cartReducer);
  const cartSubtotal = useSelector((state) => state.subtotalReducer);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const pathRegExp = /checkout/;

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
        <p className="cart-item-finish-waring">{languageSelector(language, 'cartFinishWarning')}</p>
        {pathRegExp.test(location) ? (
          ""
        ) : (
          <button
            className="cart-item-finish-button"
            onClick={() => navigate(routePaths.checkout)}
          >
            {languageSelector(language, 'cartPlaceOrder')}
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
