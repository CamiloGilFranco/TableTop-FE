import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="cart-item">
      <span className="cart-item-header">Cart Items:</span>
      <div className="cart-item-product">
        <span className="cart-item-product-title">Veg Cheese Quesadillas</span>
        <span className="cart-item-product-unit-value">$12.00</span>
        <div className="cart-item-product-quantity-container">
          <div className="cart-item-product-quantity-container-buttons">
            <button className="cart-item-product-quantity-button-less">
              -
            </button>
            <div className="cart-item-product-quantity-number-container">
              <span className="cart-item-product-quantity-number">1</span>
            </div>
            <button className="cart-item-product-quantity-button-plus">
              +
            </button>
          </div>
          <span className="cart-item-product-total-value">$12.00</span>
        </div>
      </div>
      <div className="cart-item-product">
        <span className="cart-item-product-title">Barbaresca Pasta</span>
        <span className="cart-item-product-unit-value">$10.00</span>
        <div className="cart-item-product-quantity-container">
          <div className="cart-item-product-quantity-container-buttons">
            <button className="cart-item-product-quantity-button-less">
              -
            </button>
            <div className="cart-item-product-quantity-number-container">
              <span className="cart-item-product-quantity-number">1</span>
            </div>
            <button className="cart-item-product-quantity-button-plus">
              +
            </button>
          </div>
          <span className="cart-item-product-total-value">$10.00</span>
        </div>
      </div>
      <div className="cart-item-product">
        <span className="cart-item-product-title">
          Sprouts Salad Quesadillas
        </span>
        <span className="cart-item-product-unit-value">$10.00</span>
        <div className="cart-item-product-quantity-container">
          <div className="cart-item-product-quantity-container-buttons">
            <button className="cart-item-product-quantity-button-less">
              -
            </button>
            <div className="cart-item-product-quantity-number-container">
              <span className="cart-item-product-quantity-number">2</span>
            </div>
            <button className="cart-item-product-quantity-button-plus">
              +
            </button>
          </div>
          <span className="cart-item-product-total-value">$20.00</span>
        </div>
      </div>
      <div className="cart-item-finish">
        <div className="cart-item-finish-subtotal-container">
          <span className="cart-item-finish-subtotal-text">Subtotal</span>
          <span className="cart-item-finish-subtotal-value">$42.00</span>
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
