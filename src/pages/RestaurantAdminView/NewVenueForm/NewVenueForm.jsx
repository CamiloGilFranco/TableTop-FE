import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { API_URL } from "../../../constants/apiUrl";
import './NewVenueForm.css'

const NewVenueForm = ({
  restaurant,
  languageSelector,
  language,
  setRestaurant,
  onVenueAdded
}) => {
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const [errors, setErrors] = useState({});

  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const [venue, setVenue] = useState({
    name_venue: "",
    address: "",
    city: "",
    venue_photo: null,
    phone_number: "",
    open_hour: "",
    close_hour: "",
  });

  const validateForm = () => {
    let isValid = true;
    let errorMessage = "";

    if (!venue.name_venue.trim()) {
      isValid = false;
      errorMessage = "Please enter a venue name.";
    } else if (!venue.address.trim()) {
      isValid = false;
      errorMessage = "Please enter an address.";
    } else if (!venue.city.trim()) {
      isValid = false;
      errorMessage = "Please enter a city.";
    } else if (!venue.phone_number.trim()) {
      isValid = false;
      errorMessage = "Please enter a phone number.";
    } else if (!venue.open_hour.trim()) {
      isValid = false;
      errorMessage = "Please enter an open hour.";
    } else if (!venue.close_hour.trim()) {
      isValid = false;
      errorMessage = "Please enter a close hour.";
    }

    if (!isValid) {
      toast.error(errorMessage);
    }

    return isValid;
  };

  const handleChange = (e) => {
    setVenue({ ...venue, [e.target.name]: e.target.value });
  };

  const handleFileInput = (e) => {
    setVenue({ ...venue, venue_photo: e.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = new FormData();
    data.append("name_venue", venue.name_venue);
    data.append("address", venue.address);
    data.append("city", venue.city);
    data.append("venue_photo", venue.venue_photo);
    data.append("phone_number", venue.phone_number);
    data.append("open_hour", venue.open_hour);
    data.append("close_hour", venue.close_hour);
    data.append("restaurantsId_restaurant", restaurant.id_restaurant);

    try {
      const response = await axios.post(
        `${API_URL}/restaurant-venues`,
        data,
        config
      );

      if (response.status === 201) {
        toast.success(languageSelector(language, 'newVenueSuccess'));
        setRestaurant((prevRestaurant) => ({
          ...prevRestaurant,
          venues: [...prevRestaurant.venues, response.data.data],
        }));
        setVenue({
          name_venue: "",
          address: "",
          city: "",
          venue_photo: null,
          phone_number: "",
          open_hour: "",
          close_hour: "",
        });
        onVenueAdded();
      }
    } catch (error) {
      console.error(error);
      toast.error(languageSelector(language, 'newVenuaFailure'));
    }
  };

  return (
    <div className="NewVenueForm">
      <h3>{languageSelector(language, 'newRestaurantVenue')}</h3>
      <form onSubmit={handleSubmit}>
        <label>{languageSelector(language, 'name')}:</label>
        <input
          type="text"
          name="name_venue"
          value={venue.name_venue}
          onChange={handleChange}
        />
        <span className="error">{errors.name_venue}</span>
        <label>{languageSelector(language, 'signInAddress')}:</label>
        <input
          type="text"
          name="address"
          value={venue.address}
          onChange={handleChange}
        />
        <span className="error">{errors.address}</span>

        <label>{languageSelector(language, 'city')}:</label>
        <input
          type="text"
          name="city"
          value={venue.city}
          onChange={handleChange}
        />
        <span className="error">{errors.city}</span>

        <label>{languageSelector(language, 'number')}:</label>
        <input
          type="tel"
          name="phone_number"
          value={venue.phone_number}
          onChange={handleChange}
        />
        <span className="error">{errors.city}</span>

        <label>{languageSelector(language, 'restaurantEditOpenHour')}:</label>
        <input
          type="time"
          name="open_hour"
          value={venue.open_hour}
          onChange={handleChange}
        />
        <span className="error">{errors.city}</span>

        <label>{languageSelector(language, 'restaurantEditCloseHour')}:</label>
        <input
          type="time"
          name="close_hour"
          value={venue.close_hour}
          onChange={handleChange}
        />
        <span className="error">{errors.city}</span>

        <label>{languageSelector(language, 'venuePhoto')}:</label>
        <input
          type="file"
          name="venue_photo"
          onChange={handleFileInput}
          accept="image/*"
        />
        <button type="submit">{languageSelector(language, 'createVenue')}</button>
      </form>
    </div>
  );
};

export default NewVenueForm;
