import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import OrderFailed from "../../components/OrderFailed/OrderFailed";
import OrderSuccesful from "../../components/OrderSuccesful/OrderSuccesful";
import { useSelector } from "react-redux";

const OrderPage = () => {
  const orderData = useSelector((state) => state.orderReducer);

  return (
    <div>
      <HeaderComponent />
      {orderData.orderStatus === "succeeded" ? (
        <OrderSuccesful />
      ) : (
        <OrderFailed />
      )}
      <Footer />
    </div>
  );
};

export default OrderPage;
