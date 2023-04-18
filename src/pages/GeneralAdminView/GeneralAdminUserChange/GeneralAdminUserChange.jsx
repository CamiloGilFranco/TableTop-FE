import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import languageSelector from '../../../assets/languages/languageSelector';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cookies from 'universal-cookie';

const GeneralAdminUserChange = () => {
  const language = useSelector(state => state.languageReducer);
  const [email, setEmail] = useState('');
  const cookie = new Cookies();
  const token = cookie.get('token');
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/users/change-role`, {
        email,
        user_role: 'appAdmin',
      }, config);
      setEmail('');
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error updating user role');
    }
  }

  return (
    <>
      <span>Here you can change a user role to be a App admnn, <b>Be careful, this person will have the ability to do major changes in the plataform.</b></span>
      <form className="generalAdminView__form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Write the user email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={languageSelector(language, "signInEmail")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Update User Role</button>
      </form>
    </>
  )
}

export default GeneralAdminUserChange;