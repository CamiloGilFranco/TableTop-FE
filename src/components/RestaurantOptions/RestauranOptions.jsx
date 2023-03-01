import { useState } from "react";
import "./RestaurantOptions.css";

const RestauranOptions = () => {
  const [selected, setSelected] = useState("ORDER ONLINE");
  const classOrderOnline =
    selected === "ORDER ONLINE" ? "restaurant-options-option-selected" : "";
  const classOverview =
    selected === "OVERVIEW" ? "restaurant-options-option-selected" : "";
  const classGallery =
    selected === "GALLERY" ? "restaurant-options-option-selected" : "";
  const classLocation =
    selected === "LOCATION" ? "restaurant-options-option-selected" : "";
  const classBookATable =
    selected === "BOOK A TABLE" ? "restaurant-options-option-selected" : "";
  const classReviews =
    selected === "REVIEWS" ? "restaurant-options-option-selected" : "";

  return (
    <div className="restaurant-options">
      <div className={`restaurant-options-option ${classOrderOnline}`}>
        <input
          type="radio"
          id="ORDER-ONLINE"
          name="restaurant-options-option"
          value="ORDER ONLINE"
          className="restaurant-options-option-radio"
          checked={selected === "ORDER ONLINE"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label
          htmlFor="ORDER-ONLINE"
          className="restaurant-options-option-text"
        >
          ORDER ONLINE
        </label>
      </div>
      <div className={`restaurant-options-option ${classOverview}`}>
        <input
          type="radio"
          id="OVERVIEW"
          name="restaurant-options-option"
          value="OVERVIEW"
          className="restaurant-options-option-radio"
          checked={selected === "OVERVIEW"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="OVERVIEW" className="restaurant-options-option-text">
          OVERVIEW
        </label>
      </div>
      <div className={`restaurant-options-option ${classGallery}`}>
        <input
          type="radio"
          id="GALLERY"
          name="restaurant-options-option"
          value="GALLERY"
          className="restaurant-options-option-radio"
          checked={selected === "GALLERY"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="GALLERY" className="restaurant-options-option-text">
          GALLERY
        </label>
      </div>
      <div className={`restaurant-options-option ${classLocation}`}>
        <input
          type="radio"
          id="LOCATION"
          name="restaurant-options-option"
          value="LOCATION"
          className="restaurant-options-option-radio"
          checked={selected === "LOCATION"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="LOCATION" className="restaurant-options-option-text">
          LOCATION
        </label>
      </div>
      <div className={`restaurant-options-option ${classBookATable}`}>
        <input
          type="radio"
          id="BOOK A TABLE"
          name="restaurant-options-option"
          value="BOOK A TABLE"
          className="restaurant-options-option-radio"
          checked={selected === "BOOK A TABLE"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label
          htmlFor="BOOK A TABLE"
          className="restaurant-options-option-text"
        >
          BOOK A TABLE
        </label>
      </div>
      <div className={`restaurant-options-option ${classReviews}`}>
        <input
          type="radio"
          id="REVIEWS"
          name="restaurant-options-option"
          value="REVIEWS"
          className="restaurant-options-option-radio"
          checked={selected === "REVIEWS"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="REVIEWS" className="restaurant-options-option-text">
          REVIEWS
        </label>
      </div>
    </div>
  );
};

export default RestauranOptions;
