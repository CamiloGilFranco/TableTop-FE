import "./App.css";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import PromotionBanner from "./components/4 Promotion Banner/PromotionBanner";
import SearchbarComponent from "./components/SearchbarComponent/SearchbarComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <SearchbarComponent />
      <PromotionBanner />
    </div>
  );
}

export default App;
