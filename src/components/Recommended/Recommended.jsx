import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { useWindowSize } from "../../hooks/useWindowSize";
import DB from "../../assets/dat.json";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import "./Recommended.css";

const Recommended = () => {
  const width = useWindowSize();
  const language = useSelector(state=> state.languageReducer);
  const recommendedTitle = () => {
    switch (language) {
      case 'en':
        return en.recommendedTitle
      case 'es':
        return es.recommendedTitle
      default:
        return en.recommendedTitle
    }
  }

  const data = DB;
  data.sort((a, b) => b.rating - a.rating);

  const quantity = () => {
    let cardsQuantity;
    const cardsInfo = [];

    if (width < 769) {
      cardsQuantity = 1;
    } else if (width < 1001) {
      cardsQuantity = 2;
    } else {
      cardsQuantity = 3;
    }

    for (let i = 0; i < cardsQuantity; i++) {
      cardsInfo.push(data[i]);
    }

    return cardsInfo.map((element) => (
      <RestaurantCardComponent
        key={element.id}
        picture={element.picture}
        restaurantName={element.restaurantName}
        rating={element.rating}
        categories={element.categories}
        schedule={element.schedule}
        averagePrice={element.averagePrice}
      />
    ));
  };

  return (
    <div className="restaurant-view-recommended">
      <div className="restaurant-view-recommended-header">
        <span className="restaurant-view-recommended-title">{recommendedTitle()}</span>
      </div>
      <div className="restaurant-view-recommended-cards-container">
        {quantity()}
      </div>
    </div>
  );
};

export default Recommended;
