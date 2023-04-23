import CartItem from "../../components/CartItem/CartItem";
import DeliveryAddressComponent from "../../components/DeliveryAddressComponent/DeliveryAddressComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import image from "./assets/pexels-ella-olsson-1640777.jpg";
import { Payment } from "../../components/payment/Payment";
import "./CheckoutPageComponent.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51MzwoXA4m6OMz50cQDWoJL27hwzyeiodGS1ivBKyHMNGu0d250XsB9IhkbB89Ig8kIoN0Lkq8PTos0bG9F5YY2gr00jbNcg0q0"
);

const CheckoutPageComponent = () => {
  const [deliveryAddress, setDeliveryAddress] = useState({
    address: "",
    city: "",
  });
  return (
    <div className="checkout-page-content">
      <div className="checkout-header-container">
        <HeaderComponent />
      </div>
      <div className="container-imageheader">
        <img src={image} alt="" className="imageHeader" />
      </div>
      <div className="checkout-body">
        <div className="checkout-body-left-container">
          <DeliveryAddressComponent setDeliveryAddress={setDeliveryAddress} />
          <Elements stripe={stripePromise}>
            <Payment deliveryAddress={deliveryAddress} />
          </Elements>
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
