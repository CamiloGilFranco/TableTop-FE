import { useState, useEffect } from "react";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import "./RestaurantList.css";
import DB from "../../assets/dat.json";
import { useSearchParams } from "react-router-dom";
import languageSelector from "../../assets/languages/languageSelector";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RestaurantList = () => {
  const navigate = useNavigate();

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/restaurants/withcuisines/all`)
      .then((res) => {
        setSortList(res.data.data);
      })
      .catch(() => {
        navigate("/something-went-wrong");
      });
  }, []);

  const sortButton = [
    { id: 1, text: "All" },
    { id: 2, text: "Popular" },
    { id: 3, text: "Latest" },
    { id: 4, text: "Trend" },
  ];
  const [selectOrder, setSelectOrder] = useState(1);
  const [sortList, setSortList] = useState([]);
  const [searchParams] = useSearchParams();
  const language = useSelector((state) => state.languageReducer);

  const handleOrder = (order) => {
    const actionOrder = {
      all: () => sortList.sort((a, b) => a.id_restaurant - b.id_restaurant),
      latest: () =>
        sortList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      trend: () =>
        sortList.sort((a, b) => b.number_of_sales - a.number_of_sales),
      popular: () => sortList.sort((a, b) => b.rating - a.rating),
    };

    const caseOrder = order.text.toLowerCase();
    setSelectOrder(order.id);
    setSortList(actionOrder[caseOrder]);
  };

  const filteredData = () => {
    let result = [];

    const categoriesObject = Object.fromEntries(searchParams.entries());

    if (categoriesObject.rating) {
      delete categoriesObject.rating;
    }

    if (categoriesObject.searchTerm) {
      delete categoriesObject.searchTerm;
    }

    const categoriesArray = Object.keys(categoriesObject);
    const rating = searchParams.get("rating");

    if (searchParams.get("searchTerm")) {
      result = sortList.filter((element) =>
        element.restaurant_name
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(searchParams.get("searchTerm"))
      );
      return result;
    }

    const filterByCategory = (arr) => {
      return arr.filter((element1) => {
        const cuisinesPerRestaurant = [];
        for (let i = 0; i < element1.cuisines.length; i++) {
          cuisinesPerRestaurant.push(element1.cuisines[i].cuisine_category);
        }
        return cuisinesPerRestaurant.some((element2) => {
          return categoriesArray.includes(element2);
        });
      });
    };

    if (rating >= 2 && !categoriesArray.length) {
      result = sortList.filter(
        (element) => Math.round(element.rating) >= rating
      );
    }
    if (categoriesArray.length && rating < 2) {
      result = filterByCategory(sortList);
    }
    if (categoriesArray.length && rating >= 2) {
      result = sortList.filter(
        (element) =>
          Math.round(element.rating) >= rating &&
          filterByCategory([element]).length
      );
    }

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
      return (
        !!listToRender &&
        listToRender.length &&
        listToRender.map((element) => {
          return (
            <RestaurantCardComponent
              key={element.id_restaurant}
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
      <main className="restaurant-list-main">{renderList(filteredData())}</main>
    </div>
  );
};

export default RestaurantList;
