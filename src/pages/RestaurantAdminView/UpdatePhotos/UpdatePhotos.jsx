import React, { useState } from "react";
import "./UpdatePhotos.scss";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { API_URL } from "../../../constants/apiUrl";

const UpdatePhotos = ({ restaurant, languageSelector, language }) => {
  const cookies = new Cookies();
  const [errors, setErrors] = useState({});
  const [logo, setLogo] = useState(null);
  const [main_photo, setMain_photo] = useState(null);
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const validateFields = () => {
    const validationErrors = {};

    if (!logo && !main_photo) {
      validationErrors.emptyFields = languageSelector(
        language,
        "signInAddressError"
      );
    }
    return validationErrors;
  };

  const handleFileInput = (e, setFileState) => {
    setFileState(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    if (logo) {
      data.append("logo", logo);
    }
    if (main_photo) {
      data.append("main_photo", main_photo);
    }

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.put(
        `${API_URL}/restaurants/update/${restaurant.id_restaurant}`,
        data,
        config
      );

      if (response.status === 200) {
        toast.success(languageSelector(language, "updatePhotoSuccess"));
      }
    } catch (error) {
      console.error(error);
      toast.error(languageSelector(language, "updatePhotoFailure"));
    }
  };

  return (
    <div className="UpdatePhotos">
      <form className="updatePhotos__form" onSubmit={handleSubmit}>
        <h3 className="updatePhotos__heading">
          {languageSelector(language, "updateMainPhoto")}
        </h3>
        <input
          type="file"
          id="main_photo"
          accept="image/*"
          className="updatePhotos__fileInput"
          onChange={(e) => handleFileInput(e, setMain_photo)}
        />
        {errors.main_photo && (
          <p className="updatePhotos__error">{errors.main_photo}</p>
        )}
        <h3 className="updatePhotos__heading">
          {languageSelector(language, "updateLogo")}
        </h3>
        <input
          type="file"
          id="logo"
          accept="image/*"
          className="updatePhotos__fileInput"
          onChange={(e) => handleFileInput(e, setLogo)}
        />
        {errors.emptyFields && (
          <p className="updatePhotos__error">{errors.emptyFields}</p>
        )}{" "}
        <div className="updatePhotos__submitButton_container">
          <button type="submit" className="updatePhotos__submitButton">
            {languageSelector(language, "update")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePhotos;
