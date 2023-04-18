import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import loadingGif from '../../assets/fotos/loading/loading-gif.gif';
import { useJwt } from "react-jwt";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import axios from 'axios';
import Cookies from 'universal-cookie';
import userDB from '../../assets/admins.json';
import restaurantDB from '../../assets/dat.json';
import Footer from '../../components/Footer/Footer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import GeneralAdminModal from '../../components/GeneralAdminModal/GeneralAdminModal';
import languageSelector from '../../assets/languages/languageSelector';
import './GeneralAdminView.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure
} from '../../store/actions/user.action';
import NotFoundPageComponent from '../NotFoundPageComponent/NotFoundPageComponent';

const GeneralAdminView = () => {
  const user = useSelector(state => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const language = useSelector(state=> state.languageReducer);  
  const cookies = new Cookies();
  const resDB = restaurantDB;
  const [errors, setErrors] = useState({});
  const [restaurants, setRestaurants] = useState(resDB);
  const [users, setUsers] = useState(userDB);
  const [checkboxValues, setCheckboxValues] = useState({
    asian: false,
    fastfood: false,
    italian: false,
    mexican: false,
    breakfast: false,
    tipical: false,
    dessert: false,
    vegetarian: false,
    bar: false,
    coffee: false,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;
  const jwtToken = cookies.get('token');
  const { isExpired } = useJwt(cookies.get("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };

  const categoriesArr = [
    {name: 'asian', label: 'asian'},
    {name: 'fastfood', label: 'fastfood'},
    {name: 'italian', label: 'italian'},
    {name: 'mexican', label: 'mexican'},
    {name: 'breakfast', label: 'breakfast'},
    {name: 'tipical', label: 'tipical'},
    {name: 'dessert', label: 'dessert'},
    {name: 'vegetarian', label: 'vegetarian'},
    {name: 'bar', label: 'bar'},
    {name: 'coffee', label: 'coffee'},
  ];

  useEffect(() => {
    const fetchUser = async () => {
      dispatch(fetchUserRequest());
      try {
        const response = await axios.get(`${apiUrl}/users/profile`, config);
        dispatch(fetchUserSuccess(response.data.data));
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
    fetchUser();
  }, [dispatch, apiUrl, jwtToken]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxValues((prevValues)=> ({
      ...prevValues,
      [name]: checked,
    }));
  };


  // logic for the sumbit of the form 
  const handleNewRestaurantSumbit = (e) => {
    const validationErrors = {};
    const form = e.target;
    const name = form.name.value;
    const location = form.location.value;
    e.preventDefault();
    
  
    const checkedValues = Object.values(checkboxValues);
    const categories = Object.entries(checkboxValues)
    .filter(([key, value]) => value)
    .map(([key, value]) => key);

    const newRestaurant = {
      id: restaurants.length + 1,
      restautantPathName: name.replaceAll(' ', '').toLowerCase(),
      restaurantName: name, 
      location,
      categories,
      createdAt: [new Date().getFullYear(), new Date().getDate(), new Date().getMonth()+1].join('-'),
    }

    if (name.length < 2) {
      validationErrors.name = languageSelector(language, 'newRestaurantFormNameError');
    }
    if (checkedValues.every((value)=> !value)) {
      validationErrors.categories = languageSelector(language, 'newRestaurantFormCategoriesError');
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setCheckboxValues({
      asian: false,
      fastfood: false,
      italian: false,
      mexican: false,
      breakfast: false,
      tipical: false,
      dessert: false,
      vegetarian: false,
      bar: false,
      coffee: false,
    })
    setRestaurants(((prevRestaurant)=> [...prevRestaurant, newRestaurant]));
    setErrors({});
    form.reset();
  }

  // does the logic for the deletion of a restaurant
  const handleDelete = (id) => {
    const updatedRestaurant = restaurants.filter((item)=> item.id !== id);
    setRestaurants(updatedRestaurant);
  }
  const newUserSumbit = (e) =>{
    const validationErrors = {};
    e.preventDefault();
    const form = e.target;
    const firstName = form.newUserFirstName.value;
    const lastName = form.newUserLastName.value;
    const email = form.newUserEmail.value;
    const role = form.newUserRole.value;

    const newUser = {
      id: users.length + 1,
      name : `${firstName} ${lastName}`,
      role,
      email
    }
    
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegEx.test(email)) {
      validationErrors.email = languageSelector(language, 'signInEmailError');
    }
    if (firstName.length < 2) {
      validationErrors.firstName = languageSelector(language, 'signInFirstNameError');
    }
    if (lastName.length < 2 ) {
      validationErrors.lastName = languageSelector(language, 'signInLastNameError');
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setUsers([...users, newUser])
    setErrors({});
    form.reset();
  }
  
  const hanldeUserDelete = (id) =>{
    setUsers(users.filter((item) => item.id !== id));
  }
  const handleEditClick = (value)=> {
    setModalVisible(true);
    setEditingItem(value);
  }

  const handleRestaurantUpdate = (updatedRestaurant)=> {
    setRestaurants((prevRestaurants)=> {
      return prevRestaurants.map((restaurant)=> {
        if (restaurant.id === updatedRestaurant.id) {
          return updatedRestaurant;
        } else {
          return restaurant;
        }
      });
    });
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };  
  

  if (!user || isExpired) {
    return <NotFoundPageComponent />;
  }
   
  if (loading) {
    return (
      <div>
        <img src={`${loadingGif}`} alt='loading'/>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      <HeaderComponent />
      <div className='generalAdminView__container'>
        <h1 className='generalAdminView__title'>{languageSelector(language, 'restaurantAdminTitle')} {user.name} {user.last_name}!</h1>
        <article className='generalAdminView__flex'>
          <span>
            <h3>{languageSelector(language, 'generalAdminSubtitle')}</h3>
            <span className='generalAdmin__span'>
              {languageSelector(language, 'generalAdminList')} #{restaurants.length} restaurant{restaurants.length? 's' : ''} {language === 'en' ? 'and': 'y'} #{users.length} {language === 'en'? 'users': 'usuarios'}
            </span>
            <h3>{languageSelector(language, 'generalAdminUserList')}</h3>
            <form className='generalAdminView__form' onSubmit={newUserSumbit}>
              <h3>{languageSelector(language, 'generalAdminAddUserTitle')}:</h3>
              <label htmlFor='newUserFirstName'>{languageSelector(language, 'signInFirstName')}</label>
              <input 
                type='text' 
                name='newUserFirstName' 
                id='newUserFirstName' 
                placeholder={languageSelector(language, 'signInFirstName')}
              />
              {errors.firstName && <p className='restaurantAdminView__error'>{errors.firstName}</p>}
              <label htmlFor='newUserLastName'>{languageSelector(language, 'signInLastName')}</label>
              <input 
                type='text' 
                name='newUserLastName' 
                id='newUserLastName' 
                placeholder={languageSelector(language, 'signInLastName')}
              />
              {errors.lastName && <p className='restaurantAdminView__error'>{errors.lastName}</p>}
              <label htmlFor='newUserEmail'>{languageSelector(language, 'signInEmail')}</label>
              <input 
                type='text' 
                name='newUserEmail' 
                id='newUserEmail' 
                placeholder={languageSelector(language, 'signInEmail')}
              />
              {errors.email && <p className='restaurantAdminView__error'>{errors.email}</p>}
              <label htmlFor='newUserRole'>{languageSelector(language, 'generalAdminAddUserRole')}</label>
              <select id='newUserRole' name='newUserRole'>
                <option value={'restaurantAdmin'}>{languageSelector(language, 'generalAdminAddUserResAdmin')}</option>
                <option value={'generalAdmin'}>{languageSelector(language, 'generalAdminAddUserGenAdmin')}</option>
                <option value={'regularUser'}>{languageSelector(language, 'generalAdminAddUserRegUser')}</option>
              </select>
              <button type='sumbit'>{languageSelector(language, 'generalAdminAddUserButton')}</button>
            </form>
              {users && users.map((item, index)=> {
                return(
                  <ul key={index}>
                    <li className='newUser__list'>#{item.id} {item.name} {<AiFillDelete className='generalAdminView__icon' onClick={()=>hanldeUserDelete(item.id)}/>}</li>
                  </ul>
                )
              })}
          </span>
          <form className='generalAdminView__form' onSubmit={handleNewRestaurantSumbit}>
          <span>{languageSelector(language, 'newRestaurantFormTitle')}</span>
          <label htmlFor='newRestaurantTitle'>{languageSelector(language, 'newRestaurantFormName')}</label>
              <input 
                type='text' 
                name='name' 
                id='newRestaurantTitle' 
                placeholder={languageSelector(language, 'newRestaurantFormName')}
              />
            {errors.name && <p className='generalAdminView__error'>{errors.name}</p>}
            <label htmlFor='newRestaurantLocation'>{languageSelector(language, 'newRestaurantFormLocation')}</label>
            <select id='newRestaurantLocation' name='location'>
                <option value={'bogota'}>Bogotá</option>
                <option value={'medellin'}>Medellín</option>
                <option value={'cali'}>Calí</option>
                <option value={'cartagena'}>Cartagena</option>
                <option value={'bucaramanga'}>Bucaramanga</option>
              </select>
              <div>
                <label className='generalAdminView__checkboxTitle'>{languageSelector(language, 'newRestaurantFormLocation')}</label>
                {categoriesArr && categoriesArr.map((checkbox)=> (
                  <div key={checkbox.name} className='generalAdminView__checkbox'>
                    <input
                      type='checkbox'
                      id={checkbox.name}
                      name={checkbox.name}
                      checked={checkboxValues[checkbox.name]}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor={checkbox.name}>{checkbox.name}</label>
                  </div>
                ))}
                {errors.categories && <p className='generalAdminView__error'>{errors.categories}</p>}
              </div>
              <button type='sumbit'>{languageSelector(language, 'newRestaurantFormButton')}</button>
          </form>
          <article className='generalAdminView__article'>
            <span>{languageSelector(language, 'generalAdminFullList')}</span>
            <p>{languageSelector(language, 'generalAdminDelete')}</p>
            <ul>
              {Object.entries(restaurants).map(([key, value])=> (
                <li key={key} className='generalAdminView__details'>
                  {value.restaurantName} - {value.location}
                  <AiFillEdit className='generalAdminView__icon restaurantAdminView__edit' onClick={()=>handleEditClick(value)}/>
                  <AiFillDelete className='generalAdminView__icon' onClick={()=> handleDelete(parseInt(key)+1)}/>
                </li>
              ))}
            </ul>
            {modalVisible && (<GeneralAdminModal 
                onClose={handleCloseModal} 
                setModalVisible={setModalVisible}
                editingItem={editingItem}
                checkboxValues={checkboxValues}
                handleRestaurantUpdate={handleRestaurantUpdate}
              /> )}
          </article>
        </article>
        <section className='userPAge__logOut'>
            <span>{languageSelector(language, 'logOutText')}</span>
            <button className='userPage__form-button'>
              {languageSelector(language, 'logOutButton')}
            </button>
          </section>
      </div>
      <Footer/>    
    </>
  )
}
export default GeneralAdminView;