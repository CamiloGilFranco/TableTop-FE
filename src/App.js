import "./App.css";
import { CarrucelComponent } from "./components/carrusel/CarrucelComponent";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import PromotionBanner from "./components/4 Promotion Banner/PromotionBanner";
import PopularRestaurant from "./components/6 Popular Restaurant/PopularRestaurant";
import SearchbarComponent from "./components/SearchbarComponent/SearchbarComponent";
import FlowInfoComponent from "./components/FlowInfoComponent/FlowInfoComponent";
import Footer from "./components/Footer/Footer";
import DownloadPageComponent from "./components/DownloadPageComponent/DownloadPageComponent";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantFilterComponent from "./components/RestaurantFilterComponent/RestaurantFilterComponent";
import RestauranOptions from "./components/RestaurantOptions/RestauranOptions";
import RestaurantInfoBanner from "./components/RestaurantInfoBanner/RestaurantInfoBanner";
import ReserveForm from "./components/ReserveForm/ReserveForm";
import Recommended from "./components/Recommended/Recommended";
import CartItem from "./components/CartItem/CartItem";
import { Payment } from "./components/payment/Payment";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchbarComponent />
      <PromotionBanner />
      <CarrucelComponent />
      <FlowInfoComponent />
      <PopularRestaurant />
      <DownloadPageComponent />
      <RestaurantList />
      <RestauranOptions />
      <ReserveForm />
      <Recommended />
      <CartItem />
      <Footer />
      <RestaurantFilterComponent />
      <RestaurantInfoBanner />
      <Payment />
    </div>
  );
}

export default App;
