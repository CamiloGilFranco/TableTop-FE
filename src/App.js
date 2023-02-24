import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import PromotionBanner from "./components/4 Promotion Banner/PromotionBanner";
import PopularRestaurant from "./components/6 Popular Restaurant/PopularRestaurant";
import SearchbarComponent from "./components/SearchbarComponent/SearchbarComponent";
import FlowInfoComponent from "./components/FlowInfoComponent/FlowInfoComponent";



function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchbarComponent />
      <PromotionBanner />
      <FlowInfoComponent/>
      <PopularRestaurant />
    </div>
  );
}

export default App;
