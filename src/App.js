import "./App.css";
import RestaurantView from "./pages/RestaurantView/RestaurantView";
import HomePageComponent from "./pages/HomePageComponent/HomePageComponent";
import OrderPage from "./pages/OrderPage/OrderPage";
import { Routes, Route } from "react-router";
import NotFoundPageComponent from "./pages/NotFoundPageComponent/NotFoundPageComponent";
import RestaurantListPage from "./pages/RestaurantListPage/RestaurantListPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/pages" element={<RestaurantListPage />} />
        <Route path="/restaurant" element={<RestaurantView />}>
          <Route path=":restaurantPath" element={<RestaurantView />} />
        </Route>
        <Route path="/order" element={<OrderPage />} />
        {/* <Route path="/" element={}/> */}
        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
