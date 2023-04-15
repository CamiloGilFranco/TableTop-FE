import "./App.css";
import RestaurantView from "./pages/RestaurantView/RestaurantView";
import HomePageComponent from "./pages/HomePageComponent/HomePageComponent";
import OrderPage from "./pages/OrderPage/OrderPage";
import { Routes, Route, Navigate } from "react-router";
import NotFoundPageComponent from "./pages/NotFoundPageComponent/NotFoundPageComponent";
import RestaurantListPage from "./pages/RestaurantListPage/RestaurantListPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import RestaurantAdminView from "./pages/RestaurantAdminView/RestaurantAdminView";
import GeneralAdminView from "./pages/GeneralAdminView/GeneralAdminView";
import { CheckoutPageComponent } from "./pages/CheckoutPageComponent/CheckoutPageComponent";
import UserPage from "./pages/UserPage/UserPage";
import Cookies from "universal-cookie";

const Private = ({ children }) => {
  const cookies = new Cookies();
  const ticket = cookies.get("token");
  return ticket ? children : <Navigate to={"/"}/>;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/register" element={<SignInPage />} />
        <Route path="/restaurants" element={<RestaurantListPage />} />
        <Route
          path="/restaurants/:restaurantPath"
          element={<RestaurantView />}
        />
        <Route path="/order" element={<OrderPage />} />
        <Route
          path="/restaurant/checkout"
          element={<CheckoutPageComponent />}
        />
        <Route path="/restaurant-admin" element={<RestaurantAdminView />} />
        <Route path="/general-admin" element={<GeneralAdminView />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<NotFoundPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
