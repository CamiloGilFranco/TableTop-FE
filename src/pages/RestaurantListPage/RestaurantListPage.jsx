import {useState} from 'react'
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SearchbarComponent from "../../components/SearchbarComponent/SearchbarComponent";
import RestaurantFilterComponent from "../../components/RestaurantFilterComponent/RestaurantFilterComponent";
import RestaurantList from "../../components/RestaurantList/RestaurantList";
import "./RestaurantListPage.css";

const RestaurantListPage = () => {
  const [categories, setCategories] = useState([]);
  const [rating, setRating] = useState([]);
  const [sortBy, setSortBy] = useState('all');



  return (
    <div className="restaurantList__page">
      <HeaderComponent />
      <SearchbarComponent />
      <div className="restaurantList__flex">
        <RestaurantFilterComponent
          categories={categories}
          setCategories={setCategories}
          rating={rating}
          setRating={setRating}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <RestaurantList 
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
          rating={rating}
        />
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantListPage;
