import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./RestaurantCardComponent.css";
import languageSelector from "../../assets/languages/languageSelector";

const RestaurantCardComponent = ({
  picture,
  restaurantName,
  rating,
  categories,
  schedule,
  dishesFrom,
}) => {
  const navigate = useNavigate();
  const language = useSelector((state) => state.languageReducer);

  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    const route = restaurantName.replace(/\s+/g, "");
    navigate(`/restaurants/${route}`);
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
          <span className="restaurant-card-component-rating">{rating} ⭐</span>
        </div>
        <div className="restaurant-card-component-info-list">
          <span>- {categories[0]}</span>
          <span>, {categories[1]}</span>
          <span>, {categories[2]}</span>
          <p>- {schedule}</p>
          <p>
            - {languageSelector(language, "cardDishesFrom")} ${dishesFrom}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};

export default RestaurantCardComponent;
