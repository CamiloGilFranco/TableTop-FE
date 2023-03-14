import { useState } from "react";
import RestaurantCardComponent from "../RestaurantCardComponent/RestaurantCardComponent";
import previous from "./assets/previous.svg";
import next from "./assets/next.svg";
import "./RestaurantList.css";
import DB from "../../assets/dat.json";

const RestaurantList = ({ categories, rating, inputValue }) => {
  const data = DB;
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

    const caseOrder = order.text.toLowerCase()
    setSelectOrder(order.id);
    setSortList(actionOrder[caseOrder]);
  }
  //console.log(`Categories ${categories} Rating ${rating} Input value ${inputValue}`);
  
   const filteredData = data.filter((element1) => {
     return element1.categories.some((element2) => {
       return categories.includes(element2);
     });
   });

  const ratingFilter = data.filter((element)=>{
    return element.rating >= rating;
  });

  const inputFilter = data.filter((element) => {
    return element.restaurantName.toLowerCase().includes(inputValue)
  })

  //console.log(ratingFilter);
  console.log(filteredData);

  const renderList = (data, filteredData) => {
    if (filteredData.length === 0) {
      return sortList.map((element) => {
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
      return filteredData.map((element) => {
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
                className={`restaurant-list-buttons-text ${selectOrder === item.id && 'restaurant-list-buttons-text-selected'}`} 
                onClick={() => handleOrder(item)}
              >
                {item.text}
              </p>
            )}
          )}
        </div>
      </header>
      <main className="restaurant-list-main">
        {renderList(data, filteredData)}
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
