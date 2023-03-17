import { useState } from "react";
import "./ReserveForm.css";

const ReserveForm = ({ hiddenBookATable }) => {
const [reserveForm, setReserveForm] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  dateAndTime: '', 
  user: ''
})

const [firstNameError, setFirstNameError] = useState(false);
const [lastNameError, setLastNameError] = useState(false);
const [emailError, setEmailError] = useState(false);
const [phoneError, setPhoneError] = useState(false);


const handleReservationClick = (e) => {
}
const handleReservationSumbit = (e) => {
  let isValid = true;
  const nameRegEx = /[^a-zA-ZñÑáéíóúAÉÍÓÚ\s]/g;
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  if (nameRegEx.test(reserveForm.firstName) || reserveForm.firstName.length === 0) {
    setFirstNameError(true);
    isValid = false;
  } else {
    setFirstNameError(false);
  }
  if (nameRegEx.test(reserveForm.lastName) || reserveForm.lastName.length === 0) {
    setLastNameError(true);
    isValid = false;

  } else {
    setLastNameError(false);
  }
  if (emailRegEx.test(reserveForm.email) || reserveForm.email.length === 0) {
    setEmailError(true);
    isValid = false;
  } else {
    setEmailError(false);
  }
  if (phoneRegEx.test(reserveForm.phoneNumber) || reserveForm.phoneNumber.length === 0) {
    setPhoneError(true);
    isValid = false;

  } else {
    setPhoneError(false)
  }


  if (isValid) {
    //logica de procesamiento del formulario
    console.log("formulario procesado");
  }
    e.preventDefault();
  }

  return (
    <form action="" className={`reserve-form ${hiddenBookATable}`} onSubmit={handleReservationSumbit}>
      <div className="reserve-form-input-container">
        <input
          type="text"
          placeholder="First Name"
          className="reserve-form-input"
          required
          value={reserveForm.firstName}
          onChange={(event) => {
            setReserveForm({...reserveForm, firstName: event.target.value})
          }}
        />
        {firstNameError? (
          <p className="reserveForm__fieldError"> * Escribe un nombre valido</p>
        ): 
        (
          ''
          )}
        <input
          type="text"
          placeholder="Last Name"
          className="reserve-form-input"
          required
          value={reserveForm.lastName}
          onChange={(event) => {
            setReserveForm({...reserveForm, lastName: event.target.value})
          }}
        />
        {lastNameError? (
          <p className="reserveForm__fieldError"> * Escribe un apellido valido</p>
        ): 
        (
          ''
          )}
        <input
          type="email"
          placeholder="Email"
          className="reserve-form-input"
          required
          value={reserveForm.email}
          onChange={(event) => {
            setReserveForm({...reserveForm, email: event.target.value})
          }}
        />
        {emailError? (
          <p className="reserveForm__fieldError"> * Escribe un correo valido</p>
        ): 
        (
          ''
          )}
        <input
          type="tel"
          placeholder="Phone No:"
          className="reserve-form-input"
          required
          value={reserveForm.phoneNumber}
          onChange={(event) => {
            setReserveForm({...reserveForm, phoneNumber: event.target.value})
          }}
        />
        {phoneError? (
          <p className="reserveForm__fieldError"> * Escribe un número valido</p>
        ): 
        (
          ''
          )}
        <div className="reserve-form-input-date-container">
          <input
            type="datetime-local"
            className="reserve-form-input-date-text"
            min = {`${new Date()}`}
            max = "2023-03-31T8:30" 
            placeholder="Choose Date & Time"
            required
            value={reserveForm.dateAndTime}
            onChange={(event) => {
              setReserveForm({...reserveForm, dateAndTime: event.target.value})
            }}
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          className="reserve-form-input"in 
          value={reserveForm.user}
          onChange={(event) => {
            setReserveForm({...reserveForm, user: event.target.value})
          }}
        />
      </div>
      <div className="reserve-form-button-container">
        <input type="submit" value="SUBMIT" className="reserve-form-button" onClick={handleReservationClick}/>
      </div>
    </form>
  );
};

export default ReserveForm;
