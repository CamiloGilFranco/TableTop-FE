import "./Recommended.css";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";


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
