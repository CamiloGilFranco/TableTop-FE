import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import "./CartItem.css";

const CartItem = () => {

  const language = useSelector(state=> state.language.code);
  const cartTitle = () => {
    switch (language) {
      case 'en':
        return en.cartTitle
      case 'es':
        return es.cartTitle
      default:
        return en.cartTitle
    }
  }
  const cartFinishWarning = () => {
    switch (language) {
      case 'en':
        return en.cartFinishWarning
      case 'es':
        return es.cartFinishWarning
      default:
        return en.cartFinishWarning
    }
  }
  const cartPlaceOrder = () => {
    switch (language) {
      case 'en':
        return en.cartPlaceOrder
      case 'es':
        return es.cartPlaceOrder
      default:
        return en.cartPlaceOrder
    }
  }

  return (
    <div className="cart-item">
      <span className="cart-item-header">{cartTitle()}:</span>
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
          {cartFinishWarning()}
        </p>
        <button className="cart-item-finish-button">{cartPlaceOrder()}</button>
      </div>
    </div>
  );
};

export default CartItem;
