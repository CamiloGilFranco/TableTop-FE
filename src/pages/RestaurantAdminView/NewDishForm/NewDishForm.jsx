import React, { useState } from "react";
import "./NewDishForm.css";
import axios from "axios";
import { API_URL } from "../../../constants/apiUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewDishForm = ({
  setDishCategories,
  dishCategories,
  language,
  languageSelector,
  restaurant = {},
  onDishUpdate
}) => {
  const [errors, setErrors] = useState({});
  const [newDish, setNewDish] = useState({
    newDishTitle: "",
    newDishDescription: "",
    newDishPrice: "",
    dishCategorySelect: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDish((prevDish) => ({
      ...prevDish,
      [name]: value,
    }));
  };
  const validateInput = () => {
    const errors = {};
    if (!newDish.newDishTitle) {
      errors.newDishTitle = languageSelector(language, "newDishFormNameError");
    }
    if (!newDish.newDishDescription) {
      errors.newDishDescription = languageSelector(language, "newDishFormDescriptionError");
    }
    if (!newDish.newDishPrice) {
      errors.newDishPrice = languageSelector(language, "newDishFormPriceError");
    } else if (isNaN(newDish.newDishPrice)) {
      errors.newDishPrice = languageSelector(language, "newDishFormPriceErrorTwo");
    }
    if (!newDish.dishCategorySelect) {
      errors.dishCategorySelect = "Category is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNewDishCategorySubmit = (e) => {
    e.preventDefault();
    if (validateInput()) {
      const {
        newDishTitle: title,
        newDishDescription: description,
        newDishPrice: price,
        dishCategorySelect: selectedDishCategoryId,
      } = newDish;
      const selectedDishCategoryObj = dishCategories.find(
        (category) => category.id_dishes_category === selectedDishCategoryId
      );
      if (selectedDishCategoryObj) {
        const selectedDishCategory = selectedDishCategoryObj.dishes_category;

        axios
          .post(`${API_URL}/dishes`, {
            title,
            description,
            price: parseInt(price),
            dishes_category: selectedDishCategory,
            id_dishes_category: selectedDishCategoryId,
            id_restaurant: restaurant.id_restaurant,
          })
          .then((response) => {
            setNewDish({
              newDishTitle: "",
              newDishDescription: "",
              newDishPrice: "",
              dishCategorySelect: "",
            });
            setDishCategories((prevCategories) => [
              ...prevCategories,
              response.data.data,
            ]);
            toast.success(languageSelector(language, "newDishSucess"));
            onDishUpdate();
          })
          .catch((error) => {
            console.log(error);
            toast.error(languageSelector(language, "newDishFailure"));
          });
      } else {
        toast.error(languageSelector(language, "missingFields"));
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleNewDishCategorySubmit}
        className="newDishCategoryForm"
      >
        <label htmlFor="newDishTitle">
          {languageSelector(language, "newDishFormName")}
        </label>
        <input
          type="text"
          id="newDishTitle"
          name="newDishTitle"
          value={newDish.newDishTitle}
          onChange={handleInputChange}
          placeholder={languageSelector(language, "newDishFormName")}
        />
        {errors.newDishTitle && (
          <div className="error">{errors.newDishTitle}</div>
        )}
        <label htmlFor="newDishDescription">
          {languageSelector(language, "newDishFormDescription")}
        </label>
        <textarea
          type="text"
          id="newDishDescription"
          name="newDishDescription"
          value={newDish.newDishDescription}
          onChange={handleInputChange}
          placeholder={languageSelector(language, "newDishFormDescription")}
        />
        {errors.newDishDescription && (
          <div className="error">{errors.newDishDescription}</div>
        )}
        <label htmlFor="newDishPrice">
          {languageSelector(language, "newDishFormPrice")}
        </label>
        <input
          type="number"
          id="newDishPrice"
          name="newDishPrice"
          value={newDish.newDishPrice}
          onChange={handleInputChange}
        />
        {errors.newDishPrice && (
          <div className="error">{errors.newDishPrice}</div>
        )}
        <select
          id="dishCategorySelect"
          name="dishCategorySelect"
          value={newDish.dishCategorySelect}
          onChange={handleInputChange}
        >
          {dishCategories &&
            dishCategories.map((category) => (
              <option
                key={category.id_dishes_category}
                value={category.id_dishes_category}
              >
                {category.dishes_category}
              </option>
            ))}
        </select>
        {errors.dishCategorySelect && (
          <div className="error">{errors.dishCategorySelect}</div>
        )}
        <button type="submit">{languageSelector(language, "newDishFormButton")}</button>
      </form>
    </>
  );
};

export default NewDishForm;
