import React from "react";
import "./PopularRestaurant.css";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";

const PopularRestaurant = () => {
  return (
    <div className="popular-restaurant">
      <header className="popular-restaurant-header">
        <span className="popular-restaurant-title">Popular Restaurant</span>
        <div className="popular-restaurants-buttons">
          <p className="popular-restaurants-buttons-text popular-restaurants-buttons-text-selected">
            All
          </p>
          <p className="popular-restaurants-buttons-text">Popular</p>
          <p className="popular-restaurants-buttons-text">Latest</p>
          <p className="popular-restaurants-buttons-text">Trend</p>
        </div>
      </header>
      <main className="popular-restaurant-main">
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
      </main>
    </div>
  );
};

export default PopularRestaurant;
