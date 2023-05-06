import React, { useState } from "react";
import languageSelector from "../../assets/languages/languageSelector";
import "./EditVenueDetailsModal.css";
import { useSelector } from "react-redux";
import axios from "axios";
import Cookies from "universal-cookie";
import { API_URL } from "../../constants/apiUrl";

const EditVenueDetailsModal = ({
  field,
  index,
  onClose,
  editItem,
  restaurant,
}) => {
  const language = useSelector((state) => state.languageReducer);
  const [editingItem, setEditingItem] = useState("");
  const [errors, setErrors] = useState({});
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const venueId = restaurant.venues[index].id_restaurant_venue;
    const requestBody = { [field]: editingItem };

    const response = await axios.put(
      `${API_URL}/restaurant-venues/${venueId}`,
      requestBody,
      config
    );
    if (response.status === 200) {
      editItem(field, index, editingItem);
      setEditingItem("");
      setErrors({});
      onClose();
    }
  };

  return (
    <div className="editVenueDetailsModal__container">
      <section className="editVenueDetailsModal__box">
        <span>{languageSelector(language, "editDetailsModal")}</span>
        <form
          className="editVenueDetailsModal__form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            name="editedItem"
            id="editedItem"
            value={editingItem}
            onChange={(event) => setEditingItem(event.target.value)}
          />
          {errors.error && (
            <p className="editVenueDetailsModal__error">{errors.error}</p>
          )}
          <span className="editVenueDetailsModal__buttons">
            <button
              className="editVenueDetailsModal__button-save"
              type="submit"
            >
              {languageSelector(language, "save")}
            </button>
            <button
              className="editVenueDetailsModal__button-cancel"
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

export default EditVenueDetailsModal;
