import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import languageSelector from '../../../assets/languages/languageSelector';
import { toast } from 'react-toastify';
import { AiFillDelete } from 'react-icons/ai';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './GeneralAdminUserChange.css'

const GeneralAdminUserChange = () => {
  const language = useSelector(state => state.languageReducer);
  const [email, setEmail] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [users, setUsers] = useState([]);
  const cookie = new Cookies();
  const token = cookie.get('token');
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };


  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
        params: { role: 'user' },
        ...config,
      });
      setUsers(response.data.data);
    } catch (error) {
      toast.error(error.response?.data?.message || languageSelector(language, 'usersFetchError'));
    }
  };
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
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
      toast.error(error.response?.data?.message || languageSelector(language, 'updateUserError'));
    }
  }
  
  const hanldeUserDelete = async (id) => {
    if (window.confirm(languageSelector(language, 'deavtivateUserWarning'))) {
      try {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/users/${id}`, {}, config);
        toast.success(response.data.message || languageSelector(language, 'deactivatedUserSuccess'));
        fetchUsers();
      } catch (error) {
        toast.error(error.response?.data?.message || languageSelector(language, 'deactivatedUserFailure'));
      }
    }
  };
  
  return (
    <>
      <div className="generalAdminView__warning">
        {languageSelector(language, 'appAdminUserTitle')} <b>{languageSelector(language, 'appAdminUserWarning')}</b>
      </div>
      <form className="generalAdminView__form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          {languageSelector(language, "appAdminUserEmail")}
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
        <button type="submit">{languageSelector(language, 'appAdminUserButton')}</button>
      </form>
      <div className='generalAdmin_userList'>
        <button onClick={toggleExpanded}>
          {isExpanded ? languageSelector(language, 'hideUsers') : languageSelector(language, 'showUsers')}
        </button>
        {isExpanded && users.map((item, index) => {
          return (
            <ul key={index}>
              <li className='user__list'>
                {languageSelector(language, 'name')}: {item.name} {item.last_name} {languageSelector(language, 'role')} {item.user_role}{<AiFillDelete className='generalAdminView__icon' onClick={() => hanldeUserDelete(item.user_id)} />}
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default GeneralAdminUserChange;