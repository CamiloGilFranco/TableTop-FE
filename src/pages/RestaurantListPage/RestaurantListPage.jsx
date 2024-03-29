import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SearchbarComponent from "../../components/SearchbarComponent/SearchbarComponent";
import RestaurantFilterComponent from "../../components/RestaurantFilterComponent/RestaurantFilterComponent";
import RestaurantList from "../../components/RestaurantList/RestaurantList";
import "./RestaurantListPage.css";
import { useLocation } from "react-router-dom";

const RestaurantListPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <div className="restaurantList__page">
      <HeaderComponent />
      <SearchbarComponent
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className="restaurantList__flex">
        <RestaurantFilterComponent
          categories={categories}
          setCategories={setCategories}
        />
        <RestaurantList categories={categories} inputValue={inputValue} />
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantListPage;
