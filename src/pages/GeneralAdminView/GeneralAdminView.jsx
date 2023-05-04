import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import loadingGif from "../../assets/fotos/loading/loading-gif.gif";
import { useJwt } from "react-jwt";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import Cookies from "universal-cookie";
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import languageSelector from "../../assets/languages/languageSelector";
import "./GeneralAdminView.css";
import "react-toastify/dist/ReactToastify.css";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "../../store/actions/user.action";
import NotFoundPageComponent from "../NotFoundPageComponent/NotFoundPageComponent";
import GeneralAdminUserChange from "./GeneralAdminUserChange/GeneralAdminUserChange";
import NewRestaurantForm from "./NewRestaurantForm/NewRestaurantForm";
import GeneralAdminRestaurantList from "./GeneralAdminRestaurantList/GeneralAdminRestaurantList";
import { API_URL } from "../../constants/apiUrl";
import logo from "../../assets/logo.svg";

const GeneralAdminView = () => {
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const language = useSelector((state) => state.languageReducer);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const cookies = new Cookies();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const dispatch = useDispatch();
  const jwtToken = cookies.get("token");
  const { isExpired } = useJwt(cookies.get("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(fetchUserRequest());
      try {
        const response = await axios.get(`${API_URL}/users/profile`, config);
        dispatch(fetchUserSuccess(response.data.data));
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
    fetchUser();
  }, [dispatch, jwtToken]);

  const handleClick = (component) => {
    if (selectedComponent === component) {
      setSelectedComponent(null);
    } else {
      setSelectedComponent(component);
    }
  };

  const handleEditClick = (value) => {
    setModalVisible(true);
    setEditingItem(value);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

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

  const intro = () => {
    if (!selectedComponent) {
      return (
        <div>
          <h1 className="generalAdminView__title">
            {languageSelector(language, "restaurantAdminTitle")} {user.name}{" "}
            {user.last_name}!
          </h1>
          <div className="generalAdminView__intro">
            <p>{languageSelector(language, "generalAdminIntro")}</p>
          </div>
        </div>
      );
    }
    return;
  };
  return (
    <>
      <HeaderComponent />
      <ToastContainer />
      <div className="generalAdminView__container">
        <div className="generalAdminView__left_container">
          <div className="generalAdminView__image_container">
            <img src={logo} alt="" className="generalAdminView__image" />
          </div>
          <ul className="generalAdminView__list">
            <li
              className={selectedComponent === "users" ? "active" : ""}
              onClick={() => setSelectedComponent("users")}
            >
              {languageSelector(language, "users")}
            </li>
            <li
              className={selectedComponent === "restaurants" ? "active" : ""}
              onClick={() => setSelectedComponent("restaurants")}
            >
              {languageSelector(language, "restaurants")}
            </li>
            <li
              className={
                selectedComponent === "newRestaurantForm" ? "active" : ""
              }
              onClick={() => setSelectedComponent("newRestaurantForm")}
            >
              {languageSelector(language, "newRestaurantForm")}
            </li>
          </ul>
          <div className="generalAdminView__options_container"></div>
        </div>
        <div className="generalAdminView__right_container">
          <div className="generalAdminView__main">
            {intro()}
            {selectedComponent === "users" && <GeneralAdminUserChange />}
            {selectedComponent === "restaurants" && (
              <GeneralAdminRestaurantList handleEditClick={handleEditClick} />
            )}
            {selectedComponent === "newRestaurantForm" && <NewRestaurantForm />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default GeneralAdminView;
