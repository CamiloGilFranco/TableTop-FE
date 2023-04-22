import React, { useState } from "react";
import "./NewDishForm.css";

const NewDishForm = ({
  setDishCategories,
  dishCategories,
  language,
  languageSelector,
}) => {
  const [errors, setErrors] = useState({});

  const handleNewDishCategorySubmit = (e) => {
    e.preventDefault();
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
        <input type="text" id="newDishTitle" name="newDishTitle" />
        <label htmlFor="newDishDescription">
          {languageSelector(language, "newDishDescription")}
        </label>
        <textarea
          type="text"
          id="newDishDescription"
          name="newDishDescription"
        />
        <label htmlFor="newDishPrice">
          {languageSelector(language, "somethingElse")}
        </label>
        <input type="number" id="newDishPrice" name="newDishPrice" />
        <select id="dishCategorySelect" name="dishCategorySelect">
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