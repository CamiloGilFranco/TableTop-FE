import React, { useState } from "react";
import "./RestaurantDetails.css";
import { AiFillEdit } from "react-icons/ai";
import EditVenueDetailsModal from "../../../components/EditDetailsModal/EditDetailsModal";
import ReservationList from "./ReservationList/ReservationList";
import { API_URL } from "../../../constants/apiUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useJwt } from "react-jwt";
import Cookies from 'universal-cookie';
import { useSelector } from 'react-redux';


const RestaurantDetails = ({
  language,
  languageSelector,
  restaurant = {},
  setRestaurant,
}) => {
  const { venues = [] } = restaurant;
  const [visibleVenueIndex, setVisibleVenueIndex] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [modalVisible, setModalVisible] = useState({
    show: false,
    field: null,
    index: null,
  });
  const cookies = new Cookies();
  const jwtToken = cookies.get('token');
  const { isExpired } = useJwt(cookies.get("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };


  const toggleDetails = async (index) => {
    if (visibleVenueIndex === index) {
      setVisibleVenueIndex(null);
    } else {
      const venue = venues[index];
      const res = await axios.get(
        `${API_URL}/reservations/venue/${venue.id_restaurant_venue}`,
        config
      );
      setReservations(res.data.data);
      setVisibleVenueIndex(index);
    }
  };

  const editItem = async (field, index, newValue) => {
    const venueId = venues[index].id_restaurant_venue;
    const url = `${API_URL}/restaurant-venues/${venueId}`;
    try {
      const response = await axios.put(url, { field, newValue }, config);
      if (response.status === 200) {
        const updatedVenues = [...venues];
        updatedVenues[index][field] = newValue;
        setRestaurant({ ...restaurant, venues: updatedVenues });
        toast.success(languageSelector(language, "updateSuccess"));
      } else {
        toast.error(languageSelector(language, "updateError"));
      }
    } catch (error) {
      toast.error(languageSelector(language, "updateError"));
    }
  };

  const handleDetailsClick = (field, index) => {
    setModalVisible({ show: true, field, index });
  };

  return (
    <>
      {venues.map((venue, index) => (
        <div key={index}>
          <h3 onClick={() => toggleDetails(index)}>
            {languageSelector(language, "signInCity")}: {venue.city}
          </h3>
          {visibleVenueIndex === index && (
            <>
              <span>{languageSelector(language, "restaurantEditAddress")}</span>
              <ul>
                <li>
                  {venue.address}
                  <AiFillEdit
                    className="restaurantAdminView__icon restaurantAdminView__edit"
                    onClick={() => handleDetailsClick("address", index)}
                  />
                </li>
              </ul>
              <span>
                {languageSelector(language, "restaurantEditPhoneNumber")}
              </span>
              <ul>
                <li>
                  {venue.phone_number}
                  <AiFillEdit
                    className="restaurantAdminView__icon restaurantAdminView__edit"
                    onClick={() => handleDetailsClick("phone_number", index)}
                  />
                </li>
              </ul>
              <span>
                {languageSelector(language, "restaurantEditOpenHour")}
              </span>
              <li>
                {venue.open_hour}
                <AiFillEdit
                  className="restaurantAdminView__icon restaurantAdminView__edit"
                  onClick={() => handleDetailsClick("open_hour", index)}
                />
              </li>
              <span>
                {languageSelector(language, "restaurantEditCloseHour")}
              </span>
              <li>
                {venue.close_hour}
                <AiFillEdit
                  className="restaurantAdminView__icon restaurantAdminView__edit"
                  onClick={() => handleDetailsClick("close_hour", index)}
                />
              </li>
              <h4>Reservations:</h4>
              {visibleVenueIndex !== null && (
                <>
                  <ReservationList reservations={reservations} setReservations={setReservations} />
                </>
              )}
            </>
          )}
        </div>
      ))}
      {modalVisible.show && (
        <EditVenueDetailsModal
          editItem={editItem}
          onClose={() => setModalVisible({ ...modalVisible, show: false })}
          field={modalVisible.field}
          index={modalVisible.index}
        />
      )}
    </>
  );
};

export default RestaurantDetails;
