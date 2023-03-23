import "./App.css";
import RestaurantView from "./pages/RestaurantView/RestaurantView";
import HomePageComponent from "./pages/HomePageComponent/HomePageComponent";
import OrderPage from "./pages/OrderPage/OrderPage";
import { Routes, Route } from "react-router";
import NotFoundPageComponent from "./pages/NotFoundPageComponent/NotFoundPageComponent";
import RestaurantListPage from "./pages/RestaurantListPage/RestaurantListPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import RestaurantAdminView from "./pages/RestaurantAdminView/RestaurantAdminView";
import GeneralAdminView from "./pages/GeneralAdminView/GeneralAdminView";
import { CheckoutPageComponent } from "./pages/CheckoutPageComponent/CheckoutPageComponent";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePageComponent />} />
          <Route path="/register" element={<SignInPage />} />
          <Route path="/restaurant" element={<RestaurantListPage />}/>
          <Route path=":restaurantPath" element={<RestaurantView />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/restaurant/checkout" element={<CheckoutPageComponent/>} />
          <Route path="/admin" element={<RestaurantAdminView/>}/>
          <Route path="/general-admin" element={<GeneralAdminView/>}/>
          <Route path="*" element={<NotFoundPageComponent />} />
        </Routes>
    </div>
  );
}

export default App;
