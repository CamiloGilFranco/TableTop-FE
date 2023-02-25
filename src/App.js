import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import PromotionBanner from "./components/4 Promotion Banner/PromotionBanner";
import PopularRestaurant from "./components/6 Popular Restaurant/PopularRestaurant";
import SearchbarComponent from "./components/SearchbarComponent/SearchbarComponent";
import FlowInfoComponent from "./components/FlowInfoComponent/FlowInfoComponent";
import Footer from "./components/Footer/Footer";
import DownloadPageComponent from "./components/DownloadPageComponent/DownloadPageComponent";
import RestaurantListComponent from "./components/RestaurantListComponent/RestaurantListComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchbarComponent />
      <PromotionBanner />
      <FlowInfoComponent />
      <PopularRestaurant />
      <DownloadPageComponent />
      <Footer />
      <RestaurantListComponent />
    </div>
  );
}

export default App;
