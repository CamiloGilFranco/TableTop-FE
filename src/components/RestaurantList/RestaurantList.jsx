import { useState } from 'react';
import RestaurantCardComponent from '../RestaurantCardComponent/RestaurantCardComponent';
import previous from './assets/previous.svg';
import next from './assets/next.svg';
import './RestaurantList.css';
import DB from '../../assets/dat.json';
import { useSearchParams } from 'react-router-dom'
import languageSelector from '../../assets/languages/languageSelector';
import { useSelector } from 'react-redux';


const RestaurantList = ({ categories }) => {
  const data = DB;
  const sortButton =  [{ id: 1, text:'All' }, { id: 2, text:'Popular' }, { id: 3, text:'Latest' }, { id: 4, text:'Trend' }];
  const [selectOrder, setSelectOrder] = useState(1);
  const [sortList, setSortList] = useState(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const language = useSelector(state => state.languageReducer);


  // Logic for the order buttons
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
  // logic for the filters 
  const filteredData = () => {
    let result = [];
  
    const categories = searchParams.getAll('cuisine');
    const rating = searchParams.get('rating');
  
    if (searchParams.get('searchTerm')) {
      result = data.filter((element) =>
        element.restaurantName
          .replaceAll(' ', '')
          .toLowerCase()
          .includes(searchParams.get('searchTerm'))
      );
    }
  
    const filterByCategory = (arr) => {
      return arr.filter((element1) => {
        return element1.categories.some((element2) => {
          return categories.includes(element2);
        });
      });
    };
  
    if (rating >= 2 && categories.length === 0)
      result = data.filter((element) => Math.round(element.rating) >= rating);
    if (categories.length > 0 && rating < 2) result = filterByCategory(data);
    if (categories.length > 0 && rating >= 2)
      result = data.filter(
        (element) =>
          Math.round(element.rating) >= rating && filterByCategory([element]).length
      );
    return result;
  };
  
  const renderList = (data, displayArr) => {
    const hasCuisine = searchParams.getAll('cuisine').length;
    const hasRating = searchParams.get('rating') && searchParams.get('rating') >= 2;
  
    if (!displayArr.length && (hasCuisine || hasRating)) {
      return (
        <div>
          <p>{languageSelector(language, 'restaurantSearchNull')}</p>
        </div>
      );
    } else {
      const listToRender = displayArr.length > 0 ? displayArr : sortList;
      return listToRender.map((element) => {
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
    <div className='restaurant-list'>
      <header className='restaurant-list-header'>
        <div className='restaurant-list-buttons'>
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
      <main className='restaurant-list-main'>
        {renderList(data, filteredData())}
      </main>
      <footer className='restaurant-list-footer'>
        <div className='restaurant-list-footer-page-button'>
          <img
            src={previous}
            alt=''
            className='restaurant-list-footer-button-icon'
          />
        </div>
        <div className='restaurant-list-footer-page-button restaurant-list-footer-page-button-selected'>
          <span className='restaurant-list-footer-page-button-text'>1</span>
        </div>
        <div className='restaurant-list-footer-page-button'>
          <span className='restaurant-list-footer-page-button-text'>2</span>
        </div>
        <div className='restaurant-list-footer-page-button'>
          <span className='restaurant-list-footer-page-button-text'>3</span>
        </div>
        <div className='restaurant-list-footer-page-button'>
          <img
            src={next}
            alt=''
            className='restaurant-list-footer-button-icon'
          />
        </div>
      </footer>
    </div>
  );
};

export default RestaurantList;
