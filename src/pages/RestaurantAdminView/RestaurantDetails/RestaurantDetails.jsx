import React, { useState } from "react";
import "./RestaurantDetails.css";
import { AiFillEdit } from "react-icons/ai";
import EditDetailsModal from "../../../components/EditDetailsModal/EditDetailsModal";
import ReservationList from "./ReservationList/ReservationList";
import { API_URL } from "../../../constants/apiUrl";
import axios from "axios";

const RestaurantDetails = ({ language, languageSelector, restaurant = {} }) => {
  const { venues = [] } = restaurant;
  const [visibleVenueIndex, setVisibleVenueIndex] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [modalVisible, setModalVisible] = useState({
    show: false,
    field: null,
    index: null,
  });
  console.log("🚀 ~ file: RestaurantDetails.jsx:18 ~ RestaurantDetails ~ modalVisible:", modalVisible)

  const toggleDetails = async (index) => {
    if (visibleVenueIndex === index) {
      setVisibleVenueIndex(null);
    } else {
      const venue = venues[index];
      const res = await axios.get(
        `${API_URL}/reservations/venue/${venue.id_restaurant_venue}`
      );
      setReservations(res.data.data);
      setVisibleVenueIndex(index);
    }
  };

  const editItem = async (field, index, newValue) => {
    const venueId = venues[index].id_restaurant_venue;
    const url = `${API_URL}/api/venues/update/${venueId}`;
    const response = await axios.put(url, { field, newValue });
    // Handle response
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
                  <ReservationList reservations={reservations} />
                </>
              )}
            </>
          )}
        </div>
      ))}
      {modalVisible.show && (
      <EditDetailsModal
        editItem={editItem}
        onClose={() =>
          setModalVisible({ ...modalVisible, show: false })
        }
        field={modalVisible.field}
        index={modalVisible.index}
      />
    )}
    </>
  );
};

export default RestaurantDetails;
