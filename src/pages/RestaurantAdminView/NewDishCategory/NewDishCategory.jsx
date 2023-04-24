import React, { useState } from "react";
import { toast } from "react-toastify";
import "./NewDishCategory.css";
import axios from "axios";
import { API_URL } from "../../../constants/apiUrl";
import Cookies from "universal-cookie";

const NewDishCategoryForm = ({
  setDishCategories,
  dishCategories,
  language,
  languageSelector,
  restaurant = {},
}) => {
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState("");
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const validateForm = () => {
    let formErrors = {};

    if (!category.trim()) {
      formErrors.category = languageSelector(language, 'signInLastNameError');
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
        toast.success(languageSelector(language, 'newDishCategorySuccess'));
      } else {
        setErrors({ apiError: languageSelector(language, 'newDishCategoryFailure') });
        toast.error(languageSelector(language, 'newDishCategoryFailure'));
      }
    } catch (error) {
      console.error(error);
      setErrors({ apiError: languageSelector(language, 'newDishCategoryFailure')});
      toast.error(languageSelector(language, 'newDishCategoryFailure'));
    }
  };

  return (
    <form
      onSubmit={handleNewDishCategorySubmit}
      className="newDishCategoryForm"
    >
      <label htmlFor="newDishCategory">
        {languageSelector(language, "newDishCategoryTitle")}
      </label>
      <input
        type="text"
        id="newDishCategory"
        name="newDishCategory"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {errors.category && <p className="error-message">{errors.category}</p>}
      <button type="submit">{languageSelector(language, "bookingButton")}</button>
    </form>
  );
};

export default NewDishCategoryForm;
