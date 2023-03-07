import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import previous from "./assets/previous.svg";
import next from "./assets/next.svg";
import "./RestaurantList.css";
import DB from "../../assets/dat.json";

const RestaurantList = ({ categories, setCategories }) => {
  const data = DB;
  const data2 = data.filter((element1) => {
    return element1.categories.some((element2) => {
      return categories.includes(element2);
    });
  });

  console.log(data2);

  const renderList = (data, data2) => {
    if (data2.length === 0) {
      return data.map((element) => {
        console.log("entro en data");
        return (
          <RestaurantCardComponent
            key={element.id}
            picture={element.picture}
            restaurantName={element.restaurantName}
            rating={element.rating}
            categories={element.categories}
            schedule={element.schedule}
            averagePrice={element.averagePrice}
          />
        );
      });
    } else {
      return data2.map((element) => {
        console.log("entro en data2");
        return (
          <RestaurantCardComponent
            key={element.id}
            picture={element.picture}
            restaurantName={element.restaurantName}
            rating={element.rating}
            categories={element.categories}
            schedule={element.schedule}
            averagePrice={element.averagePrice}
          />
        );
      });
    }
  };
  return (
    <div className="restaurant-list">
      <header className="restaurant-list-header">
        <div className="restaurant-list-buttons">
          <p className="restaurant-list-buttons-text restaurant-list-buttons-text-selected">
            All
          </p>
          <p className="restaurant-list-buttons-text">Popular</p>
          <p className="restaurant-list-buttons-text">Latest</p>
          <p className="restaurant-list-buttons-text">Trend</p>
        </div>
      </header>
      <main className="restaurant-list-main">
        {renderList(data, data2)}
        {/*         <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent /> */}
      </main>
      <footer className="restaurant-list-footer">
        <div className="restaurant-list-footer-page-button">
          <img
            src={previous}
            alt=""
            className="restaurant-list-footer-button-icon"
          />
        </div>
        <div className="restaurant-list-footer-page-button restaurant-list-footer-page-button-selected">
          <span className="restaurant-list-footer-page-button-text">1</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <span className="restaurant-list-footer-page-button-text">2</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <span className="restaurant-list-footer-page-button-text">3</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <img
            src={next}
            alt=""
            className="restaurant-list-footer-button-icon"
          />
        </div>
      </footer>
    </div>
  );
};

export default RestaurantList;
