import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import OrderFailed from "../../components/OrderFailed/OrderFailed";
import OrderSuccesful from "../../components/OrderSuccesful/OrderSuccesful";
import { useSelector } from 'react-redux';

const OrderPage = () => {
  const orderStatus = useSelector(state=> state.orderReducer);

  console.log(orderStatus);

  return(
    <div>
      <HeaderComponent/>
      {orderStatus.orderSuccessful? <OrderSuccesful/>: <OrderFailed/>}
      <Footer />
    </div>
  )
}

export default OrderPage;
