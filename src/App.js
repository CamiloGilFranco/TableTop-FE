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
import UserPage from "./pages/UserPage/UserPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import routePaths from "./constants/routePaths";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={routePaths.home} element={<HomePageComponent />} />
        <Route path={routePaths.register} element={<SignInPage />} />
        <Route path={routePaths.restaurants} element={<RestaurantListPage />} />
        <Route
          path={routePaths.restaurantView}
          element={<RestaurantView />}
        />
        <Route path={routePaths.order} element={<OrderPage />} />
        <Route
          path={routePaths.checkout}
          element={<CheckoutPageComponent />}
        />
        <Route
          path={routePaths.restaurantAdmin} 
          element={
            <PrivateRoute role="restaurantAdmin">
              <RestaurantAdminView />
            </PrivateRoute>
            }
          />
        <Route
          path={routePaths.generalAdmin}
          element={
            <PrivateRoute role="appAdmin">
              <GeneralAdminView />
            </PrivateRoute>
            }
          />        
        <Route path={routePaths.user} element={<UserPage />} />
        <Route path={routePaths.notFound} element={<NotFoundPageComponent />} />
      </Routes>
    </div>
  );
}

export default App;
