import React, { useState }from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from "react-toastify";
import './NewRestaurantForm.css';

const NewRestaurantForm = () => {
  const cookies = new Cookies();
  const [restaurant_name, setName] = useState('');
  const [logo, setLogo] = useState(null);
  const [mainPhoto, setMainPhoto] = useState(null);
  const [adminEmail, setAdminEmail] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;
  const jwtToken = cookies.get('token');
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const restaurant_name = form.restaurant_name.value;
    const logo = form.logo.value;
    const mainPhoto = form.mainPhoto.value;
    const adminEmail = form.adminEmail.value;
    const restaurantPath = restaurant_name.replaceAll(" ", "").toLowerCase();

    // pending validations

    const newRestaurant = {
      restaurant_name,
      restaurantPath,
      logo,
      mainPhoto,
      adminEmail
    }
    
    try {
      const response = await axios.post(`${apiUrl}/restaurants`, newRestaurant, config);

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
      <label htmlFor="restaurant_name">Name</label>
      <input
        type="text"
        id="restaurant_name"
        value={restaurant_name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="logo">Logo</label>
      <input
        type="file"
        id="logo"
        accept="image/*"
        onChange={(e) => handleFileInput(e, setLogo)}
      />
      <label htmlFor="mainPhoto">Main Photo</label>
      <input
        type="file"
        id="mainPhoto"
        accept="image/*"
        onChange={(e) => handleFileInput(e, setMainPhoto)}
      />
      <label htmlFor="adminEmail">Admin Email</label>
      <input
        type="email"
        id="adminEmail"
        value={adminEmail}
        onChange={(e) => setAdminEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewRestaurantForm;