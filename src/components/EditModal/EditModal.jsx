import React, { useState } from "react";
import "./EditModal.css";
import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";

const EditModal = ({ item, onClose, handleUpdate }) => {
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [errors, setErrors] = useState({});
  const language = useSelector((state) => state.languageReducer);

  const handleSumbit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const description = form.description.value;

    if (title.length <= 1 || typeof title !== "string") {
      validationErrors.title = "title must be at least 2 characters long";
    }
    if (price.length === 0) {
      validationErrors.price = "you must provide a price";
    } else if (isNaN(price)) {
      validationErrors.price = "* The price must be a number";
    } else if (price <= 0) {
      validationErrors.price = "the price cannot be zero or lower";
    }
    if (description.length <= 1 || typeof description !== "string") {
      validationErrors.description =
        "descrription must be at least 2 characters long";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    handleUpdate(title, parseInt(price), description);
    onClose();
  };
  return (
    <div className="modalComponent__container">
      <section className="modalComponent__box">
        <span>{languageSelector(language, "editDishTitle")}</span>
        <form className="modalComponent__form" onSubmit={handleSumbit}>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          {errors.title && (
            <p className="restaurantAdminView__error">{errors.title}</p>
          )}
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          {errors.price && (
            <p className="restaurantAdminView__error">{errors.price}</p>
          )}
          <textarea
            value={description}
            name="description"
            id="description"
            onChange={(event) => setDescription(event.target.value)}
          />
          {errors.description && (
            <p className="restaurantAdminView__error">{errors.description}</p>
          )}
          <span className="modalComponent__buttons">
            <button className="modalComponent__button-save" type="submit">
              {languageSelector(language, "save")}
            </button>
            <button
              className="modalComponent__button-cancel"
              type="button"
              onClick={onClose}
            >
              {languageSelector(language, "cancel")}
            </button>
          </span>
        </form>
      </section>
    </div>
  );
};

export default EditModal;
