import React, { useState, useEffect } from "react";
import Header from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import "./UserPage.css";
import { RiEdit2Fill } from "react-icons/ri";
import languageSelector from "../../assets/languages/languageSelector";
import { useSelector, useDispatch } from "react-redux";
import loadingGif from "../../assets/fotos/loading/loading-gif.gif";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import axios from "axios";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  setUser,
} from "../../store/actions/user.action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPageComponent from "../NotFoundPageComponent/NotFoundPageComponent";
import {
  inputEmailRegEx,
  inputNameRegex,
  inputPasswordRegEx,
} from "../../constants/regexConstants";
import { API_URL } from "../../constants/apiUrl";
import routePaths from "../../constants/routePaths";

const UserPage = () => {
  const cookies = new Cookies();
  const language = useSelector((state) => state.languageReducer);
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const [isEditable, setIsEditable] = useState(false);
  const [errors, setErrors] = useState({});
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwtToken = cookies.get("token");
  const { isExpired } = useJwt(cookies.get("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    phone_numbers: [],
    address: [],
    city: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(fetchUserRequest());
      try {
        const response = await axios.get(`${API_URL}/users/profile`, config);
        dispatch(fetchUserSuccess(response.data.data));
        const {
          name,
          last_name,
          email,
          password,
          phone_numbers,
          addresses: address,
          city,
        } = response.data.data;
        setFormData({
          name,
          last_name,
          email,
          password,
          phone_numbers,
          address,
          city,
        });
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
    fetchUser();
  }, [dispatch, jwtToken]);

  useEffect(() => {
    let timer;
    if (deleted) {
      timer = setTimeout(() => {
        navigate(routePaths.home);
      }, 6000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [deleted, navigate]);

  // enables the editing of the inputs
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  };

  // handles the changes of the inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const matches = name.match(inputNameRegex);
    if (matches) {
      const fieldNameIndex = 1;
      const fieldIndexIndex = 2;
      const nestedFieldNameIndex = 3;

      const fieldName = matches[fieldNameIndex];
      const fieldIndex = parseInt(matches[fieldIndexIndex], 10);
      const nestedFieldName = matches[nestedFieldNameIndex]
        ? matches[nestedFieldNameIndex].slice(1, -1)
        : undefined;

      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: prevState[fieldName].map((item, index) =>
          index === fieldIndex
            ? { ...item, [nestedFieldName || fieldName]: value }
            : item
        ),
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const showToast = () => {
    toast.success(languageSelector(language, "userUpdatedMessage"), {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const showErrorToast = (errorMessage) => {
    toast.error(errorMessage, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  // handles the sumbit of the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    const form = event.target;
    const name = form.userName.value;
    const last_name = form.userLastName.value;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    const phone_numbers = formData.phone_numbers;
    const address = formData.address;
    const city = formData.city;

    // updates the specific field of numbers that was modified
    const updatedPhoneNumbers = phone_numbers.map((phoneNumber, index) => {
      return {
        id_user_phone_number: phoneNumber.id_user_phone_number,
        phone_number: phone_numbers[index].phone_number,
      };
    });

    //updates the specific field of the address that was modified
    const updatedAddresses = formData.address.map((address, index) => {
      const { id_address, address_name } = address;
      return {
        id_address,
        address_name,
        address: formData.address[index].address,
        city: formData.address[index].city,
      };
    });

    // creates new user obj with the information from the form
    const { user_id } = user;
    const updatedUser = {
      user_id,
      name,
      last_name,
      email,
      password,
      phone_numbers: updatedPhoneNumbers,
      addresses: updatedAddresses,
      city,
    };

    // validates the fields
    if (!name.length) {
      validationErrors.name = languageSelector(
        language,
        "signInFirstNameError"
      );
    }
    if (!inputEmailRegEx.test(email)) {
      validationErrors.email = languageSelector(language, "signInEmailError");
    }
    if (!inputPasswordRegEx.test(password)) {
      validationErrors.password = languageSelector(
        language,
        "signInPasswordError"
      );
    }
    if (
      phone_numbers.some((phoneNumber) => phoneNumber.phone_number.length < 10)
    ) {
      validationErrors.phoneNumber = languageSelector(
        language,
        "signInPhoneError"
      );
    }
    if (address.some((addressItem) => !addressItem.address.trim())) {
      validationErrors.address = languageSelector(language, "userAddressError");
    }

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    // sends the information to the back end and does a new petition
    try {
      await axios.put(`${API_URL}/users/`, updatedUser, config);
      dispatch(updateUserSuccess(updatedUser));
      setIsEditable(false);
      setErrors({});
      const response = await axios.get(`${API_URL}/users/profile`, config);
      dispatch(fetchUserSuccess(response.data.data));
      showToast();
      const {
        name,
        last_name,
        email,
        password,
        phone_numbers,
        addresses,
        city,
      } = response.data.data;
      setFormData({
        name,
        last_name,
        email,
        password,
        phone_numbers,
        address: response.data.data.addresses,
        city,
      });
    } catch (error) {
      dispatch(updateUserFailure(error));
      const errorMessage =
        error.response && error.response.data.message
          ? error.response.data.message
          : languageSelector(language, "userUpdateFailedMessage");
      showErrorToast(errorMessage);
    }
  };

  const handeleDeleteSelf = async () => {
    if (window.confirm(languageSelector(language, "deleteSelfWarning"))) {
      try {
        await axios.patch(`${API_URL}/users/deactivateSelf`, {}, config);
        cookies.remove("token");
        cookies.remove("name");
        cookies.remove("last_name");
        cookies.remove("email");
        cookies.remove("user_role");

        dispatch(setUser({}));
        toast.success(languageSelector(language, "deleteSelfSuccess"));

        setDeleted(true);
      } catch (error) {
        toast.error(languageSelector(language, "deleteSelfFailure"));
      }
    }
  };

  if (!user) {
    return (
      <>
        <ToastContainer />
        <NotFoundPageComponent />;
      </>
    );
  }

  if (loading) {
    return (
      <div>
        <img src={`${loadingGif}`} alt="loading" />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <ToastContainer />
      <div className="userPage__container">
        <section className="userPage__title">
          <span>
            {languageSelector(language, "restaurantAdminTitle")} {user.name}{" "}
            {user.last_name}!
          </span>
          <span>{languageSelector(language, "userSubtitle")}</span>
        </section>
        <form className="userPage__form" onSubmit={handleSubmit}>
          <label className="userPage__form-label" htmlFor="userName">
            {languageSelector(language, "name")}
          </label>
          <span>
            <input
              className="userPage__form-input"
              type="text"
              id="userName"
              name="name"
              disabled={!isEditable}
              onChange={handleInputChange}
              placeholder={user.name}
              value={formData.name}
            />
            <RiEdit2Fill
              onClick={handleEditClick}
              className="userPage__form-icon"
            />
            {errors.name && (
              <p className="restaurantAdminView__error">{errors.name}</p>
            )}
          </span>
          <label className="userPage__form-label" htmlFor="userLastName">
            {languageSelector(language, "name")}
          </label>
          <span>
            <input
              className="userPage__form-input"
              type="text"
              id="userLastName"
              name="last_name"
              disabled={!isEditable}
              onChange={handleInputChange}
              placeholder={user.last_name}
              value={formData.last_name}
            />
            <RiEdit2Fill
              onClick={handleEditClick}
              className="userPage__form-icon"
            />
            {errors.name && (
              <p className="restaurantAdminView__error">{errors.name}</p>
            )}
          </span>
          <label className="userPage__form-label" htmlFor="userEmail">
            {languageSelector(language, "signInEmail")}
          </label>
          <span>
            <input
              className="userPage__form-input"
              type="text"
              id="userEmail"
              name="email"
              disabled={!isEditable}
              onChange={handleInputChange}
              placeholder={user.email}
              value={formData.email}
            />
            <RiEdit2Fill
              onClick={handleEditClick}
              className="userPage__form-icon"
            />
            {errors.email && (
              <p className="restaurantAdminView__error">{errors.email}</p>
            )}
          </span>
          <label className="userPage__form-label" htmlFor="userPassword">
            {languageSelector(language, "signInPassword")}
          </label>
          <span>
            <input
              className="userPage__form-input"
              type="password"
              id="userPassword"
              name="password"
              disabled={!isEditable}
              onChange={handleInputChange}
              placeholder={user.password}
              value={formData.password}
            />
            <RiEdit2Fill
              onClick={handleEditClick}
              className="userPage__form-icon"
            />
            {errors.password && (
              <p className="restaurantAdminView__error">{errors.password}</p>
            )}
          </span>
          {user.phone_numbers &&
            user.phone_numbers.map((phoneNumber, index) => (
              <div key={phoneNumber.id_user_phone_number}>
                <label
                  className="userPage__form-label"
                  htmlFor="userPhoneNumber"
                >
                  {languageSelector(language, "signInPhone")} {index + 1}
                </label>
                <span>
                  <input
                    className="userPage__form-input"
                    type="text"
                    id="userPhoneNumber"
                    name={`phone_numbers[${index}][phone_number]`}
                    disabled={!isEditable}
                    onChange={handleInputChange}
                    placeholder={phoneNumber.phone_number}
                    value={formData.phone_numbers[index].phone_number}
                  />
                  <RiEdit2Fill
                    onClick={handleEditClick}
                    className="userPage__form-icon"
                  />
                  {errors.phoneNumber && (
                    <p className="restaurantAdminView__error">
                      {errors.phoneNumber}
                    </p>
                  )}
                </span>
              </div>
            ))}
          {user.addresses &&
            !!user.addresses.map((address, index) => (
              <div key={address.id_address}>
                <label className="userPage__form-label" htmlFor="userAddress">
                  {languageSelector(language, "signInAddress")} {index + 1} -{" "}
                  {address.city}
                </label>
                <span>
                  <input
                    className="userPage__form-input"
                    type="text"
                    id="userAddres"
                    name={`address[${index}][address]`}
                    disabled={!isEditable}
                    onChange={handleInputChange}
                    placeholder={address.address}
                    value={formData.address[index].address}
                  />
                  <RiEdit2Fill
                    onClick={handleEditClick}
                    className="userPage__form-icon"
                  />
                  {errors.address && (
                    <p className="restaurantAdminView__error">
                      {errors.address}
                    </p>
                  )}
                </span>
              </div>
            ))}
          <label className="userPage__form-label" htmlFor="userCity">
            {languageSelector(language, "city")}
          </label>
          <span>
            <select
              id="userCity"
              className="userPage__form-input userPage__form-select"
              name="city"
              onChange={handleInputChange}
              value={formData.city}
            >
              <option value="bogota">Bogotá</option>
              <option value="medellin">Medellín</option>
              <option value="cartagena">Cartagena</option>
              <option value="cali">Calí</option>
              <option value="bucaramanga">Bucaramanga</option>
            </select>
            <RiEdit2Fill
              onClick={handleEditClick}
              className="userPage__form-icon"
            />
          </span>
          <button type="submit" className="userPage__form-button">
            {languageSelector(language, "userSaveChanges")}
          </button>
        </form>
        <button className="userPage__form-button" onClick={handeleDeleteSelf}>
          {languageSelector(language, "deleteSelf")}
        </button>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default UserPage;
