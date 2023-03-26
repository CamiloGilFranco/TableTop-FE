import CartItem from "../../components/CartItem/CartItem";
import DeliveryAddressComponent from "../../components/DeliveryAddressComponent/DeliveryAddressComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import image from "./assets/pexels-ella-olsson-1640777.jpg";
import { Payment } from "../../components/payment/Payment";
import "./CheckoutPageComponent.css";

const CheckoutPageComponent = () => {
  return (
    <div className="checkout-page-content">
      <div>
        <HeaderComponent />
      </div>
      <div className="container-imageheader">
        <img src={image} alt="" className="imageHeader" />
      </div>
      <div className="checkout-body">
        <div className="checkout-body-left-container">
          <DeliveryAddressComponent />
          <Payment />
        </div>
        <div className="checkout-body-right-container">
          <CartItem />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { CheckoutPageComponent };
