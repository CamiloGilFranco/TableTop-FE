import AlwaysFirstComponent from "../../components/AlwaysFirstComponent/AlwaysFirstComponent"
import CartItem from "../../components/CartItem/CartItem"
import { DeliveryAddressComponent } from "../../components/DeliveryAddressComponent/DeliveryAddressComponent" 
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import Footer from "../../components/Footer/Footer"
import image from "./assets/pexels-ella-olsson-1640777.jpg"

const CheckoutPageComponent = () => {
    return (
        <>
    
            <div>
                <div>
                  <HeaderComponent />
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div>
                  <CartItem />
                </div>
                <div>
                  <AlwaysFirstComponent />
                </div>
                <div>
                  <DeliveryAddressComponent />
                </div>
                <div>
                  <Footer />
                </div>
            </div>
        </>
    )
}

export {CheckoutPageComponent}