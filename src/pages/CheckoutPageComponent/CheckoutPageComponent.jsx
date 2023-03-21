import AlwaysFirstComponent from "../../components/AlwaysFirstComponent/AlwaysFirstComponent";
import CartItem from "../../components/CartItem/CartItem";
import DeliveryAddressComponent from "../../components/DeliveryAddressComponent/DeliveryAddressComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import image from "./assets/pexels-ella-olsson-1640777.jpg";
import { Payment } from "../../components/payment/Payment";
import "./CheckoutPageComponent.css";

const CheckoutPageComponent = () => {
  return (
    <>
      <div>
        <div>
          <HeaderComponent />
        </div>
        <div className="container-imageheader">
          <img src={image} alt="" className="imageHeader"/>
        </div>
        <div className="checkout-container">
          <div>
            <CartItem />
            <AlwaysFirstComponent />
          </div>
          <div>
            <DeliveryAddressComponent />
            <Payment />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export { CheckoutPageComponent };
