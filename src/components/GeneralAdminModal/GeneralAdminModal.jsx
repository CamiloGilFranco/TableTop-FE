import React, { useState, useEffect } from "react";
import "./GeneralAdminModal.css";
import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";

const GeneralAdminModal = ({ isOpen, onClose, restaurant, onSave }) => {
  const [restaurantName, setRestaurantName] = useState("");
  const [logo, setLogo] = useState(null);
  const [mainPhoto, setMainPhoto] = useState(null);
  const [adminEmail, setAdminEmail] = useState("");
  const [errors, setErrors] = useState("");

  const language = useSelector((state) => state.languageReducer);

  useEffect(() => {
    if (restaurant) {
      setRestaurantName(restaurant.restaurant_name);
      setLogo(restaurant.logo);
      setMainPhoto(restaurant.main_photo);
      setAdminEmail(restaurant.admin_email);
    }
  }, [restaurant]);

  const handleSumbit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const form = e.target;
    const title = form.title.value;

    const isTitle = !title.length || typeof title !== "string";

    if (isTitle) {
      validationErrors.title = languageSelector(
        language,
        "newRestaurantFormNameError"
      );
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const updatedRestaurant = {
      ...restaurant,
      restaurant_name: restaurantName,
      logo,
      main_photo: mainPhoto,
      admin_email: adminEmail,
    };

    onSave(updatedRestaurant);

    onClose();
  };

  return (
    <div className="generalAdminModal__container">
      <section className="generalAdminModal__box">
        <span>{languageSelector(language, "restaurantEditTitle")}</span>
        <form className="generalAdminModal__form" onSubmit={handleSumbit}>
          <label htmlFor="title">
            {languageSelector(language, "restaurantAdminResTitle")}
          </label>
          <input
            type="text"
            value={restaurantName}
            name="title"
            id="title"
            onChange={(e) => setRestaurantName(e.target.value)}
            placeholder="Restaurant Name"
          />
          {errors.title && (
            <div className="generalAdminModal__error">{errors.title}</div>
          )}
          <label htmlFor="title">
            {languageSelector(language, "newResstaurantAdminEmail")}
          </label>
          <input
            type="email"
            value={adminEmail}
            onChange={(e) => setAdminEmail(e.target.value)}
            placeholder="Admin Email"
          />
          <label htmlFor="logo">Logo</label>
          <input
            type="file"
            name="logo"
            id="logo"
            accept="image/*"
            onChange={(e) => setLogo(e.target.files[0])}
            className="generalAdminModal_file_input"
          />
          <label htmlFor="title">
            {languageSelector(language, "mainPhoto")}
          </label>
          <input
            type="file"
            accept="image/*"
            name="mainPhoto"
            id="mainPhoto"
            onChange={(e) => setMainPhoto(e.target.files[0])}
            className="generalAdminModal_file_input"
          />

          <span className="generalAdminModal__buttons">
            <button className="generalAdminModal__button-save" type="submit">
              {languageSelector(language, "save")}
            </button>
            <button
              className="generalAdminModal__button-cancel"
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

export default GeneralAdminModal;
