import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./RestaurantCardComponent.css";
import languageSelector from "../../assets/languages/languageSelector";
import routePaths from "../../constants/routePaths";

const RestaurantCardComponent = ({
  picture,
  restaurantName,
  rating,
  categories,
  path,
}) => {
  const navigate = useNavigate();
  const language = useSelector((state) => state.languageReducer);

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    navigate(`${routePaths.restaurants}/${path}`);
  };

  return (
    <figure className="restaurant-card-component" onClick={handleClick}>
      <div className="restaurant-card-component-image-container">
        <img src={picture} alt="" className="restaurant-card-component-image" />
      </div>
      <figcaption className="restaurant-card-component-info">
        <div className="restaurant-card-component-info-first-line">
          <span className="restaurant-card-component-title">
            {restaurantName}
          </span>
          <span className="restaurant-card-component-rating">
            {rating && rating.toFixed(1)} ⭐
          </span>
        </div>
        <div className="restaurant-card-component-info-list">
          {categories &&
            categories.map((element, index) => (
              <span
                key={index}
                className="restaurant-card-component-info-list-cuisine"
              >
                - {element.cuisine_category}
              </span>
            ))}
        </div>
      </figcaption>
    </figure>
  );
};

export default RestaurantCardComponent;
