import { useState } from "react";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import "./RestaurantList.css";
import DB from "../../assets/dat.json";
import { useSearchParams } from "react-router-dom";
import languageSelector from "../../assets/languages/languageSelector";
import { useSelector } from "react-redux";

const RestaurantList = () => {
  const data = DB;

  const sortButton = [
    { id: 1, text: "All" },
    { id: 2, text: "Popular" },
    { id: 3, text: "Latest" },
    { id: 4, text: "Trend" },
  ];
  const [selectOrder, setSelectOrder] = useState(1);
  const [sortList, setSortList] = useState(data);
  const [searchParams] = useSearchParams();
  const language = useSelector((state) => state.languageReducer);

  const handleOrder = (order) => {
    const actionOrder = {
      all: () => data.sort((a, b) => a.id - b.id),
      latest: () =>
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      trend: () => data.sort((a, b) => b.numberOfSales - a.numberOfSales),
      popular: () => data.sort((a, b) => b.rating - a.rating),
    };

    const caseOrder = order.text.toLowerCase();
    setSelectOrder(order.id);
    setSortList(actionOrder[caseOrder]);
  };

  const filteredData = () => {
    let result = [];

    const categories = Array.from(searchParams.keys());
    const rating = searchParams.get("rating");

    if (searchParams.get("searchTerm")) {
      result = data.filter((element) =>
        element.restaurantName
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(searchParams.get("searchTerm"))
      );
      return result;
    }

    const filterByCategory = (arr) => {
      return arr.filter((element1) => {
        return element1.categories.some((element2) => {
          return categories.includes(element2);
        });
      });
    };

    if (rating >= 2 && categories.length === 0)
      result = data.filter((element) => Math.round(element.rating) >= rating);
    if (categories.length > 0 && rating < 2) result = filterByCategory(data);
    if (categories.length > 0 && rating >= 2)
      result = data.filter(
        (element) =>
          Math.round(element.rating) >= rating &&
          filterByCategory([element]).length
      );
    return result;
  };

  const renderList = (displayArr) => {
    const categoriesObject = Object.fromEntries(searchParams.entries());
    if (categoriesObject.rating) {
      delete categoriesObject.rating;
    }
    if (categoriesObject.searchTerm) {
      delete categoriesObject.searchTerm;
    }

    const cuisines = Object.keys(categoriesObject).length;
    const rate = searchParams.get("rating") && searchParams.get("rating") >= 2;

    if (!displayArr.length && (cuisines || rate)) {
      return (
        <div>
          <p>{languageSelector(language, "restaurantSearchNull")}</p>
        </div>
      );
    } else {
      const listToRender = displayArr.length > 0 ? displayArr : sortList;
      return listToRender.map((element) => {
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
          {sortButton.map((item) => {
            return (
              <p
                key={item.id}
                className={`restaurant-list-buttons-text ${
                  selectOrder === item.id &&
                  "restaurant-list-buttons-text-selected"
                }`}
                onClick={() => handleOrder(item)}
              >
                {item.text}
              </p>
            );
          })}
        </div>
      </header>
      <main className="restaurant-list-main">
        {renderList(data, filteredData())}
      </main>
    </div>
  );
};

export default RestaurantList;
