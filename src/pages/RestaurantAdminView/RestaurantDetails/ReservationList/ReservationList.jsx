import React from "react";
import "./ReservationList.css";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../../../../constants/apiUrl";
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

const ReservationList = ({ reservations = [], setReservations }) => {
  const cookies = new Cookies();
  const jwtToken = cookies.get("token");
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  const handleDeleteReservation = async (reservationId) => {
    if (
      window.confirm(
        "This action is irreversible. Are you sure you want to delete this reservation?"
      )
    ) {
      try {
        const response = await axios.put(
          `${API_URL}/reservations/${reservationId}`,
          { active: false },
          config
        );
        if (response.status === 200) {
          toast.success("Reservation successfully deleted");
          setReservations(
            reservations.filter(
              (reservation) => reservation.id_reservation !== reservationId
            )
          );
        } else {
          toast.error("Failed to delete reservation");
        }
      } catch (error) {
        toast.error("Failed to delete reservation");
      }
    }
  };

  return (
    <div className="reservationList__container">
      {reservations.map((reservation) => (
        <div className="reservationList__item" key={reservation.id_reservation}>
          <p className="reservationList__title">
            Reservation ID: {reservation.id_reservation}
          </p>
          <div className="reservationList__detail">
            <p className="reservationList__label">User Name:</p>
            <p>
              {reservation.users.name} {reservation.users.last_name}
            </p>
          </div>
          <div className="reservationList__detail">
            <p className="reservationList__label">Date & Time:</p>
            <p>{reservation.date_hour}</p>
          </div>
          <AiFillDelete
            className="reservationList__delete-icon"
            onClick={() => handleDeleteReservation(reservation.id_reservation)}
          />
        </div>
      ))}
    </div>
  );
};

export default ReservationList;
