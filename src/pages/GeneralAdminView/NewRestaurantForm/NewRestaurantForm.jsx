import React, { useState }from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import './NewRestaurantForm.css';
import languageSelector from '../../../assets/languages/languageSelector';
import { inputEmailRegEx } from '../../../constants/regexConstants';
import { API_URL } from '../../../constants/apiUrl';

const NewRestaurantForm = () => {
  const cookies = new Cookies();
  const [restaurant_name, setRestautant_name] = useState('');
  const [errors, setErrors] = useState({});
  const [logo, setLogo] = useState(null);
  const [mainPhoto, setMainPhoto] = useState(null);
  const [adminEmail, setAdminEmail] = useState('');
  const language = useSelector(state=> state.languageReducer);
  const jwtToken = cookies.get('token');
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const validateFields = () => {
    const validationErrors = {};

    if (!restaurant_name.trim()) {
      validationErrors.restaurant_name = languageSelector(language, 'newRestaurantFormNameError');
    }
    if (!logo) {
      validationErrors.logo = languageSelector(language, 'newRestaurantLogoError');
    }
    if (!mainPhoto) {
      validationErrors.mainPhoto = languageSelector(language, 'newRestaurantMainPhotoError');;
    }
    if (!adminEmail.trim() || !inputEmailRegEx.test(adminEmail)) {
      validationErrors.adminEmail = languageSelector(language, 'adminEmailError');
    }

    return validationErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    const restaurantPath = restaurant_name.replaceAll(" ", "").toLowerCase();
    data.append('restaurant_name',restaurant_name);
    data.append('restaurantPath', restaurantPath);
    data.append('logo', logo);
    data.append('mainPhoto', mainPhoto);
    data.append('adminEmail', adminEmail);

    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    
    try {
      const response = await axios.post(`${API_URL}/restaurants`, data, config);

      if (response.status === 200) {
        toast.success("Restaurant created successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create restaurant");
    }
  };

  const handleFileInput = (e, setFileState) => {
    setFileState(e.target.files[0]);
  };

  return (
    <form className="newRestaurantForm" onSubmit={handleSubmit}>
      <label htmlFor="restaurant_name">{languageSelector(language, 'newRestaurantFormName')}</label>
      <input
        type="text"
        id="restaurant_name"
        value={restaurant_name}
        placeholder={languageSelector(language, 'newRestaurantFormName')}
        onChange={(e) => setRestautant_name(e.target.value)}
      />
      {errors.restaurant_name && (
        <p className="newRestaurantForm__error">{errors.restaurant_name}</p>
      )}
      <label htmlFor="logo">Logo</label>
      <input
        type="file"
        id="logo"
        accept="image/*"
        onChange={(e) => handleFileInput(e, setLogo)}
      />
       {errors.logo && (
        <p className="newRestaurantForm__error">{errors.logo}</p>
      )}
      <label htmlFor="mainPhoto">{languageSelector(language, 'mainPhoto')}</label>
      <input
        type="file"
        id="mainPhoto"
        accept="image/*"
        onChange={(e) => handleFileInput(e, setMainPhoto)}
      />
      {errors.mainPhoto && (
        <p className="newRestaurantForm__error">{errors.mainPhoto}</p>
      )}
      <label htmlFor="adminEmail">{languageSelector(language, 'adminEmail')}</label>
      <input
        type="email"
        id="adminEmail"
        value={adminEmail}
        placeholder={languageSelector(language, 'signInEmail')}
        onChange={(e) => setAdminEmail(e.target.value)}
      />
       {errors.adminEmail && (
        <p className="newRestaurantForm__error">{errors.adminEmail}</p>
      )}
      <button type="submit">{languageSelector(language, 'newRestaurantFormButton')}</button>
    </form>
  );
}

export default NewRestaurantForm;