import React, { useState } from 'react';
import Header from '../../components/HeaderComponent/HeaderComponent';
import Footer from '../../components/Footer/Footer';
import './UserPage.css';
import userDB from '../../assets/admins.json';
import { RiEdit2Fill } from 'react-icons/ri'



const UserPage = () => {
  const [user, setUser] = useState(userDB[0]);
  const [isEditable, setIsEditable] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    password: user.password,
    phoneNumber: user.phoneNumber,
    address: user.address,
    city: user.city
  });

  const handleEditClick = () => {
    setIsEditable(true)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  
  const handleSumbit = (event) => {
    event.preventDefault();
    console.log('sup');
    const validationErrors = {};
    const form = event.target
    const name = form.userName.value;
    const email = form.userEmail.value;
    const password = form.userPassword.value;
    const phoneNumber = form.userPhoneNumber.value;
    const address = form.userAddress.value;
    const city = form.userCity.value;
    const updatedUser = {
      name,
      email,
      password,
      phoneNumber,
      address,
      city
    }
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    
    if (name.length <= 1) {
      validationErrors.name = 'name must be at least characters long';
    }
    if (emailRegEx.test(email)) {
      validationErrors.email = 'Please enter a valid email';
    }
    if (passwordRegEx.test(password)) {
      validationErrors.password = 'Please enter a valid password';
    }
    if (phoneNumber.length < 10) {
      validationErrors.phoneNumber = 'Please enter a phone number that is at least 10 digits long';
    }
    if (address.length <= 2) {
      validationErrors.address = 'Please enter a valid address';
    }

    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUser(updatedUser);
    setIsEditable(false);
    setErrors({});
  } 

  return (
    <React.Fragment>
      <Header/>
      <div className='userPage__container'>
        <section className='userPage__title'>
          <span>Welcome back name</span>
          <span>Here you can see and edit your details</span>
        </section>
        <section>
          <form className='userPage__form' onSubmit={handleSumbit}>
            <label className='userPage__form-label' htmlFor='userName'>Name</label>
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
            <label className='userPage__form-label' htmlFor='userEmail'>Email</label>
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
            <label className='userPage__form-label' htmlFor='userPassword'>Password</label>
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
            <label className='userPage__form-label' htmlFor='userPhoneNumber'>Phone Number</label>
            <span>
              <input
                className='userPage__form-input'
                type='number'
                id='userPhoneNumber'
                name='phoneNumber'
                disabled={!isEditable}
                onChange={handleInputChange}
                placeholder={user.phoneNumber}
                value={formData.phoneNumber}
              />
              <RiEdit2Fill onClick={handleEditClick}  className='userPage__form-icon'/>
              {errors.phoneNumber && <p className='restaurantAdminView__error'>{errors.phoneNumber}</p>}
            </span>
            <label className='userPage__form-label' htmlFor='userAddress'>Address</label>
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
            <label className='userPage__form-label' htmlFor='userCity'>City</label>
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
              Save changes
            </button>
          </form>
        </section>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default UserPage;