import React, { useState } from "react";
import { toast } from "react-toastify";
import "./NewDishCategory.css";
import axios from "axios";
import { API_URL } from "../../../constants/apiUrl";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";

const NewDishCategoryForm = ({
  setDishCategories,
  dishCategories,
  language,
  languageSelector,
  restaurant = {},
}) => {
  console.log("🚀 ~ file: NewDishCategory.jsx:16 ~ restaurant.id_restaurant:", restaurant.id_restaurant)
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState("");
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const validateForm = () => {
    let formErrors = {};

    if (!category.trim()) {
      formErrors.category = "Dish category is required.";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleNewDishCategorySubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post(
        `${API_URL}/dishes-categories`,
        {
          dishes_category: category,
          restaurantsId_restaurant: restaurant.id_restaurant,
        },
        config
        );
        if (response.status === 201) {
        setDishCategories([...dishCategories, response.data.data]);
        setCategory("");
        toast.success("Dish category created successfully!");
      } else {
        setErrors({ apiError: "Failed to create new dish category." });
        toast.error("Failed to create new dish category.");
      }
    } catch (error) {
      console.error(error);
      setErrors({ apiError: "Failed to create new dish category." });
      toast.error("Failed to create new dish category.");
    }
  };

  return (
    <form
      onSubmit={handleNewDishCategorySubmit}
      className="newDishCategoryForm"
    >
      <label htmlFor="newDishCategory">
        {languageSelector(language, "something")}
      </label>
      <input
        type="text"
        id="newDishCategory"
        name="newDishCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {errors.category && <p className="error-message">{errors.category}</p>}
      <button type="submit">{languageSelector(language, "submit")}</button>
    </form>
  );
};

export default NewDishCategoryForm;
