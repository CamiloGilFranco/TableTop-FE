import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
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
const language = useSelector(state=> state.languageReducer);
const signInFirstName = () => {
  switch (language) {
    case 'en':
      return en.signInFirstName
    case 'es':
      return es.signInFirstName
    default:
      return en.signInFirstName
  }
}
const signInFirstNameError = () => {
  switch (language) {
    case 'en':
      return en.signInFirstNameError
    case 'es':
      return es.signInFirstNameError
    default:
      return en.signInFirstNameError
  }
}
const signInLastName = () => {
  switch (language) {
    case 'en':
      return en.signInLastName
    case 'es':
      return es.signInLastName
    default:
      return en.signInLastName
  }
}
const signInLastNameError = () => {
  switch (language) {
    case 'en':
      return en.signInLastNameError
    case 'es':
      return es.signInLastNameError
    default:
      return en.signInLastNameError
  }
}
const signInEmail = () => {
  switch (language) {
    case 'en':
      return en.signInEmail
    case 'es':
      return es.signInEmail
    default:
      return en.signInEmail
  }
}
const signInEmailError = () => {
  switch (language) {
    case 'en':
      return en.signInEmailError
    case 'es':
      return es.signInEmailError
    default:
      return en.signInEmailError
  }
}
const signInPhone = () => {
  switch (language) {
    case 'en':
      return en.signInPhone
    case 'es':
      return es.signInPhone
    default:
      return en.signInPhone
  }
}
const signInPhoneError = () => {
  switch (language) {
    case 'en':
      return en.signInPhoneError
    case 'es':
      return es.signInPhoneError
    default:
      return en.signInPhoneError
  }
}
const bookingButton = () => {
  switch (language) {
    case 'en':
      return en.bookingButton
    case 'es':
      return es.bookingButton
    default:
      return en.bookingButton
  }
}

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
          placeholder={signInFirstName()}
          className="reserve-form-input"
          required
          value={reserveForm.firstName}
          onChange={(event) => {
            setReserveForm({...reserveForm, firstName: event.target.value})
          }}
        />
        {firstNameError? (
          <p className="reserveForm__fieldError">{signInFirstNameError()}</p>
        ): 
        (
          ''
          )}
        <input
          type="text"
          placeholder={signInLastName()}
          className="reserve-form-input"
          required
          value={reserveForm.lastName}
          onChange={(event) => {
            setReserveForm({...reserveForm, lastName: event.target.value})
          }}
        />
        {lastNameError? (
          <p className="reserveForm__fieldError">{signInLastNameError()}</p>
        ): 
        (
          ''
          )}
        <input
          type="email"
          placeholder={signInEmail()}
          className="reserve-form-input"
          required
          value={reserveForm.email}
          onChange={(event) => {
            setReserveForm({...reserveForm, email: event.target.value})
          }}
        />
        {emailError? (
          <p className="reserveForm__fieldError">{signInEmailError()}</p>
        ): 
        (
          ''
          )}
        <input
          type="tel"
          placeholder={signInPhone()}
          className="reserve-form-input"
          required
          value={reserveForm.phoneNumber}
          onChange={(event) => {
            setReserveForm({...reserveForm, phoneNumber: event.target.value})
          }}
        />
        {phoneError? (
          <p className="reserveForm__fieldError">{signInPhoneError()}</p>
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
        <input type="submit" value={bookingButton()} className="reserve-form-button" onClick={handleReservationClick}/>
      </div>
    </form>
  );
};

export default ReserveForm;
