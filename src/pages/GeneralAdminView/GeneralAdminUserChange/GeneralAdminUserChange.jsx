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
      toast.error(error.response?.data?.message || 'Error fetching users');
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
      toast.error(error.response?.data?.message || 'Error updating user role');
    }
  }
  
  const hanldeUserDelete = async (id) => {
    if (window.confirm('Are you sure you want to deactivate this user? This action cannot be undone.')) {
      try {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/users/${id}`, {}, config);
        toast.success(response.data.message || 'User deactivated successfully');
        fetchUsers();
      } catch (error) {
        toast.error(error.response?.data?.message || 'Error deactivating user');
      }
    }
  };
  
  return (
    <>
      <div className="generalAdminView__warning">
        Here you can change a user role to be a App admnn, <b>Be careful, this person will have the ability to do major changes in the plataform.</b>
      </div>
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
      <div className='generalAdmin_userList'>
        <button onClick={toggleExpanded}>
          {isExpanded ? 'Hide Users' : 'Show Users'}
        </button>
        {isExpanded && users.map((item, index) => {
          return (
            <ul key={index}>
              <li className='user__list'>
                Name: {item.name} {item.last_name} Role: {item.user_role}{<AiFillDelete className='generalAdminView__icon' onClick={() => hanldeUserDelete(item.user_id)} />}
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default GeneralAdminUserChange;