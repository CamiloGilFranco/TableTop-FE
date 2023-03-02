import "./RestaurantCardComponent.css";
import restaurant1 from "./assets/image-card-restaurant.png";

const RestaurantCardComponent = () => {
  return (
    <figure className="restaurant-card-component">
      <div className="restaurant-card-component-image-container">
        <img
          src={restaurant1}
          alt=""
          className="restaurant-card-component-image"
        />
      </div>
      <figcaption className="restaurant-card-component-info">
        <div className="restaurant-card-component-info-first-line">
          <span className="restaurant-card-component-title">
            Italian Restro
          </span>
          <span className="restaurant-card-component-rating">4.5 ⭐</span>
        </div>
        <div className="restaurant-card-component-info-list">
          <p>- Fast Food, Cafe, Italian</p>
          <p>- 11:30am - 11:30pm (Mon-Sun)</p>
          <p>- Cost $25 For Two</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default RestaurantCardComponent;
