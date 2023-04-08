import React, { useState, useEffect } from 'react';
import Header from '../../components/HeaderComponent/HeaderComponent';
import Footer from '../../components/Footer/Footer';
import './UserPage.css';
import { RiEdit2Fill } from 'react-icons/ri'
import { useParams } from 'react-router';
import languageSelector from '../../assets/languages/languageSelector';
import { useSelector } from 'react-redux';
import axios from 'axios';



const UserPage = () => {
  const { id } = useParams();
  const language = useSelector(state => state.languageReducer);
  const [user, setUser] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    email: '',
    password: '',
    phone_numbers: [],
    address: '',
    city: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${id}`)
      .then(response => {
        setUser(response.data.data);
        setFormData({
          name: response.data.data.name,
          last_name:  response.data.data.last_name,
          email: response.data.data.email,
          password: response.data.data.password,
          phone_numbers: response.data.data.phone_numbers,
          address: response.data.data.address,
          city: response.data.data.city
        });
      })
      .catch(error =>{
        console.log(error);
      })
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  // enables the editing of the inputs
  const handleEditClick = () => {
    setIsEditable(!isEditable);
  }

  // hangles the changes of the inputs
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  
  
  
  
  // handles the sumbit of the form
  const handleSumbit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    const form = event.target
    const name = form.userName.value;
    const last_name = form.userLastName.value;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    const phone_numbers = form.userPhoneNumber.value;
    const address = form.userAddress.value;
    const city = form.userCity.value;
    console.log(last_name);

    // crates new user from the inputs
    const updatedUser = {
      name,
      last_name,
      email,
      password,
      phone_numbers: [phone_numbers],
      address,
      city
    }
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

    // validates thee fields
    if (!name.length) {
      validationErrors.name = languageSelector(language, 'signInFirstNameError');
    }
    if (!emailRegEx.test(email)) {
      validationErrors.email = languageSelector(language, 'signInEmailError');
    }
    if (!passwordRegEx.test(password)) {
      validationErrors.password = languageSelector(language, 'signInPasswordError');
    }
    if (phone_numbers.length < 10) {
      validationErrors.phoneNumber = languageSelector(language, 'signInPhoneError');
    }
    if (address.length) {
      validationErrors.address = languageSelector(language, 'userAddressError');
    }
    
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setUser(updatedUser);
    setIsEditable(false);
    setErrors({});
  } 
  console.log(user.phone_numbers[0].id_user_phone_number);
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
            {user.phone_numbers.map((phoneNumber, index) => (
              <div key={phoneNumber.id_user_phone_number}>
                <label className='userPage__form-label' htmlFor='userPhoneNumber'>{languageSelector(language, 'signInPhone')} {index + 1}</label>
                <span>
                <input
                  className='userPage__form-input'
                  type='text'
                  id='userPhoneNumber'
                  name='userPhoneNumber'
                  disabled={!isEditable}
                  onChange={handleInputChange}
                  placeholder={formData.phone_numbers[index].phone_number}
                  value={formData.phone_numbers[index].phone_number}
                />
                <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
                {errors.phoneNumber && <p className='restaurantAdminView__error'>{errors.phoneNumber}</p>}
              </span>
            </div>
            ))}
            <label className='userPage__form-label' htmlFor='userAddress'>{languageSelector(language, 'signInAddress')}</label>
            <span>
              <input
                className='userPage__form-input'
                type='text'
                name='address'
                id='userAddress'
                disabled={!isEditable}
                onChange={handleInputChange}
                placeholder={user.address}
                value={formData.address}
              />
              <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
              {errors.address && <p className='restaurantAdminView__error'>{errors.address}</p>}
            </span>
            <label className='userPage__form-label' htmlFor='userCity'>{languageSelector(language, 'city')}</label>
            <span>
              <select
                id='userCity'
                className='userPage__form-input userPage__form-select'
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