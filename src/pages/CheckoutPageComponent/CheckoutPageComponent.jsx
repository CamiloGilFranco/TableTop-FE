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

const publicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(publicKey);

const CheckoutPageComponent = () => {
  const [deliveryAddress, setDeliveryAddress] = useState({
    address: "",
    city: "",
    id: "",
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
