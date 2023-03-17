import "./App.css";
import RestaurantView from "./pages/RestaurantView/RestaurantView";
import HomePageComponent from "./pages/HomePageComponent/HomePageComponent";
import OrderPage from "./pages/OrderPage/OrderPage";
import { Routes, Route } from "react-router";
import NotFoundPageComponent from "./pages/NotFoundPageComponent/NotFoundPageComponent";
import RestaurantListPage from "./pages/RestaurantListPage/RestaurantListPage";
import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/registro" element={<SignInPage />} />
        <Route path="/restaurant" element={<RestaurantListPage />}></Route>
        <Route path=":restaurantPath" element={<RestaurantView />} />
        <Route path="/order" element={<OrderPage />} />
        {/* <Route path="/" element={}/> */}
        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
