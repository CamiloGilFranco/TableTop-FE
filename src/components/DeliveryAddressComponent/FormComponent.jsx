import { useState } from "react";
import "./FormComponent.css";
import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";

const FormComponent = ({ handleNewAddress, closeModal }) => {
  const [addFormValues, setAddFormValues] = useState({
    name: "",
    mobileNumber: "",
    address: "",
    city: "",
  });

  const language = useSelector(state => state.languageReducer)
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [cityError, setCityError] = useState(false);

  const addNewAddressSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!addFormValues.name) {
      setNameError(true);
      isValid = false;
    } else {
      isValid = true;
    }

    if (!addFormValues.address) {
      setAddressError(true);
      isValid = false;
    } else {
      isValid = true;
    }

    if (addFormValues.mobileNumber.length !== 10) {
      setNumberError(true);
      isValid = false;
    } else {
      isValid = true;
    }

    if (!addFormValues.city) {
      setCityError(true);
      isValid = false;
    } else {
      isValid = true;
    }

    if (isValid) {
      handleNewAddress(addFormValues);
      closeModal();
    }
  };

  return (
    <form className="form-add-address">
      <div className="form-header">
        <span className="add-address-title">{languageSelector(language, 'addAddress')}</span>
      </div>

      <label htmlFor="name" className="form-add-address-label">
        {languageSelector(language, 'name')}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        class="form-add-address-input"
        value={addFormValues.name}
        onChange={(event) =>
          setAddFormValues({ ...addFormValues, name: event.target.value })
        }
      />
      {nameError ? (
        <p className="form-add-address-error">
          {languageSelector(language, 'newAddressError')}
        </p>
      ) : (
        ""
      )}

      <label htmlFor="address" className="form-add-address-label">
        {languageSelector(language, 'address')}
      </label>
      <input
        type="text"
        id="address"
        name="address"
        class="form-add-address-input"
        value={addFormValues.address}
        onChange={(event) =>
          setAddFormValues({ ...addFormValues, address: event.target.value })
        }
      />
      {addressError ? (
        <p className="form-add-address-error">
          {languageSelector(language, 'newAddressError')}
        </p>
      ) : (
        ""
      )}

      <label htmlFor="mobile" className="form-add-address-label">
        {languageSelector(language, 'signInPhone')}
      </label>
      <input
        type="number"
        id="name"
        name="name"
        class="form-add-address-input"
        value={addFormValues.mobileNumber}
        onChange={(event) =>
          setAddFormValues({
            ...addFormValues,
            mobileNumber: event.target.value,
          })
        }
      />
      {numberError ? (
        <p className="form-add-address-error">{languageSelector(language, 'signInPhoneError')}</p>
      ) : (
        ""
      )}

      <label htmlFor="mobile" className="form-add-address-label">
        {languageSelector(language, 'city')}
      </label>
      <input
        type="text"
        id="mobile"
        name="mobile"
        class="form-add-address-input"
        value={addFormValues.city}
        onChange={(event) =>
          setAddFormValues({ ...addFormValues, city: event.target.value })
        }
      />
      {cityError ? (
        <p className="form-add-address-error">
          {languageSelector(language, 'newAddressError')}
        </p>
      ) : (
        ""
      )}
      <button
        type="submit"
        className="form-button-add"
        onClick={addNewAddressSubmit}
      >
        <b>
          {languageSelector(language, 'addNewAddress')}
        </b>
      </button>
    </form>
  );
};
export default FormComponent;
