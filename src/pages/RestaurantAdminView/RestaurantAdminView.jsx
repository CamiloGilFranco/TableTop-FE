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
import UpdatePhotos from "./UpdatePhotos/UpdatePhotos";
import NewVenueForm from "./NewVenueForm/NewVenueForm";
import RestaurantCuisine from "./RestaurantCuisine/RestaurantCuisine";
import RestaurantOverview from "./RestaurantOverview/RestaurantOverview";
import RestaurantGallery from "./RestautantGallery/RestaurantGallery";

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

  const updateRestaurant = async () => {
    try {
      const userId = user.user_id;
      const restaurantResponse = await axios.get(
        `${API_URL}/restaurants/byuser/${userId}`,
        config
      );
      setRestaurant(restaurantResponse.data.data);
      setDishCategories(restaurantResponse.data.data.dishes_categories);
    } catch (error) {
      console.error("Error updating restaurant details:", error);
    }
  };

  if (!user) {
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

  const intro = () => {
    if (!selectedComponent) {
      return (
        <div className="restaurantAdminView_intro_container">
          <h1 className="restaurantAdminView__title">
            {languageSelector(language, "restaurantAdminTitle")} {user.name}{" "}
            {user.last_name}!
          </h1>

          <p className="restaurantAdminView__subtitle">
            {languageSelector(language, "restaurantAdminIntro")}
          </p>
          <h3>{languageSelector(language, "restaurantAdminSubtitle")}</h3>
        </div>
      );
    }
    return;
  };

  return (
    <>
      <HeaderComponent />
      <ToastContainer />
      <div className="restaurantAdminView__container">
        <div className="restaurantAdminView_header">
          <span className="restaurantAdminView_title">
            {restaurant.restaurant_name}
          </span>
          <span className="restaurantAdminView_subtitle">
            {languageSelector(language, "rating")}:{" "}
            {restaurant.rating && restaurant.rating.toFixed(1)} |{" "}
            {languageSelector(language, "numberOfSales")}:{" "}
            {restaurant.number_of_sales}
          </span>
        </div>
        <div className="restaurantAdminView_body">
          <div className="restaurantAdminView_left_container">
            <div className="restaurantAdminView_left_container_logo_container">
              <img
                src={restaurant.logo}
                alt=""
                className="restaurantAdminView_left_container_logo"
              />
            </div>
            <div className="restaurantAdminView_left_container_options_container">
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "restaurantOverview"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("restaurantOverview")}
              >
                {languageSelector(language, "restaurantOverview")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "restaurantDetails"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("restaurantDetails")}
              >
                {languageSelector(language, "restaurantDetails")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "restaurantCuisine"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("restaurantCuisine")}
              >
                {languageSelector(language, "restaurantCuisine")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "newDishCategoryForm"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("newDishCategoryForm")}
              >
                {languageSelector(language, "newDishCategoryForm")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "newDishForm"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("newDishForm")}
              >
                {languageSelector(language, "newDishForm")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "dishList"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("dishList")}
              >
                {languageSelector(language, "dishList")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "adminList"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("adminList")}
              >
                {languageSelector(language, "adminList")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "updatePhotos"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("updatePhotos")}
              >
                {languageSelector(language, "updatePhotos")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "restaurantGallery"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("restaurantGallery")}
              >
                {languageSelector(language, "restaurantGallery")}
              </span>
              <span
                className={`restaurantAdminView_left_container_option ${
                  selectedComponent === "newVenueForm"
                    ? "restaurantAdminView_option_active"
                    : ""
                }`}
                onClick={() => setSelectedComponent("newVenueForm")}
              >
                {languageSelector(language, "createVenue")}
              </span>
            </div>
          </div>
          <div className="restaurantAdminView_right_container">
            {intro()}
            {selectedComponent === "restaurantOverview" && (
              <RestaurantOverview
                language={language}
                languageSelector={languageSelector}
                restaurant={restaurant}
                setRestaurant={setRestaurant}
                onVenueUpdate={updateRestaurant}
              />
            )}
            {selectedComponent === "restaurantDetails" && (
              <RestaurantDetails
                language={language}
                languageSelector={languageSelector}
                restaurant={restaurant}
                setRestaurant={setRestaurant}
                onVenueUpdate={updateRestaurant}
              />
            )}
            {selectedComponent === "newDishCategoryForm" && (
              <NewDishCategoryForm
                setDishCategories={setDishCategories}
                dishCategories={dishCategories}
                language={language}
                languageSelector={languageSelector}
                restaurant={restaurant}
                onCategoryUpdate={updateRestaurant}
              />
            )}
            {selectedComponent === "restaurantCuisine" && (
              <RestaurantCuisine
                language={language}
                languageSelector={languageSelector}
                restaurant={restaurant}
                onCuisineUpdate={updateRestaurant}
              />
            )}
            {selectedComponent === "newDishForm" && (
              <NewDishForm
                dishCategories={dishCategories}
                setDishCategories={setDishCategories}
                language={language}
                languageSelector={languageSelector}
                restaurant={restaurant}
                onDishUpdate={updateRestaurant}
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
              <AdminList
                restaurant={restaurant}
                onAdminUpdate={updateRestaurant}
              />
            )}
            {selectedComponent === "updatePhotos" && (
              <UpdatePhotos
                restaurant={restaurant}
                setRestaurant={setRestaurant}
                languageSelector={languageSelector}
                language={language}
              />
            )}
            {selectedComponent === "restaurantGallery" && (
              <RestaurantGallery
                restaurant={restaurant}
                setRestaurant={setRestaurant}
                languageSelector={languageSelector}
                language={language}
                onPhotoUpdate={updateRestaurant}
              />
            )}
            {selectedComponent === "newVenueForm" && (
              <NewVenueForm
                restaurant={restaurant}
                languageSelector={languageSelector}
                language={language}
                setRestaurant={setRestaurant}
                onVenueAdded={updateRestaurant}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RestaurantAdminView;
