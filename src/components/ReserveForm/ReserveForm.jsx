import { useSelector } from "react-redux";

import { useState } from "react";
import "./ReserveForm.css";
import languageSelector from "../../assets/languages/languageSelector";
import Cookies from "universal-cookie";
import { toast, ToastContainer } from "react-toastify";
import { API_URL } from "../../constants/apiUrl";
import axios from "axios";
import Loader from "../Loader/Loader";

const ReserveForm = ({ venues, id_restaurant }) => {
  const cookies = new Cookies();
  const [reserveForm, setReserveForm] = useState({
    dateAndTime: "",
    venue: "CHOOSE ONE",
  });
  const language = useSelector((state) => state.languageReducer);

  const [dateError, setDateError] = useState(false);
  const [venueError, setVenueError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    const reserveDate = new Date(reserveForm.dateAndTime);
    const reserveDateNumber = Date.parse(reserveDate);

    const today = new Date();
    const todayNumber = Date.parse(today);

    const month = new Date();
    month.setMonth(month.getMonth() + 1);
    const monthNumber = Date.parse(month);

    if (
      reserveDateNumber < todayNumber ||
      reserveDateNumber > monthNumber ||
      !reserveForm.dateAndTime
    ) {
      setDateError(true);
      isValid = false;
    } else {
      setDateError(false);
    }

    if (reserveForm.venue === "CHOOSE ONE") {
      setVenueError(true);
      isValid = false;
    } else {
      setVenueError(false);
    }

    if (isValid) {
      if (!cookies.get("token")) {
        toast.error("You must log in to continue", {
          position: "bottom-right",
        });
      } else {
        setLoader(true);
        axios
          .post(
            `${API_URL}/reservations`,
            { date: reserveDate, id_restaurant, id_venue: reserveForm.venue },
            {
              headers: {
                Authorization: `Bearer ${cookies.get("token")}`,
              },
            }
          )
          .then(() => {
            toast.success("Your reservation was made successfully", {
              position: "bottom-right",
            });
            setReserveForm({ dateAndTime: "", venue: "CHOOSE ONE" });
            setLoader(false);
          })
          .catch(() => {
            toast.error(
              "Your reservation was not completed, try again or select another date",
              {
                position: "bottom-right",
              }
            );
            setLoader(false);
          });
      }
    }
  };

  return (
    <form
      action=""
      className={`reserve-form`}
      onSubmit={handleReservationSubmit}
    >
      {loader ? <Loader /> : ""}
      <div className="reserve-form-input-container">
        <div className="reserve-form-input-date-container-main">
          <div className="reserve-form-input-date-container">
            <input
              type="datetime-local"
              className="reserve-form-input-date-text"
              min={`${new Date()}`}
              max="2023-03-31T8:30"
              value={reserveForm.dateAndTime}
              onChange={(event) => {
                setReserveForm({
                  ...reserveForm,
                  dateAndTime: event.target.value,
                });
              }}
            />
          </div>
          {dateError ? (
            <p className="reserve-form-input-error-message">
              * debes reservar una fecha menor a 30 días
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="reserve-form-input-date-container-main">
          <select
            name=""
            onChange={(event) =>
              setReserveForm({
                ...reserveForm,
                venue: event.target.value,
              })
            }
            value={reserveForm.venue}
            className="reserve-form-input"
          >
            <option value="CHOOSE ONE">CHOOSE A VENUE</option>
            {!!venues &&
              venues.map((venue, index) => {
                return (
                  <option key={index} value={venue.id_restaurant_venue}>
                    {venue.name_venue}
                  </option>
                );
              })}
          </select>
          {venueError ? (
            <p className="reserve-form-input-error-message">
              * Escoge una sede
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="reserve-form-button-container">
        <input
          type="submit"
          value={languageSelector(language, "bookingButton")}
          className="reserve-form-button"
        />
      </div>
    </form>
  );
};

export default ReserveForm;
