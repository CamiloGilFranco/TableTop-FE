import "./OrderOnline.css";
import IndividualDish from "./IndividualDish";

const OrderOnline = () => {
  return (
    <div className="restaurant-view-order-online">
      <div className="restaurant-view-order-online-search-panel">
        <input
          type="search"
          placeholder="Search Dishes.."
          className="restaurant-view-order-online-search-panel-search-input"
        />
        <ul className="restaurant-view-order-online-search-panel-list">
          <li className="search-panel-list-subcategory">Bestseller</li>
          <li className="search-panel-list-category">Quick bites</li>
          <li className="search-panel-list-subcategory">Subcategory 1</li>
          <li className="search-panel-list-subcategory">Subcategory 2</li>
          <li className="search-panel-list-category">Combos</li>
          <li className="search-panel-list-subcategory">Subcategory 1</li>
          <li className="search-panel-list-subcategory">Subcategory 2</li>
          <li className="search-panel-list-category">Soups</li>
          <li className="search-panel-list-subcategory">Subcategory 1</li>
          <li className="search-panel-list-subcategory">Subcategory 2</li>
        </ul>
      </div>
      <div className="restaurant-view-order-online-menu-container">
        <div className="restaurant-view-order-online-category">
          <span className="restaurant-view-order-online-category-title"></span>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              Bestseller
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              3 Items
            </span>
            <div className="restaurant-view-order-online-dish">
              <IndividualDish />
              <IndividualDish />
              <IndividualDish />
            </div>
          </div>
        </div>
        <div className="restaurant-view-order-online-category">
          <span className="restaurant-view-order-online-category-title">
            Quick bites
          </span>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              Subcategory 1
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              3 Items
            </span>
            <div className="restaurant-view-order-online-dish">
              <IndividualDish />
              <IndividualDish />
              <IndividualDish />
            </div>
          </div>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              Subcategory 2
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              3 Items
            </span>
            <div className="restaurant-view-order-online-dish">
              <IndividualDish />
              <IndividualDish />
              <IndividualDish />
            </div>
          </div>
        </div>
        <div className="restaurant-view-order-online-category">
          <span className="restaurant-view-order-online-category-title">
            Combos
          </span>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              Subcategory 1
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              3 Items
            </span>
            <div className="restaurant-view-order-online-dish">
              <IndividualDish />
              <IndividualDish />
              <IndividualDish />
            </div>
          </div>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              Subcategory 2
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              3 Items
            </span>
            <div className="restaurant-view-order-online-dish">
              <IndividualDish />
              <IndividualDish />
              <IndividualDish />
            </div>
          </div>
        </div>
        <div className="restaurant-view-order-online-category">
          <span className="restaurant-view-order-online-category-title">
            Soups
          </span>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              Subcategory 1
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              3 Items
            </span>
            <div className="restaurant-view-order-online-dish">
              <IndividualDish />
              <IndividualDish />
              <IndividualDish />
            </div>
          </div>
          <div className="restaurant-view-order-online-subcategory">
            <span className="restaurant-view-order-online-subcategory-title">
              Subcategory 2
            </span>
            <span className="restaurant-view-order-online-subcategory-quantity">
              3 Items
            </span>
            <div className="restaurant-view-order-online-dish">
              <IndividualDish />
              <IndividualDish />
              <IndividualDish />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
