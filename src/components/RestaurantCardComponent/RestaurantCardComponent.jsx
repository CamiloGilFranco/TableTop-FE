import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import "./RestaurantCardComponent.css";

const RestaurantCardComponent = ({
  picture,
  restaurantName,
  rating,
  categories,
  schedule,
  dishesFrom,
}) => {
  const navigate = useNavigate();
  const language = useSelector(state=> state.language.code);
  const cardDishesFrom = () => {
    switch (language) {
      case 'en':
        return en.cardDishesFrom
      case 'es':
        return es.cardDishesFrom
      default:
        return en.cardDishesFrom
    }
  }

  const handleClick = () => {
    const route = restaurantName.replace(/\s+/g, "");
    navigate(`/${route}`);
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
          <p>- {cardDishesFrom()} ${dishesFrom}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default RestaurantCardComponent;
