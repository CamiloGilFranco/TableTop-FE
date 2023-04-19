import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import loadingGif from '../../assets/fotos/loading/loading-gif.gif';
import { useJwt } from "react-jwt";
import { ToastContainer, toast } from 'react-toastify';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import axios from 'axios';
import Cookies from 'universal-cookie';
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
} from '../../store/actions/user.action';
import NotFoundPageComponent from '../NotFoundPageComponent/NotFoundPageComponent';
import GeneralAdminUserChange from './GeneralAdminUserChange/GeneralAdminUserChange';
import NewRestaurantForm from './NewRestaurantForm/NewRestaurantForm';

const GeneralAdminView = () => {
  const user = useSelector(state => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const language = useSelector(state=> state.languageReducer);  
  const cookies = new Cookies();
  const resDB = restaurantDB;
  const [restaurants, setRestaurants] = useState(resDB);
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


  // does the logic for the deletion of a restaurant
  const handleDelete = (id) => {
    const updatedRestaurant = restaurants.filter((item)=> item.id !== id);
    setRestaurants(updatedRestaurant);
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
      <ToastContainer/>
      <div className='generalAdminView__container'>
        <h1 className='generalAdminView__title'>{languageSelector(language, 'restaurantAdminTitle')} {user.name} {user.last_name}!</h1>
        <article className='generalAdminView__flex'>
          <span>
            <h3>{languageSelector(language, 'generalAdminSubtitle')}</h3>
            <span className='generalAdmin__span'>
              PLACE HOLDER TEXT            
            </span>
            <GeneralAdminUserChange />
          </span>
          <NewRestaurantForm/>
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