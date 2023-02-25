import "./App.css";
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

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchbarComponent />
      <PromotionBanner />
      <FlowInfoComponent />
      <PopularRestaurant />
      <DownloadPageComponent />
      <RestaurantList />
      <RestauranOptions />
      <ReserveForm />
      <Recommended />
      <Footer />
      <RestaurantFilterComponent />
      <RestaurantInfoBanner />
    </div>
  );
}

export default App;
