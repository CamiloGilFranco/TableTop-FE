import OrderFailed from "../OrderFailed/OrderFailed"
import OrderSuccesful from "../OrderSuccesful/OrderSuccesful"

const OrderPage = () => {
    return(
        <div>
            <OrderFailed />
            <OrderSuccesful />
        </div>
    )
}

export default OrderPage;
