import "./LocationComponent.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import languageSelector from "../../assets/languages/languageSelector";

const LocationComponent = ({ restaurantName }) => {
  const language = useSelector(state => state.languageReducer)
  return (
    <div className="restaurant-view-location-map-container">
      <Link
        to={`https://www.google.com/maps/search/${restaurantName}`}
        className="restaurant-view-location-map-link"
        target="_blank"
      >
        {languageSelector(language, 'location')}
      </Link>
    </div>
  );
};

export default LocationComponent;
