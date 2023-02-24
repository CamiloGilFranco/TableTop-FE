import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import PromotionBanner from "./components/4 Promotion Banner/PromotionBanner";
import PopularRestaurant from "./components/6 Popular Restaurant/PopularRestaurant";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <PromotionBanner />
      <PopularRestaurant />
    </div>
  );
}

export default App;
