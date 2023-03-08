import {useState} from 'react'
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import SearchbarComponent from "../../components/SearchbarComponent/SearchbarComponent";
import RestaurantFilterComponent from "../../components/RestaurantFilterComponent/RestaurantFilterComponent";
import RestaurantList from "../../components/RestaurantList/RestaurantList";
import "./RestaurantListPage.css";

const RestaurantListPage = () => {
  const [categories, setCategories] = useState([]);
  const [ rating, setRating]  = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="restaurantList__page">
      <HeaderComponent />
      <SearchbarComponent />
      <div className="restaurantList__flex">
        <RestaurantFilterComponent
          categories={categories}
          setCategories={setCategories}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          rating={rating}
          setRating={setRating}
        />
        <RestaurantList 
          categories={categories}
          rating={rating}
        />
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantListPage;
