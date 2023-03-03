import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import OrderFailed from "../../components/OrderFailed/OrderFailed"
import OrderSuccesful from "../../components/OrderSuccesful/OrderSuccesful"

const OrderPage = () => {
  return(
    <div>
      <HeaderComponent/>
      <OrderFailed />
      <OrderSuccesful />
      <Footer />
    </div>
  )
}

export default OrderPage;
