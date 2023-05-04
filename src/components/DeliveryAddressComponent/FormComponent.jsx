import { useState } from "react";
import "./FormComponent.css";
import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";
import { API_URL } from "../../constants/apiUrl";
import axios from "axios";
import Cookies from "universal-cookie";

const FormComponent = ({
  handleNewAddress,
  closeModal,
  newRenderList,
  setNewRenderList,
}) => {
  const [addFormValues, setAddFormValues] = useState({
    name: "",
    address: "",
    city: "",
  });

  const cookies = new Cookies();

  const language = useSelector((state) => state.languageReducer);
  const [nameError, setNameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
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

    if (!addFormValues.city) {
      setCityError(true);
      isValid = false;
    } else {
      isValid = true;
    }

    if (isValid) {
      handleNewAddress(addFormValues);

      axios.post(
        `${API_URL}/user-address`,
        {
          name: addFormValues.name,
          address: addFormValues.address,
          city: addFormValues.city,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      );

      setNewRenderList(!newRenderList);
      closeModal();
      setNewRenderList(!newRenderList);
    }
  };

  return (
    <form className="form-add-address">
      <div className="form-header">
        <span className="add-address-title">
          {languageSelector(language, "addAddress")}
        </span>
      </div>

      <label htmlFor="name" className="form-add-address-label">
        {languageSelector(language, "name")}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="form-add-address-input"
        value={addFormValues.name}
        onChange={(event) =>
          setAddFormValues({ ...addFormValues, name: event.target.value })
        }
      />
      {nameError ? (
        <p className="form-add-address-error">
          {languageSelector(language, "newAddressError")}
        </p>
      ) : (
        ""
      )}

      <label htmlFor="address" className="form-add-address-label">
        {languageSelector(language, "address")}
      </label>
      <input
        type="text"
        id="address"
        name="address"
        className="form-add-address-input"
        value={addFormValues.address}
        onChange={(event) =>
          setAddFormValues({ ...addFormValues, address: event.target.value })
        }
      />
      {addressError ? (
        <p className="form-add-address-error">
          {languageSelector(language, "newAddressError")}
        </p>
      ) : (
        ""
      )}

      <label htmlFor="city" className="form-add-address-label">
        {languageSelector(language, "city")}
      </label>
      <input
        type="text"
        id="city"
        name="mobile"
        className="form-add-address-input"
        value={addFormValues.city}
        onChange={(event) =>
          setAddFormValues({ ...addFormValues, city: event.target.value })
        }
      />
      {cityError ? (
        <p className="form-add-address-error">
          {languageSelector(language, "newAddressError")}
        </p>
      ) : (
        ""
      )}
      <button
        type="submit"
        className="form-button-add"
        onClick={addNewAddressSubmit}
      >
        <b>{languageSelector(language, "addNewAddress")}</b>
      </button>
    </form>
  );
};
export default FormComponent;
