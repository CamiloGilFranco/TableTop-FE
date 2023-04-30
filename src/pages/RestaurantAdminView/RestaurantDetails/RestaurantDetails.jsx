import React, { useState } from "react";
import "./RestaurantDetails.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditVenueDetailsModal from "../../../components/EditDetailsModal/EditDetailsModal";
import ReservationList from "./ReservationList/ReservationList";
import { API_URL } from "../../../constants/apiUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "universal-cookie";

const RestaurantDetails = ({
  language,
  languageSelector,
  restaurant = {},
  setRestaurant,
}) => {
  const [visibleVenueIndex, setVisibleVenueIndex] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [modalVisible, setModalVisible] = useState({
    show: false,
    field: null,
    index: null,
  });
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const toggleDetails = async (index) => {
    if (visibleVenueIndex === index) {
      setVisibleVenueIndex(null);
    } else {
      const venue = restaurant.venues[index];
      const res = await axios.get(
        `${API_URL}/reservations/venue/${venue.id_restaurant_venue}`,
        config
      );
      setReservations(res.data.data);
      setVisibleVenueIndex(index);
    }
  };

  const editItem = async (field, venueIndex, newValue) => {
    const venueId = restaurant.venues[venueIndex].id_restaurant_venue;
    const url = `${API_URL}/restaurant-venues/${venueId}`;
    try {
      const response = await axios.put(url, { field, newValue }, config);
      if (response.status === 200) {
        const updatedVenues = [...restaurant.venues];
        updatedVenues[venueIndex][field] = newValue;
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

  const deleteVenue = async (venueIndex) => {
    if (!window.confirm(languageSelector(language, "deleteVenueWarning"))) {
      return;
    }

    const venueId = restaurant.venues[venueIndex].id_restaurant_venue;
    const url = `${API_URL}/restaurant-venues/${venueId}`;

    try {
      const response = await axios.patch(url, {}, config);
      if (response.status === 200) {
        const updatedVenues = restaurant.venues.filter(
          (venue) => venue.id_restaurant_venue !== venueId
        );
        setRestaurant({ ...restaurant, venues: updatedVenues });
        toast.success(languageSelector(language, "deleteVenueSuccess"));
      } else {
        toast.error(languageSelector(language, "deleteVenueFailure"));
      }
    } catch (error) {
      toast.error(languageSelector(language, "deleteVenueFailure"));
    }
  };
  console.log(restaurant.venues);

  return (
    <div className="restaurantDetails">
      {restaurant.venues.map((venue, index) => (
        <div key={index}>
          <div
            className="restaurantDetails_single_item_header"
            onClick={() => toggleDetails(index)}
          >
            <h3>{venue.name_venue}</h3>
            <AiFillDelete
              className="restaurantAdminView__icon restaurantAdminView__delete delete-icon"
              onClick={() => deleteVenue(index)}
            />
          </div>
          {visibleVenueIndex === index && (
            <div className="restaurantAdminView_detail_restaurant_container">
              <span className="restaurantAdminView_span_subtitle">
                {languageSelector(language, "restaurantEditAddress")}
              </span>
              <ul className="restaurantAdminView_opening_closing_hour_list">
                <span>
                  {venue.address}
                  <AiFillEdit
                    className="restaurantAdminView__icon restaurantAdminView__edit"
                    onClick={() => handleDetailsClick("address", index)}
                  />
                </span>
              </ul>
              <span className="restaurantAdminView_span_subtitle">
                {languageSelector(language, "restaurantEditPhoneNumber")}
              </span>
              <ul>
                <span>
                  {venue.phone_number}
                  <AiFillEdit
                    className="restaurantAdminView__icon restaurantAdminView__edit"
                    onClick={() => handleDetailsClick("phone_number", index)}
                  />
                </span>
              </ul>
              <span className="restaurantAdminView_span_schedule restaurantAdminView_span_subtitle">
                {languageSelector(language, "restaurantEditOpenHour")}
              </span>
              <span className="restaurantAdminView_span_schedule">
                {venue.open_hour}
                <AiFillEdit
                  className="restaurantAdminView__icon restaurantAdminView__edit"
                  onClick={() => handleDetailsClick("open_hour", index)}
                />
              </span>
              <span className="restaurantAdminView_span_schedule restaurantAdminView_span_subtitle">
                {languageSelector(language, "restaurantEditCloseHour")}
              </span>
              <span className="restaurantAdminView_span_schedule ">
                {venue.close_hour}
                <AiFillEdit
                  className="restaurantAdminView__icon restaurantAdminView__edit"
                  onClick={() => handleDetailsClick("close_hour", index)}
                />
              </span>
              <h4>{languageSelector(language, "reservations")}</h4>
              {visibleVenueIndex !== null && (
                <>
                  <ReservationList
                    reservations={reservations}
                    setReservations={setReservations}
                    language={language}
                  />
                </>
              )}
            </div>
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
    </div>
  );
};

export default RestaurantDetails;
