import React, { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Cookies from "universal-cookie";
import axios from "axios";
import "./GeneralAdminRestaurantList.css";
import languageSelector from "../../../assets/languages/languageSelector";
import GeneralAdminModal from "../../../components/GeneralAdminModal/GeneralAdminModal";
import { API_URL } from "../../../constants/apiUrl";

const GeneralAdminRestaurantList = () => {
  const cookie = new Cookies();
  const language = useSelector((state) => state.languageReducer);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const token = cookie.get("token");
  const [restaurants, setRestaurants] = useState([]);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [filter, setFilter] = useState("");
  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    setRenderList([...restaurants]);
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}/restaurants`)
      .then((response) => setRestaurants(response.data.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    const confirmationMessage = languageSelector(
      language,
      "desactivateRestaurantWarning"
    );

    if (window.confirm(confirmationMessage)) {
      try {
        const response = await axios.put(
          `${API_URL}/restaurants/deactivate/${id}`,
          {},
          config
        );
        toast.success(
          response.data.message ||
            languageSelector(language, "deactivatedRestaurantSuccess")
        );
        const updatedRestaurants = await axios.get(
          `${API_URL}/restaurants`,
          config
        );
        setRestaurants(updatedRestaurants.data.data);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            languageSelector(language, "deactivatedRestaurantFailure")
        );
      }
    }
  };

  const handleEdit = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleRestaurantUpdate = async (updatedRestaurant) => {
    try {
      const response = await axios.put(
        `${API_URL}/restaurants/update/${updatedRestaurant.id_restaurant}`,
        updatedRestaurant,
        config
      );
      toast.success(
        response.data.message ||
          languageSelector(language, "updatedRestaurantSuccess")
      );
      const updatedRestaurants = await axios.get(
        `${API_URL}/restaurants`,
        config
      );
      setRestaurants(updatedRestaurants.data.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          languageSelector(language, "updatedRestaurantFailure")
      );
    }
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);

    setRenderList(
      restaurants.filter((restaurant) => {
        return restaurant.restaurant_name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  useEffect(() => {
    if (!filter) {
      setRenderList([...restaurants]);
    }
  }, [filter]);

  return (
    <article className="restaurantList">
      <span>{languageSelector(language, "generalAdminFullList")}</span>
      <p>{languageSelector(language, "generalAdminDelete")}</p>
      <input
        type="text"
        placeholder="Search"
        className="user__list_search_input"
        value={filter}
        onChange={handleFilter}
      />
      <div>
        {renderList.map((restaurant, index) => (
          <div key={index} className="restaurantList__details">
            {restaurant.restaurant_name}
            <div className="restaurantList__details_buttons_container">
              <AiFillEdit
                className="restaurantList__icon restaurantAdminView__edit"
                onClick={() => handleEdit(restaurant)}
              />
              <AiFillDelete
                className="restaurantList__icon"
                onClick={() => handleDelete(restaurant.id_restaurant)}
              />
            </div>
          </div>
        ))}
        {isModalOpen && (
          <GeneralAdminModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            restaurant={selectedRestaurant}
            onSave={handleRestaurantUpdate}
          />
        )}
      </div>
    </article>
  );
};

export default GeneralAdminRestaurantList;
