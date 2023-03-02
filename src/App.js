import "./App.css";
import RestaurantView from "./pages/RestaurantView/RestaurantView";
import HomePageComponent from "./pages/HomePageComponent/HomePageComponent";
// import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <div className="App">
      <HomePageComponent />
      {/* <OrderPage/> */}
      <RestaurantView />
    </div>
  );
}

export default App;