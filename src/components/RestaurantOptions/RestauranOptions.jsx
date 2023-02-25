import "./RestaurantOptions.css";

const RestauranOptions = () => {
  return (
    <div className="restaurant-options">
      <div className="restaurant-options-option">
        <span className="restaurant-options-option-text">ORDER ONLINE</span>
      </div>
      <div className="restaurant-options-option">
        <span className="restaurant-options-option-text">OVERVIEW</span>
      </div>
      <div className="restaurant-options-option">
        <span className="restaurant-options-option-text">GALLERY</span>
      </div>
      <div className="restaurant-options-option">
        <span className="restaurant-options-option-text">LOCATION</span>
      </div>
      <div className="restaurant-options-option restaurant-options-option-selected">
        <span className="restaurant-options-option-text">BOOK A TABLE</span>
      </div>
      <div className="restaurant-options-option">
        <span className="restaurant-options-option-text">REVIEWS</span>
      </div>
    </div>
  );
};

export default RestauranOptions;
