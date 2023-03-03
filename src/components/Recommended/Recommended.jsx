import "./Recommended.css";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import { useState } from "react";

const Recommended = () => {
  const quantityOfCards = () => {
    const windowWidth = window.innerWidth;
    const topRestaurants = [];
    let quantity;
    if (windowWidth < 769) {
      quantity = 1;
    } else if (windowWidth < 1001) {
      quantity = 2;
    } else {
      quantity = 3;
    }

    for (let i = 1; i <= quantity; i++) {
      topRestaurants.push(<RestaurantCardComponent key={i} />);
    }

    return topRestaurants;
  };

  console.log(quantityOfCards());
  return (
    <div className="restaurant-view-recommended">
      <div className="restaurant-view-recommended-header">
        <span className="restaurant-view-recommended-title">Recommended</span>
      </div>
      <div className="restaurant-view-recommended-cards-container">
        {quantityOfCards().map((element) => element)}
        {/*         <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent /> */}
      </div>
    </div>
  );
};

export default Recommended;
