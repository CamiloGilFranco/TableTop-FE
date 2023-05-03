import "./PopularRestaurant.css";
import { useEffect, useState } from "react";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import { useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import db from "../../assets/dat.json";
import languageSelector from "../../assets/languages/languageSelector";
import { API_URL } from "../../constants/apiUrl";
import routePaths from "../../constants/routePaths";

const PopularRestaurant = ({ inputValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/restaurants/withcuisines/all`)
      .then((res) => {
        setSortList(res.data.data);
      })
      .catch(() => {
        navigate(routePaths.somethingWentWrong);
      });
  }, []);

  const data = db;
  const language = useSelector((state) => state.languageReducer);

  const sortButton = [
    { id: 1, text: "All" },
    { id: 2, text: "Popular" },
    { id: 3, text: "Latest" },
    { id: 4, text: "Trend" },
  ];
  const [selectOrder, setSelectOrder] = useState(1);
  const [sortList, setSortList] = useState(data);

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

  const filteredData = data.filter((element) => {
    return element.restaurantName
      .replaceAll(" ", "")
      .toLowerCase()
      .includes(searchParams.get("searchTerm"));
  });

  const renderList = (data, filteredData) => {
    const shortList = [];
    for (let i = 0; i < 4; i++) {
      shortList.push(sortList[i]);
    }

    if (!filteredData.length) {
      return (
        shortList &&
        sortList.length &&
        shortList.map((element, index) => {
          return (
            <RestaurantCardComponent
              key={index}
              picture={element.main_photo}
              restaurantName={element.restaurant_name}
              rating={element.rating}
              categories={element.cuisines}
              path={element.restaurant_path}
            />
          );
        })
      );
    } else {
      return (
        filteredData &&
        filteredData.map((element, index) => {
          return (
            <RestaurantCardComponent
              key={index}
              picture={element.main_photo}
              restaurantName={element.restaurant_name}
              rating={element.rating}
              categories={element.cuisines}
              path={element.restaurant_path}
            />
          );
        })
      );
    }
  };

  return (
    <div className="popular-restaurant">
      <header className="popular-restaurant-header">
        <span className="popular-restaurant-title">
          {languageSelector(language, "popularRestaurantTitle")}
        </span>
        <div className="popular-restaurants-buttons">
          {sortButton &&
            sortButton.map((item, index) => {
              return (
                <p
                  key={item.id}
                  className={`popular-restaurants-buttons-text ${
                    selectOrder === item.id &&
                    "popular-restaurants-buttons-text-selected"
                  }`}
                  onClick={() => handleOrder(item)}
                >
                  {item.text}
                </p>
              );
            })}
        </div>
      </header>
      <main className="popular-restaurant-main">
        {renderList(data, filteredData)}
      </main>
    </div>
  );
};

export default PopularRestaurant;
