import React from 'react';
import './ReservationList.css'

const ReservationList = ({ reservations = [] }) => {
  return (
    <div className="reservationList__container">
      {reservations.map((reservation) => (
        <div className="reservationList__item" key={reservation.id_reservation}>
          <p className="reservationList__title">Reservation ID: {reservation.id_reservation}</p>
          <div className="reservationList__detail">
            <p className="reservationList__label">User Name:</p>
            <p>{reservation.users.name} {reservation.users.last_name}</p>
          </div>
          <div className="reservationList__detail">
            <p className="reservationList__label">Date & Time:</p>
            <p>{reservation.date_hour}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;
