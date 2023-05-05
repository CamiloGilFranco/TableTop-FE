import IndividualDish from "./IndividualDish";
import { useEffect, useMemo, useState } from "react";
import "./OrderOnline.css";
import { Link } from "react-router-dom";

const OrderOnline = ({ menu, id_restaurant }) => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    if (menu) {
      setMenuList(menu);
    }
  }, [menu]);

  const render = useMemo(() => {
    return menuList.map((category, index) => {
      return (
        <div
          key={index}
          id={category.id_dishes_category}
          className="restaurant-view-order-online-category"
        >
          <span className="restaurant-view-order-online-category-title"></span>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              {category.dishes_category}
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              {category.dishes.length} Items
            </span>
            <div className="restaurant-view-order-online-dish">
              {category.dishes.map((dish, index) => {
                return (
                  <IndividualDish
                    key={index}
                    title={dish.title}
                    description={dish.description}
                    price={dish.price}
                    id={dish.id_dish}
                    id_restaurant={id_restaurant}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  });

  return (
    <div className="restaurant-view-order-online">
      <div className="restaurant-view-order-online-search-panel">
        <div className="restaurant-view-order-online-search-panel-list-container">
          {menuList.map((category, index) => {
            return (
              <div
                key={index}
                className="restaurant-view-order-online-search-panel-element-container"
              >
                <a
                  href={`#${category.id_dishes_category}`}
                  className="restaurant-view-order-online-search-panel-element"
                >
                  <div className="restaurant-view-order-online-search-panel-element-container-a">
                    {category.dishes_category}
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
