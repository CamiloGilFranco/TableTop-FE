import "./LocationComponent.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LocationComponent = ({ restaurantName }) => {
  return (
    <div className="restaurant-view-location-map-container">
      <Link
        to={`https://www.google.com/maps/search/${restaurantName}`}
        className="restaurant-view-location-map-link"
        target="_blank"
      >
        VER EN GOOGLE MAPS
      </Link>
    </div>
  );
};

export default LocationComponent;
