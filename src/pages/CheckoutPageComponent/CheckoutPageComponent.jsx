import AlwaysFirstComponent from "../../components/AlwaysFirstComponent/AlwaysFirstComponent";
import CartItem from "../../components/CartItem/CartItem";
import DeliveryAddressComponent from "../../components/DeliveryAddressComponent/DeliveryAddressComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import image from "./assets/pexels-ella-olsson-1640777.jpg";
import { Payment } from "../../components/payment/Payment";
import "./CheckoutPageComponent.css";
import data from './dataAddress.json'

const CheckoutPageComponent = () => {
  return (
      <div className="checkout-page-content">
        <div>
          <HeaderComponent />
        </div>
        <div className="container-imageheader">
          <img src={image} alt="" className="imageHeader"/>
        </div>
        <div className="checkout-container">
          <div className="checkout-container__aside">
            <CartItem />
            <AlwaysFirstComponent />
          </div>
          <div className="checkout-container__body">
            <DeliveryAddressComponent data={data} />
            <Payment />
          </div>
        </div>
      </div>
  );
};

export { CheckoutPageComponent };
