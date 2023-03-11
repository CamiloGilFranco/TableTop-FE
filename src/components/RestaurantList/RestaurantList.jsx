import { useState } from "react";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import previous from "./assets/previous.svg";
import next from "./assets/next.svg";
import "./RestaurantList.css";
import DB from "../../assets/dat.json";

const RestaurantList = ({ categories, rating }) => {
  const data = DB;

  const [activeAll, setActiveAll] = useState('restaurant-list-buttons-text-selected');
  const [activePopular, setActivePopular] = useState('');
  const [activeLatest, setActiveLatest] = useState('');
  const [activeTrend, setActiveTrend] = useState('');
  const [sortBy, setSortBy] = useState('all');

  const sortList = (str) =>{
    if (str === 'all') {
      return data.sort((a, b)=> a.id - b.id);
    } else if (str === 'popular') {
      return data.sort((a, b) => b.rating - a.rating);
    } else if (str === 'latest') {
      return data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (str === 'trend') {
      return data.sort((a, b)=> b.numberOfSales - a.numberOfSales)
    }
  }

  const handleAllButton = (e) =>{
    if(activeAll === ''){
      setActiveAll('restaurant-list-buttons-text-selected');
      setActivePopular('');
      setActiveLatest('');
      setActiveTrend('');
      setSortBy(e.target.innerHTML.toLowerCase());
    }
  }
  const handlePopular = (e) =>{
    if(activePopular === ''){
      setActivePopular('restaurant-list-buttons-text-selected');
      setActiveAll('');
      setActiveLatest('');
      setActiveTrend('');
      setSortBy(e.target.innerHTML.toLowerCase());
    }
  }
  const handleLatest = (e) =>{
    if(activeLatest === ''){
      setActiveLatest('restaurant-list-buttons-text-selected');
      setActivePopular('');
      setActiveAll('');
      setActiveTrend('');
      setSortBy(e.target.innerHTML.toLowerCase());
    }
  }
  const handleTrend = (e) =>{
    if(activeTrend === ''){
      setActiveTrend('restaurant-list-buttons-text-selected');
      setActivePopular('');
      setActiveLatest('');
      setActiveAll('');
      setSortBy(e.target.innerHTML.toLowerCase());
    }
  }




  const data2 = data.filter((element1) => {
    return element1.categories.some((element2) => {
      return categories.includes(element2);
    });
  });


  const renderList = (data, data2) => {
    if (data2.length === 0) {
      return sortList(sortBy).map((element) => {
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
    } else {
      return data2.map((element) => {
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
          <p className={`restaurant-list-buttons-text ${activeAll}`} onClick={handleAllButton}>
            All
          </p>
          <p className={`restaurant-list-buttons-text ${activePopular}`} onClick={handlePopular}>Popular</p>
          <p className={`restaurant-list-buttons-text ${activeLatest}`} onClick={handleLatest}>Latest</p>
          <p className={`restaurant-list-buttons-text ${activeTrend}`} onClick={handleTrend}>Trend</p>
        </div>
      </header>
      <main className="restaurant-list-main">
        {renderList(data, data2)}
        {/*         <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent />
        <RestaurantCardComponent /> */}
      </main>
      <footer className="restaurant-list-footer">
        <div className="restaurant-list-footer-page-button">
          <img
            src={previous}
            alt=""
            className="restaurant-list-footer-button-icon"
          />
        </div>
        <div className="restaurant-list-footer-page-button restaurant-list-footer-page-button-selected">
          <span className="restaurant-list-footer-page-button-text">1</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <span className="restaurant-list-footer-page-button-text">2</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <span className="restaurant-list-footer-page-button-text">3</span>
        </div>
        <div className="restaurant-list-footer-page-button">
          <img
            src={next}
            alt=""
            className="restaurant-list-footer-button-icon"
          />
        </div>
      </footer>
    </div>
  );
};

export default RestaurantList;
