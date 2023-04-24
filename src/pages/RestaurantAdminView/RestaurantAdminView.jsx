import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import loadingGif from "../../assets/fotos/loading/loading-gif.gif";
import { useJwt } from "react-jwt";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Cookies from "universal-cookie";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "../../store/actions/user.action";
import NotFoundPageComponent from "../NotFoundPageComponent/NotFoundPageComponent";
import { API_URL } from "../../constants/apiUrl";
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import "./RestaurantAdminView.css";
import languageSelector from "../../assets/languages/languageSelector";
import RestaurantDetails from "./RestaurantDetails/RestaurantDetails";
import NewDishCategoryForm from "./NewDishCategory/NewDishCategory";
import NewDishForm from "./NewDishForm/NewDishForm";
import DishList from "./DishList/DishList";
import AdminList from "./AdminList/AdminList";

const RestaurantAdminView = () => {
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const language = useSelector((state) => state.languageReducer);
  const [restaurant, setRestaurant] = useState({});
  const [dishCategories, setDishCategories] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const jwtToken = cookies.get("token");
  const { isExpired } = useJwt(cookies.get("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUserRequest());
      try {
        const userResponse = await axios.get(
          `${API_URL}/users/profile`,
          config
        );
        dispatch(fetchUserSuccess(userResponse.data.data));

        const userId = userResponse.data.data.user_id;
        const restaurantResponse = await axios.get(
          `${API_URL}/restaurants/byuser/${userId}`,
          config
        );
        setRestaurant(restaurantResponse.data.data);
        setDishCategories(restaurantResponse.data.data.dishes_categories);
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
    fetchData();
  }, [dispatch, jwtToken]);

  if (!user || isExpired) {
    return <NotFoundPageComponent />;
  }

  if (loading) {
    return (
      <div>
        <img src={`${loadingGif}`} alt="loading" />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <HeaderComponent />
      <ToastContainer />
      <div className="restaurantAdminView__container">
        <h1 className="restaurantAdminView__title">
          {languageSelector(language, "restaurantAdminTitle")} {user.name}{" "}
          {user.last_name}!
        </h1>
        <div className="restaurantAdminView__intro">
          <p>{languageSelector(language, "restaurantAdminIntro")}</p>
          <h3>{languageSelector(language, "restaurantAdminSubtitle")}</h3>
          <div className="restaurantAdminView__list">
            <p>
              {languageSelector(language, "restaurantAdminResTitle")}: {''}
              {restaurant.restaurant_name}
            </p>
            <p>
              {languageSelector(language, "restaurantAdminResSales")}: {''}
              {restaurant.number_of_sales}
            </p>
            <p>
              {languageSelector(language, "restaurantAdminResRating")}: {''}
              {restaurant.rating}
            </p>
          </div>
        </div>
        <div className="restaurantAdminView__flex">
          <ul className="restaurantAdminView__list">
            <li
              className={
                selectedComponent === "restaurantDetails" ? "active" : ""
              }
              onClick={() => setSelectedComponent("restaurantDetails")}
            >
              {languageSelector(language, "restaurantDetails")}
            </li>
            <li
              className={
                selectedComponent === "newDishCategoryForm" ? "active" : ""
              }
              onClick={() => setSelectedComponent("newDishCategoryForm")}
            >
              {languageSelector(language, "newDishCategoryForm")}
            </li>
            <li
              className={selectedComponent === "newDishForm" ? "active" : ""}
              onClick={() => setSelectedComponent("newDishForm")}
            >
              {languageSelector(language, "newDishForm")}
            </li>
            <li
              className={selectedComponent === "dishList" ? "active" : ""}
              onClick={() => setSelectedComponent("dishList")}
            >
              {languageSelector(language, "dishList")}
            </li>
            <li
              className={selectedComponent === "adminList" ? "active" : ""}
              onClick={() => setSelectedComponent("adminList")}
            >
              {languageSelector(language, "adminList")}
            </li>
          </ul>
          <div className="restaurantAdminView__main">
            {selectedComponent === "restaurantDetails" && (
              <RestaurantDetails
                language={language}
                languageSelector={languageSelector}
                restaurant={restaurant}
                setRestaurant={setRestaurant}
              />
            )}
            {selectedComponent === "newDishCategoryForm" && (
              <NewDishCategoryForm
                setDishCategories={setDishCategories}
                dishCategories={dishCategories}
                language={language}
                languageSelector={languageSelector}
                restaurant={restaurant}
              />
            )}
            {selectedComponent === "newDishForm" && (
              <NewDishForm
                dishCategories={dishCategories}
                setDishCategories={setDishCategories}
                language={language}
                languageSelector={languageSelector}
                restaurant={restaurant}
              />
            )}
            {selectedComponent === "dishList" && (
              <DishList
                dishes={restaurant.dishes}
                language={language}
                languageSelector={languageSelector}
                dishCategories={dishCategories}
              />
            )}
            {selectedComponent === "adminList" && (
              <AdminList restaurant={restaurant} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RestaurantAdminView;
