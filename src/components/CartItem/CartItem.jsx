import "./CartItem.css";
import { useSelector } from "react-redux";
import SingleDishItem from "./SingleDishItem";

const CartItem = () => {
  const itemsStore = useSelector((state) => state.cartReducer);
  const cartSubtotal = useSelector((state) => state.subtotalReducer);
  return (
    <div className="cart-item">
      <span className="cart-item-header">Cart Items:</span>
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
        <p className="cart-item-finish-waring">
          delivery changes may apply to your order
        </p>
        <button className="cart-item-finish-button">PLACE ORDER</button>
      </div>
    </div>
  );
};

export default CartItem;
