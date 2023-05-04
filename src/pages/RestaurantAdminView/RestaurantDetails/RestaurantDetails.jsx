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
import { facilitiesList } from "../../../assets/facilitesList";

const RestaurantDetails = ({
  language,
  languageSelector,
  restaurant = {},
  setRestaurant,
  onVenueUpdate,
}) => {
  const [visibleVenueIndex, setVisibleVenueIndex] = useState(null);
  const [selectedFacility, setSelectedFacility] = useState("");
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
  const handleFacilityDelete = (venueIndex, facilityIndex) => {
    if (!window.confirm(languageSelector(language, "facilityDeleteWarning"))) {
      return;
    }
    const facilityId =
      restaurant.venues[venueIndex].facilities[facilityIndex]
        .id_facility_per_venue;

    const response = axios.patch(
      `${API_URL}/facilities/${facilityId}`,
      {},
      config
    );
    if (response.status === 201 || 200) {
      toast.success(languageSelector(language, "facilityDeleteSuccess"));
      onVenueUpdate();
    } else {
      toast.error(languageSelector(language, "facilityDeleteError"));
    }
  };

  const updateVenueImage = async (venueIndex) => {
    const venueId = restaurant.venues[venueIndex].id_restaurant_venue;
    const formData = new FormData();
    const fileInput = document.getElementById("venue_photo");
    formData.append("image", fileInput.files[0]);

    try {
      const response = await axios.patch(
        `${API_URL}/restaurant-venues/${venueId}/image`,
        formData,
        {
          ...config,
          headers: {
            ...config.headers,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        const updatedVenues = [...restaurant.venues];
        updatedVenues[venueIndex].venue_photo = response.data.image_url;
        setRestaurant({ ...restaurant, venues: updatedVenues });
        toast.success(languageSelector(language, "updateImageSuccess"));
        onVenueUpdate();
      } else {
        toast.error(languageSelector(language, "updateImageError"));
      }
    } catch (error) {
      toast.error(languageSelector(language, "updateImageError"));
    }
  };

  const handleFacilityAdd = async () => {
    if (!selectedFacility) {
      toast.error("Please select a facility to add");
      return;
    }

    const response = await axios.post(
      `${API_URL}/facilities-per-venue`,
      {
        facilitiesId_facility: selectedFacility,
        restaurant_venuesId_restaurant_venue:
          restaurant.venues[visibleVenueIndex].id_restaurant_venue,
      },
      config
    );

    if (response.status === 201 || 204) {
      toast.success(languageSelector(language, "facilityAddSuccess"));
      onVenueUpdate();
    } else if (response.status === 400) {
      toast.error(languageSelector(language, "facilityAlreadyExistsError"));
    } else {
      toast.error(languageSelector(language, "facilityAddError"));
    }
  };

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
            <>
              <div className="venue_photo">
                <img
                  src={venue.venue_photo}
                  alt={`${venue.name_venue}`}
                  className="venue-image"
                />
                <label htmlFor="venue_photo">
                  {languageSelector(language, "updateVenuePhoto")}
                </label>
                <input
                  name="venue_photo"
                  id="venue_photo"
                  type="file"
                  accept="image/*"
                />
                <button onClick={() => updateVenueImage(index)}>
                  {languageSelector(language, "updateVenueButton")}
                </button>
              </div>
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
                <span className="restaurantAdminView_span_schedule restaurantAdminView_span_subtitle">
                  {languageSelector(language, "city")}
                </span>
                <span>
                  {venue.city}
                  <AiFillEdit
                    className="restaurantAdminView__icon restaurantAdminView__edit"
                    onClick={() => handleDetailsClick("city", index)}
                  />
                </span>
                <span className="restaurantAdminView_span_schedule restaurantAdminView_span_subtitle">
                  {languageSelector(language, "facilities")}
                </span>
                <ul>
                  {venue.facilities.map((facility, facilityIndex) => (
                    <li key={facility.id_facility_per_venue}>
                      {facility.facility}
                      <AiFillDelete
                        className="restaurantAdminView__icon restaurantAdminView__edit"
                        onClick={() =>
                          handleFacilityDelete(index, facilityIndex)
                        }
                      />
                    </li>
                  ))}
                </ul>
                <span className="restaurantAdminView_span_schedule restaurantAdminView_span_subtitle">
                  {languageSelector(language, "addFacility")}
                </span>
                <div className="venue_photo">
                  <select
                    value={selectedFacility}
                    onChange={(e) => setSelectedFacility(e.target.value)}
                  >
                    <option value="">
                      {languageSelector(language, "addFacilitySelect")}
                    </option>
                    {facilitiesList.map((facility) => (
                      <option key={facility} value={facility}>
                        {facility}
                      </option>
                    ))}
                  </select>
                  <button onClick={handleFacilityAdd}>
                    {languageSelector(language, "addFacilityButton")}
                  </button>
                </div>
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
            </>
          )}
        </div>
      ))}
      {modalVisible.show && (
        <EditVenueDetailsModal
          restaurant={restaurant}
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
