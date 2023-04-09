import React, { useState, useEffect } from 'react';
import Header from '../../components/HeaderComponent/HeaderComponent';
import Footer from '../../components/Footer/Footer';
import './UserPage.css';
import { RiEdit2Fill } from 'react-icons/ri'
import { useParams } from 'react-router';
import languageSelector from '../../assets/languages/languageSelector';
import { useSelector, useDispatch } from 'react-redux';
import loadingGif from '../../assets/fotos/loading/loading-gif.gif'
import axios from 'axios';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure
} from '../../store/actions/user.action';

const UserPage = () => {
  const { id } = useParams();
  const language = useSelector(state => state.languageReducer);
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector(state => state.userReducer.user);
  const [isEditable, setIsEditable] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    phone_numbers: [],
    address: [],
    city: ''
  });


  // does a get request on mount 
  useEffect(() => {
    const fetchUser = async () => {
      dispatch(fetchUserRequest());
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${id}`);
        dispatch(fetchUserSuccess(response.data.data));
        setFormData({
          name: response.data.data.name,
          last_name: response.data.data.last_name,
          email: response.data.data.email,
          password: response.data.data.password,
          phone_numbers: response.data.data.phone_numbers,
          address: response.data.data.addresses,
          city: response.data.data.city,
        });
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
    fetchUser();
  }, [id, dispatch]);

  // enables the editing of the inputs
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  }

  // hangles the changes of the inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const matches = name.match(/^(\w+)\[(\d+)\](\[\w+\])?$/);
    if (matches) {
      const fieldName = matches[1];
      const fieldIndex = parseInt(matches[2], 10);
      const nestedFieldName = matches[3] ? matches[3].slice(1, -1) : undefined;
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

  // handles the sumbit of the form
  const handleSumbit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    const form = event.target
    const name = form.userName.value;
    const last_name = form.userLastName.value;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    const phone_numbers = formData.phone_numbers;
    const address = formData.address;
    const city = formData.city;
    
    // updates the specific field of numbers that was modified
    const updatedPhoneNumbers = formData.phone_numbers.map((phoneNumber, index) => {
      return {
        id_user_phone_number: phoneNumber.id_user_phone_number,
        phone_number: formData.phone_numbers[index].phone_number,
      };
    });

    //updates the specific field of the address that was modified
    const updatedAddresses = formData.address.map((address, index) => {
      return {
        id_address: address.id_address,
        address_name: address.address_name,
        address: formData.address[index].address,
        city: formData.address[index].city,
      };
    });
  
    // creates new user obj with the information from the form
    const updatedUser = {
      user_id: user.user_id,
      name,
      last_name,
      email,
      password,
      phone_numbers: updatedPhoneNumbers,
      addresses: updatedAddresses,
      city,
    };
    
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  
    // validates the fields
    if (!name.length) {
      validationErrors.name = languageSelector(language, 'signInFirstNameError');
    }
    if (!emailRegEx.test(email)) {
      validationErrors.email = languageSelector(language, 'signInEmailError');
    }
    if (!passwordRegEx.test(password)) {
      validationErrors.password = languageSelector(language, 'signInPasswordError');
    }
    if (phone_numbers.some((phoneNumber) => phoneNumber.phone_number.length < 10)) {
      validationErrors.phoneNumber = languageSelector(language, 'signInPhoneError');
    }
    if (address.some((addressItem) => !addressItem.address.trim())) {
      validationErrors.address = languageSelector(language, 'userAddressError');
    }
    
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
  
    // sends the information to the back end and does a new petition
    try {
      await axios.put(`http://localhost:8080/api/users/${id}`, updatedUser);
      dispatch(updateUserSuccess(updatedUser));
      setIsEditable(false);
      setErrors({});
      const response = await axios.get(`http://localhost:8080/api/users/${id}`);
      dispatch(fetchUserSuccess(response.data.data));
      setFormData({
        name: response.data.data.name,
        last_name: response.data.data.last_name,
        email: response.data.data.email,
        password: response.data.data.password,
        phone_numbers: response.data.data.phone_numbers,
        address: response.data.data.addresses,
        city: response.data.data.city
      });
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };
   
  // displayed when loading is true
  if (loading) {
    return (
      <div>
        <img src={`${loadingGif}`} alt='loading'/>
        <h1>Loading...</h1> 
      </div>
    );
  }

  return (
    <React.Fragment>
      <Header/>
      <div className='userPage__container'>
        <section className='userPage__title'>
          <span>{languageSelector(language, 'restaurantAdminTitle')} {user.name} {user.last_name}!</span>
          <span>{languageSelector(language, 'userSubtitle')}</span>
        </section>
          <form className='userPage__form' onSubmit={handleSumbit}>
            <label className='userPage__form-label' htmlFor='userName'>{languageSelector(language, 'name')}</label>
            <span>
              <input
                className='userPage__form-input'
                type='text'
                id='userName'
                name='name'
                disabled={!isEditable}
                onChange={handleInputChange}
                placeholder={user.name}
                value={formData.name}
              />
              <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
              {errors.name && <p className='restaurantAdminView__error'>{errors.name}</p>}
            </span>
            <label className='userPage__form-label' htmlFor='userLastName'>{languageSelector(language, 'name')}</label>
            <span>
              <input
                className='userPage__form-input'
                type='text'
                id='userLastName'
                name='last_name'
                disabled={!isEditable}
                onChange={handleInputChange}
                placeholder={user.last_name}
                value={formData.last_name}
              />
              <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
              {errors.name && <p className='restaurantAdminView__error'>{errors.name}</p>}
            </span>
            <label className='userPage__form-label' htmlFor='userEmail'>{languageSelector(language, 'signInEmail')}</label>
            <span>
              <input
                className='userPage__form-input'
                type='text'
                id='userEmail'
                name='email'
                disabled={!isEditable}
                onChange={handleInputChange}
                placeholder={user.email}
                value={formData.email}
              />
              <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
              {errors.email && <p className='restaurantAdminView__error'>{errors.email}</p>}
            </span>
            <label className='userPage__form-label' htmlFor='userPassword'>{languageSelector(language, 'signInPassword')}</label>
            <span>
              <input
                className='userPage__form-input'
                type='password'
                id='userPassword'
                name='password'
                disabled={!isEditable}
                onChange={handleInputChange}
                placeholder={user.password}
                value={formData.password}
              />
              <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
              {errors.password && <p className='restaurantAdminView__error'>{errors.password}</p>}
            </span>
            {user.phone_numbers && user.phone_numbers.map((phoneNumber, index) => (
              <div key={phoneNumber.id_user_phone_number}>
                <label className='userPage__form-label' htmlFor='userPhoneNumber'>{languageSelector(language, 'signInPhone')} {index + 1}</label>
                <span>
                <input
                  className='userPage__form-input'
                  type='text'
                  id='userPhoneNumber'
                  name={`phone_numbers[${index}][phone_number]`}
                  disabled={!isEditable}
                  onChange={handleInputChange}
                  placeholder={phoneNumber.phone_number}
                  value={formData.phone_numbers[index].phone_number}
                />
                <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
                {errors.phoneNumber && <p className='restaurantAdminView__error'>{errors.phoneNumber}</p>}
              </span>
            </div>
            ))}
            {user.addresses  && user.addresses.map((address, index)=>(
              <div key={address.id_address}>
                <label className='userPage__form-label' htmlFor='userAddress'>{languageSelector(language, 'signInAddress')} {index + 1} - {address.city}</label>
                <span>
                  <input
                    className='userPage__form-input'
                    type='text'
                    id='userAddres'
                    name={`address[${index}][address]`}
                    disabled={!isEditable}
                    onChange={handleInputChange}
                    placeholder={address.address}
                    value={formData.address[index].address}
                  />
                  <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
                  {errors.address && <p className='restaurantAdminView__error'>{errors.address}</p>}
                </span>
              </div>
            ))}
            <label className='userPage__form-label' htmlFor='userCity'>{languageSelector(language, 'city')}</label>
            <span>
              <select
                id='userCity'
                className='userPage__form-input userPage__form-select'
                name='city'
                onChange={handleInputChange}
                value={formData.city}
              >
                <option value="bogota">Bogotá</option>
                <option value="medellin">Medellín</option>
                <option value="cartagena">Cartagena</option>
                <option value="cali">Calí</option>
                <option value="bucaramanga">Bucaramanga</option>
              </select>
              <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
            </span>
            <button 
              type='submit'
              className='userPage__form-button'
            >
              {languageSelector(language, 'userSaveChanges')}
            </button>
          </form>
          <section className='userPAge__logOut'>
            <span>{languageSelector(language, 'signOutText')}</span>
            <button className='userPage__form-button'>
              {languageSelector(language, 'signOut')}
            </button>
          </section>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default UserPage;