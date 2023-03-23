import "./PopularRestaurant.css";
import { useState } from "react";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { useSearchParams } from 'react-router-dom'


import db from "../../assets/dat.json";

const PopularRestaurant = ({ inputValue }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const data = db;
  const language = useSelector(state=> state.languageReducer);
  const popularRestaurantTitle = () => {
    switch (language) {
      case 'en':
        return en.popularRestaurantTitle
      case 'es':
        return es.popularRestaurantTitle
      default:
        return en.popularRestaurantTitle
    }
  }

  const sortButton =  [{ id: 1, text:'All' }, { id: 2, text:'Popular' }, { id: 3, text:'Latest' }, { id: 4, text:'Trend' }];
  const [selectOrder, setSelectOrder] = useState(1);
  const [sortList, setSortList] = useState(data);

  const handleOrder = (order) => {
    const actionOrder = {
      all: () => data.sort((a, b)=> a.id - b.id),
      latest: () => data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)), 
      trend: () => data.sort((a, b) => b.numberOfSales - a.numberOfSales),
      popular: () => data.sort((a, b) => b.rating - a.rating),
    }
    const caseOrder = order.text.toLowerCase();
    setSelectOrder(order.id);
    setSortList(actionOrder[caseOrder]);
  }

  const filteredData = data.filter((element) => {
    return element.restaurantName.replaceAll(' ', '').toLowerCase().includes(searchParams.get('searchTerm'));
  })

  const renderList = (data, filteredData) => {
    if (filteredData.length === 0) {
      return sortList.map((element)=> {
        return (
          <RestaurantCardComponent
            key={element.id}
            picture={element.picture}
            restaurantName={element.restaurantName}
            rating={element.rating}
            categories={element.categories}
            schedule={element.schedule}
            dishesFrom={element.dishesFrom}
          />
        );
      });
    } else {
      return filteredData.map((element) => {
        return (
          <RestaurantCardComponent
            key={element.id}
            picture={element.picture}
            restaurantName={element.restaurantName}
            rating={element.rating}
            categories={element.categories}
            schedule={element.schedule}
            dishesFrom={element.dishesFrom}
          />
        );
      });
    }
  };
  
  return (
    <div className="popular-restaurant">
      <header className="popular-restaurant-header">
        <span className="popular-restaurant-title">{popularRestaurantTitle()}</span>
        <div className="popular-restaurants-buttons">
        {sortButton.map((item) => {
            return (
              <p 
                key={item.id} 
                className={`popular-restaurants-buttons-text ${selectOrder === item.id && 'popular-restaurants-buttons-text-selected'}`} 
                onClick={() => handleOrder(item)}
              >
                {item.text}
              </p>
            )}
          )}
        </div>
      </header>
      <main className="popular-restaurant-main">
        {renderList(data, filteredData)}
      </main>
    </div>
  );
};

export default PopularRestaurant;