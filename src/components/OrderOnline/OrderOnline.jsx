import { useSelector } from "react-redux";
import { es } from "../../assets/languages/languageES";
import { en } from "../../assets/languages/languajeEN";
import IndividualDish from "./IndividualDish";
import { useMemo } from "react";
import "./OrderOnline.css";
import { Link } from "react-router-dom";

const OrderOnline = ({ menu }) => {
  const render = useMemo(() => {
    return Object.keys(menu).map((category, index) => {
      return (
        <div
          key={index}
          id={category}
          className="restaurant-view-order-online-category"
        >
          <span className="restaurant-view-order-online-category-title"></span>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              {category}
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              {menu[category].length} Items
            </span>
            <div className="restaurant-view-order-online-dish">
              {menu[category].map((dish, index) => {
                return (
                  <IndividualDish
                    key={index}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  }, []);

  return (
    <div className="restaurant-view-order-online">
      <div className="restaurant-view-order-online-search-panel">
        <div className="restaurant-view-order-online-search-panel-list-container">
          {Object.keys(menu).map((category, index) => {
            return (
              <div
                key={index}
                className="restaurant-view-order-online-search-panel-element-container"
              >
                <a
                  href={`#${category}`}
                  className="restaurant-view-order-online-search-panel-element"
                >
                  <div className="restaurant-view-order-online-search-panel-element-container-a">
                    {category}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="restaurant-view-order-online-menu-container">
        {render}
      </div>
    </div>
  );
};

export default OrderOnline;
