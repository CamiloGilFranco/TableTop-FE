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
import RestaurantView from "./pages/RestaurantView/RestaurantView";
import HomePageComponent from "./components/HomePageComponent/HomePageComponent";
// import OrderPage from "./components/OrderPage/OrderPage";

function App() {
  return (
    <div className="App">

      {/* <HeaderComponent /> */}
      {/* <SearchbarComponent /> */}
      {/* <PromotionBanner /> */}
      {/* <CarrucelComponent /> */}
      {/* <FlowInfoComponent /> */}
      {/* <PopularRestaurant /> */}
      {/* <DownloadPageComponent /> */}
      {/* <RestaurantList /> */}
      {/* <RestauranOptions /> */}
      {/* <ReserveForm /> */}
      {/* <Recommended /> */}
      {/* <CartItem /> */}
      {/* <Footer /> */}
      {/* <RestaurantFilterComponent /> */}
      {/* <RestaurantInfoBanner /> */}
      {/* <Payment /> */}
      <RestaurantView />
      
      <HomePageComponent />
  
      {/* <OrderPage /> */}

    </div>
  );
}

export default App;
