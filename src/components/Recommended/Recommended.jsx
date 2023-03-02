import "./Recommended.css";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import restaurant1 from "./assets/restaurante1.jpg";
import restaurant2 from "./assets/restaurante2.jpg";
import restaurant3 from "./assets/restaurante3.jpg";

const Recommended = () => {
  return (
    <div className="restaurant-view-recommended">
      <div className="restaurant-view-recommended-header">
        <span className="restaurant-view-recommended-title">Recommended</span>
      </div>
      <div className="restaurant-view-recommended-cards-container">
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
      </div>
    </div>
  );
};

export default Recommended;
