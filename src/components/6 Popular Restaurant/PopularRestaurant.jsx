import "./PopularRestaurant.css";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";

import db from "../../assets/dat.json";

const PopularRestaurant = () => {
  const data = db;
  data.sort((a, b) => b.rating - a.rating);

  const popularRestaurantsSelection = () => {
    const popularRestaurantSelectionList = [];
    for (let i = 0; i < 6; i++) {
      popularRestaurantSelectionList.push(data[i]);
    }
    return popularRestaurantSelectionList;
  };

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
        {popularRestaurantsSelection().map((element) => {
          return (
            <RestaurantCardComponent
              key={element.id}
              picture={element.picture}
              restaurantName={element.restaurantName}
              rating={element.rating}
              categories={element.categories}
              schedule={element.schedule}
              averagePrice={element.averagePrice}
            />
          );
        })}
      </main>
    </div>
  );
};

export default PopularRestaurant;
