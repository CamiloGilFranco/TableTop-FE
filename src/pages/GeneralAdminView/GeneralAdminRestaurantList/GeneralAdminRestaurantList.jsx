import React from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import './GeneralAdminRestaurantList.css';

const RestaurantList = ({
  restaurants,
  handleDelete,
  handleEditClick,
  languageSelector,
  language,
}) => {
  return (
    <article className='restaurantList'>
      <span>{languageSelector(language, 'generalAdminFullList')}</span>
      <p>{languageSelector(language, 'generalAdminDelete')}</p>
      <ul>
        {Object.entries(restaurants).map(([key, value]) => (
          <li key={key} className='restaurantList__details'>
            {value.restaurantName} - {value.location}
            <AiFillEdit
              className='restaurantList__icon restaurantAdminView__edit'
              onClick={() => handleEditClick(value)}
            />
            <AiFillDelete
              className='restaurantList__icon'
              onClick={() => handleDelete(parseInt(key) + 1)}
            />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default RestaurantList;
