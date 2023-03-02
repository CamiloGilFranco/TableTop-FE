import "./App.css";
import RestaurantView from "./pages/RestaurantView/RestaurantView";
import HomePageComponent from "./pages/HomePageComponent/HomePageComponent";
import OrderPage from "./pages/OrderPage/OrderPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageComponent />}/>
        <Route path="/order" element={<OrderPage/>}/>
        {/* <Route path="/" element={}/> */}
        <Route path="/restaurant" element={<RestaurantView />}/>
      </Routes>
    </div>
  );
}

export default App;