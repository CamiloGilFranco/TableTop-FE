import Footer from "../Footer/Footer";
import HomePageComponent from "../HomePageComponent/HomePageComponent";
import OrderFailed from "../OrderFailed/OrderFailed"
import OrderSuccesful from "../OrderSuccesful/OrderSuccesful"

const OrderPage = () => {
    return(
        <div>
            <HomePageComponent />
            <OrderFailed />
            <OrderSuccesful />
            <Footer />
        </div>
    )
}

export default OrderPage;
