import { useSelector } from "react-redux";
import { useWindowSize } from "../../hooks/useWindowSize";
import DB from "../../assets/dat.json";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import "./Recommended.css";
import languageSelector from "../../assets/languages/languageSelector";

const Recommended = () => {
  const width = useWindowSize();
  const language = useSelector((state) => state.languageReducer);

  const data = DB;
  data.sort((a, b) => b.rating - a.rating);

  const quantity = () => {
    let cardsQuantity = width < 769 ? 2 : width >= 769 && width < 1335 ? 3 : 4;
    const cardsInfo = [];

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
        <span className="restaurant-view-recommended-title">
          {languageSelector(language, "recommendedTitle")}
        </span>
      </div>
      <div className="restaurant-view-recommended-cards-container">
        {quantity()}
      </div>
    </div>
  );
};

export default Recommended;
