import "./PopularRestaurant.css";
import { useState } from "react";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";

import db from "../../assets/dat.json";

const PopularRestaurant = ({ inputValue }) => {
  const data = db;

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
  
  return (
    <div className="popular-restaurant">
      <header className="popular-restaurant-header">
        <span className="popular-restaurant-title">Popular Restaurant</span>
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
        {sortList.map((element) => {
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