import React, { useEffect, useState } from 'react';
import './RestaurantDetails.css';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import EditDetailsModal from '../../../components/EditDetailsModal/EditDetailsModal';
import ReservationList from './ReservationList/ReservationList';
import { API_URL } from '../../../constants/apiUrl';
import axios from 'axios';


const RestaurantDetails = ({
  language,
  languageSelector,
  handleDetailsClick,
  handleDetailsDelete,
  handleDetailsClose,
  handleDetailsUpdate,
  editIndex,
  detailsModal,
  editingItem,
  restaurant = {},
}) => {
  const { venues = [] } = restaurant;
  const [visibleVenueIndex, setVisibleVenueIndex] = useState(null);
  const [reservations, setReservations] = useState([]);

  const toggleDetails = async (index) => {
    if (visibleVenueIndex === index) {
      setVisibleVenueIndex(null);
    } else {
      const venue = venues[index];
      const res = await axios.get(`${API_URL}/reservations/venue/${venue.id_restaurant_venue}`);
      const visibleVenue = { ...venue, reservations: res.data };
      setReservations(res.data.data);
      setVisibleVenueIndex(index);
    }
  };

  
  return (
    <>
     {venues.map((venue, index) => (
        <div key={index}>
          <h3 onClick={() => toggleDetails(index)}>
            {languageSelector(language, 'signInCity')}: {venue.city}
          </h3>
          {visibleVenueIndex === index && (
            <>
              <span>{languageSelector(language, 'restaurantEditAddress')}</span>
              <ul>
                <li>
                  {venue.address}
                  <AiFillEdit
                    className='restaurantAdminView__icon restaurantAdminView__edit'
                    onClick={() => handleDetailsClick(venue.address, index)}
                  />
                  <AiFillDelete
                    className='restaurantAdminView__icon'
                    onClick={() => handleDetailsDelete(venue.address, index)}
                  />
                </li>
              </ul>
              <span>{languageSelector(language, 'restaurantEditPhoneNumber')}</span>
              <ul>
                <li>
                  {venue.phone_number}
                  <AiFillEdit
                    className='restaurantAdminView__icon restaurantAdminView__edit'
                    onClick={() => handleDetailsClick(venue.phone_number, index)}
                  />
                  <AiFillDelete
                    className='restaurantAdminView__icon'
                    onClick={() => handleDetailsDelete(venue.phone_number, index)}
                  />
                </li>
              </ul>
              <span>{languageSelector(language, 'restaurantEditOpenHour')}</span>
              <li>
                {venue.open_hour}
                <AiFillEdit
                  className='restaurantAdminView__icon restaurantAdminView__edit'
                  onClick={() => handleDetailsClick(venue.open_hour, index)}
                />
                <AiFillDelete
                  className='restaurantAdminView__icon'
                  onClick={() => handleDetailsDelete(venue.open_hour, index)}
                />
              </li>
              <span>{languageSelector(language, 'restaurantEditCloseHour')}</span>
              <li>
                {venue.close_hour}
                <AiFillEdit
                  className='restaurantAdminView__icon restaurantAdminView__edit'
                  onClick={() => handleDetailsClick(venue.close_hour, index)}
                />
                <AiFillDelete
                  className='restaurantAdminView__icon'
                  onClick={() => handleDetailsDelete(venue.close_hour, index)}
                />
              </li>
              <h4>Reservations:</h4>
              {visibleVenueIndex !== null && (
              <>
                <ReservationList
                  reservations={reservations}
                  />
              </>
              )}
            </>
          )}
      </div>
    ))}
  </>
  );
}

export default RestaurantDetails