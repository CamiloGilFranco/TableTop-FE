import React, { useState } from "react";
import { cuisines } from "../../../constants/cuisines";
import "./RestaurantCuisine.css";
import { API_URL } from "../../../constants/apiUrl";
import axios from "axios";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import Cookies from "universal-cookie";

const RestaurantCuisine = ({
  language,
  languageSelector,
  restaurant,
  onCuisineUpdate,
}) => {
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const handleCuisineAdd = async () => {
    if (selectedCuisine) {
      try {
        const response = await axios.post(
          `${API_URL}/cuisine-per-restaurant`,
          {
            restaurantsId_restaurant: restaurant.id_restaurant,
            cuisine_categoriesId_cuisine_category: selectedCuisine,
          },
          config
        );
        if (response.status === 201) {
          onCuisineUpdate();
          setSelectedCuisine("");
          toast.success(languageSelector(language, "cuisineAddSuccess"));
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          console.error("Error adding cuisine:", error);
        }
      }
    }
  };
  

  const handleCuisineDelete = async (id_cuisine_per_restaurant) => {
    if (window.confirm(languageSelector(language, "deleteCuisineWarning"))) {
      try {
        const response = await axios.patch(
          `${API_URL}/cuisine-per-restaurant/${id_cuisine_per_restaurant}`,
          {},
          config
        );
        if (response.status === 200) {
          onCuisineUpdate();
          toast.success(languageSelector(language, "cuisineDeleteSuccess"));
        } else {
          toast.error((languageSelector(language, "cuisineDeleteError")));
        }
      } catch (error) {
        console.error((languageSelector(language, "cuisineDeleteError")));
      }
    }
  };

  return (
    <div className="restaurantCuisine">
      <span>{languageSelector(language, "restaurantCuisineTitle")}</span>
      <ul>
        {restaurant.cuisines.map((element) => (
          <li key={element.id_cuisine_per_restaurant} className="cuisine_item">
            {element.cuisine_category}
            <AiFillDelete
              className="restaurantAdminView__icon"
              onClick={() =>
                handleCuisineDelete(element.id_cuisine_per_restaurant)
              }
            />
          </li>
        ))}
      </ul>
      <div className="restaurant_cuisine">
        <span>{languageSelector(language, "restaurantCuisineSubtitle")}</span>
        <select value={selectedCuisine} onChange={handleCuisineChange}>
          <option value="">
            {languageSelector(language, "restaurantCuisineSelect")}
          </option>
          {Object.keys(cuisines).map((cuisine) => (
            <option key={cuisine} value={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
        <button onClick={handleCuisineAdd}>
          {languageSelector(language, "restaurantCuisineButton")}
        </button>
      </div>
    </div>
  );
};

export default RestaurantCuisine;
