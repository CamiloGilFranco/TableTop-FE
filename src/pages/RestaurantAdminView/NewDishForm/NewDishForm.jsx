import React, { useState } from "react";
import "./NewDishForm.css";
import axios from "axios";
import { API_URL } from "../../../constants/apiUrl";

const NewDishForm = ({
  setDishCategories,
  dishCategories,
  language,
  languageSelector,
  restaurant = {},
}) => {
  console.log(dishCategories);
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
  // const validateInput = () => {
  //   const errors = {};
  //   if (!newDish.newDishTitle) {
  //     errors.newDishTitle = "Title is required";
  //   }
  //   if (!newDish.newDishDescription) {
  //     errors.newDishDescription = "Description is required";
  //   }
  //   if (!newDish.newDishPrice) {
  //     errors.newDishPrice = "Price is required";
  //   } else if (isNaN(newDish.newDishPrice)) {
  //     errors.newDishPrice = "Price must be a number";
  //   }
  //   if (!newDish.dishCategorySelect) {
  //     errors.dishCategorySelect = "Category is required";
  //   }
  //   setErrors(errors);
  //   return Object.keys(errors).length === 0;
  // };

  const handleNewDishCategorySubmit = (e) => {
    e.preventDefault();
    if (true) {
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
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("Category not found");
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
          {languageSelector(language, "newDishTitle")}
        </label>
        <input
          type="text"
          id="newDishTitle"
          name="newDishTitle"
          onChange={handleInputChange}
        />
        <label htmlFor="newDishDescription">
          {languageSelector(language, "newDishDescription")}
        </label>
        <textarea
          type="text"
          id="newDishDescription"
          name="newDishDescription"
          onChange={handleInputChange}
        />
        <label htmlFor="newDishPrice">
          {languageSelector(language, "somethingElse")}
        </label>
        <input
          type="number"
          id="newDishPrice"
          name="newDishPrice"
          onChange={handleInputChange}
        />
        <select
          id="dishCategorySelect"
          name="dishCategorySelect"
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
        <button type="submit">{languageSelector(language, "sumbit")}</button>
      </form>
    </>
  );
};

export default NewDishForm;
