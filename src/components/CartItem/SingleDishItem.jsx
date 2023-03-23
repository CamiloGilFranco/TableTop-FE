import { useDispatch } from "react-redux";
import {
  CartDecrementAction,
  CartIncrementAction,
  addSubtotalAction,
  subtractSubtotalAction,
} from "../../store/actions/cart.action";

const SingleDishItem = ({ title, price, quantity, subtotal }) => {
  const dispatch = useDispatch();

  const handleSubtract = () => {
    dispatch(CartDecrementAction(title, price));
    dispatch(subtractSubtotalAction(price));
  };

  const handleAdd = () => {
    dispatch(CartIncrementAction(title, price));
    dispatch(addSubtotalAction(price));
  };

  return (
    <div className="cart-item-product">
      <span className="cart-item-product-title">{title}</span>
      <span className="cart-item-product-unit-value">${price}</span>
      <div className="cart-item-product-quantity-container">
        <div className="cart-item-product-quantity-container-buttons">
          <button
            className="cart-item-product-quantity-button-less"
            onClick={handleSubtract}
          >
            -
          </button>
          <div className="cart-item-product-quantity-number-container">
            <span className="cart-item-product-quantity-number">
              {quantity}
            </span>
          </div>
          <button
            className="cart-item-product-quantity-button-plus"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <span className="cart-item-product-total-value">${subtotal}</span>
      </div>
    </div>
  );
};

export default SingleDishItem;
