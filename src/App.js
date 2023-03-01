import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import Footer from "./components/Footer/Footer";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantFilterComponent from "./components/RestaurantFilterComponent/RestaurantFilterComponent";
import RestauranOptions from "./components/RestaurantOptions/RestauranOptions";
import RestaurantInfoBanner from "./components/RestaurantInfoBanner/RestaurantInfoBanner";
import ReserveForm from "./components/ReserveForm/ReserveForm";
import Recommended from "./components/Recommended/Recommended";
import CartItem from "./components/CartItem/CartItem";
import { Payment } from "./components/payment/Payment";
import HomePageComponent from "./components/HomePageComponent/HomePageComponent";
// import OrderPage from "./components/OrderPage/OrderPage";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <HomePageComponent />
      <RestaurantList />
      {/* <RestauranOptions /> */}
      {/* <ReserveForm /> */}
      {/* <Recommended />
      <CartItem /> */}
      {/* <OrderPage /> */}
      <Footer />
      {/* <RestaurantFilterComponent />
      <RestaurantInfoBanner />
      <Payment /> */}
    </div>
  );
}

export default App;
