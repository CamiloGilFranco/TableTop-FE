import "./OrderOnline.css";
import IndividualDish from "./IndividualDish";
import { useMemo } from "react";

const OrderOnline = ({ menu }) => {
  const render = useMemo(() => {
    return Object.keys(menu).map((category, index) => {
      return (
        <div className="restaurant-view-order-online-category" key={index}>
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
        <span>COMING SOON...</span>
      </div>
      <div className="restaurant-view-order-online-menu-container">
        {render}
      </div>
    </div>
  );
};

export default OrderOnline;
