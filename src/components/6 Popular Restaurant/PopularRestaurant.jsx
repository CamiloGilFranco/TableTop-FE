import "./PopularRestaurant.css";
import { useState } from "react";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";

import db from "../../assets/dat.json";

const PopularRestaurant = ({ inputValue }) => {
  const [activeAll, setActiveAll] = useState('popular-restaurants-buttons-text-selected');
  const [activePopular, setActivePopular] = useState('');
  const [activeLatest, setActiveLatest] = useState('');
  const [activeTrend, setActiveTrend] = useState('');
  const [sortBy, setSortBy] = useState('all');
  const data = db;

  console.log(inputValue);

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
      setActiveAll('popular-restaurants-buttons-text-selected');
      setActivePopular('');
      setActiveLatest('');
      setActiveTrend('');
      setSortBy(e.target.innerHTML.toLowerCase());
    }
  }
  const handlePopular = (e) =>{
    if(activePopular === ''){
      setActivePopular('popular-restaurants-buttons-text-selected');
      setActiveAll('');
      setActiveLatest('');
      setActiveTrend('');
      setSortBy(e.target.innerHTML.toLowerCase());
    }
  }
  const handleLatest = (e) =>{
    if(activeLatest === ''){
      setActiveLatest('popular-restaurants-buttons-text-selected');
      setActivePopular('');
      setActiveAll('');
      setActiveTrend('');
      setSortBy(e.target.innerHTML.toLowerCase());
    }
  }
  const handleTrend = (e) =>{
    if(activeTrend === ''){
      setActiveTrend('popular-restaurants-buttons-text-selected');
      setActivePopular('');
      setActiveLatest('');
      setActiveAll('');
      setSortBy(e.target.innerHTML.toLowerCase());
    }
  }

  return (
    <div className="popular-restaurant">
      <header className="popular-restaurant-header">
        <span className="popular-restaurant-title">Popular Restaurant</span>
        <div className="popular-restaurants-buttons">
          <p className={`popular-restaurants-buttons-text ${activeAll}`} onClick={handleAllButton}>
            All
          </p>
          <p className={`popular-restaurants-buttons-text ${activePopular}`} onClick={handlePopular}>Popular</p>
          <p className={`popular-restaurants-buttons-text ${activeLatest}`} onClick={handleLatest}>Latest</p>
          <p className={`popular-restaurants-buttons-text ${activeTrend}`} onClick={handleTrend}>Trend</p>
        </div>
      </header>
      <main className="popular-restaurant-main">
        {sortList(sortBy).map((element) => {
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
        })}
      </main>
    </div>
  );
};

export default PopularRestaurant;
