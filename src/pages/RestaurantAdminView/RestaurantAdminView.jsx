import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import loadingGif from '../../assets/fotos/loading/loading-gif.gif';
import { useJwt } from "react-jwt";
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from '../../store/actions/user.action';
import NotFoundPageComponent from '../NotFoundPageComponent/NotFoundPageComponent';
import { API_URL } from '../../constants/apiUrl';
import restaurantDB from '../../assets/dat.json';
import Footer from '../../components/Footer/Footer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import './RestaurantAdminView.css';
import languageSelector from '../../assets/languages/languageSelector';
import RestaurantDetails from './RestaurantDetails/RestaurantDetails';

const RestaurantAdminView = () => {
  const user = useSelector(state => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  const language = useSelector(state=> state.languageReducer);
  const [restaurant, setRestaurant] = useState({});
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const jwtToken = cookies.get('token');
  const { isExpired } = useJwt(cookies.get("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  };
  
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchUserRequest());
      try {
        const userResponse = await axios.get(`${API_URL}/users/profile`, config);
        dispatch(fetchUserSuccess(userResponse.data.data));
  
        const userId = userResponse.data.data.user_id;
        const restaurantResponse = await axios.get(`${API_URL}/restaurants/byuser/${userId}`, config);
        setRestaurant(restaurantResponse.data.data);
      } catch (error) {
        dispatch(fetchUserFailure(error));
      }
    };
    fetchData();
  }, [dispatch, jwtToken]);
  
  const resDB = restaurantDB;
  const restaurantExpample = resDB[0]
  const [menu, setMenu] = useState(restaurantExpample.menu);
  const [errors, setErrors] = useState({});

  const [editingItem, setEditingItem] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [address, setAddress] = useState(restaurantExpample.address);
  const [phoneNumber, setPhoneNumber] = useState(restaurantExpample.phoneNumber);
  const [detailsModal, setDetailsModal] = useState(false);

  // logic for the sumbit of the new dish form
  const handleNewDishSumbit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = parseInt(form.price.value);
    const category = form.category.value;
    
    const newMenuEntry = {
      title,
      description,
      price,
      category
    }
    if (title.length < 2 || typeof title !== 'string') {
      validationErrors.title = languageSelector(language, 'newDishFormNameError');
    }
    if (description.length < 2 || typeof description !== 'string') {
      validationErrors.description = languageSelector(language, 'newDishFormDescriptionError');
    }
    if (price.length === 0) {
      validationErrors.price = languageSelector(language, 'newDishFormPriceError');
    } else if (isNaN(price)) {
      validationErrors.price= '* The price must be a number';
    } else if (price <= 0){
      validationErrors.price = languageSelector(language, 'newDishFormPriceErrorTwo');
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedMenu = {
      ...menu, 
      [category]: [...menu[category], newMenuEntry]
    }
    setMenu(updatedMenu);
    setErrors({});
    form.reset();
  }

  // handles the logic for the delete of a dish
  const handleDelete = (category, index) =>{
   const updatedMenu = {...menu};
   updatedMenu[category].splice(index, 1);
   setMenu(updatedMenu);
  }

  // showw the modal of the edit dish
  const handleEditClick = (item, index, category) => {
    setEditingCategory(category)
    setEditIndex(index)
    setEditingItem(item);

  }

  //call back function that closes the modal
  const handleCloseModal = () => {
    setEditingItem(null);
  };  

  // updates the dish with the information from the modal
  const handleUpdate = (title, price, description) => {
    const updatedEntry = { ...editingItem, title, price, description };
    const updatedMenu = { ...menu };
    updatedMenu[editingCategory] = updatedMenu[editingCategory].map((item, i) => i === editIndex ? updatedEntry : item);
    setMenu(updatedMenu);
  }

  // eliminates value from the phonNumber or address array
  const handleDetailsDelete = (arr, index) =>{
    const updatedArr = arr.filter((item, i)=> i !== index);
    if (arr=== restaurantExpample.address) {
      setAddress(updatedArr);
    } else if (arr === restaurantExpample.phoneNumber) {
      setPhoneNumber(updatedArr);
    }
  }

  // renders the modal to edit addresses or phone number

  const handleDetailsClick = (item, index) => {
    setEditingItem(item);
    setEditIndex(index);
    setDetailsModal(true);
  }

  // updates the value from address or phone number with the value incoming from the modal
  const handleDetailsUpdate = (arr, index, value) => {
    if (arr === phoneNumber) {
      const newPhoneNumber = [...phoneNumber];
      newPhoneNumber[index] = value;
      setPhoneNumber(newPhoneNumber);
    } else if (arr === address) {
      const newAddress = [...address];
      newAddress[index] = value;
      setAddress(newAddress);
    }
  };

  // closes the edit modal
  const handleDetailsClose = () => {
    setDetailsModal(false);
    setEditingItem(null)
  }

  console.log(restaurant);

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

  return(
    <>
      <HeaderComponent/>
      <ToastContainer />
      <div className='restaurantAdminView__container'>
        <h1 className='restaurantAdminView__title'>{languageSelector(language, 'restaurantAdminTitle')} {user.name} {user.last_name}!</h1>
          <article className='restauranAdminView__flex'>
            <span>
              <h3>{languageSelector(language, 'restaurantAdminSubtitle')}</h3>
              <ul className='restaurantAdminView__list'>
                <li>{languageSelector(language, 'restaurantAdminResTitle')}: {restaurant.restaurant_name}</li>
                <li>{languageSelector(language, 'restaurantAdminResSales')}: {restaurant.number_of_sales}</li>
                <li>{languageSelector(language, 'restaurantAdminResRating')}: {restaurant.rating}</li>
              </ul>
              <RestaurantDetails
                  language={language}
                  languageSelector={languageSelector}
                  handleDetailsClick={handleDetailsClick}
                  handleDetailsDelete={handleDetailsDelete}
                  handleDetailsClose={handleDetailsClose}
                  handleDetailsUpdate={handleDetailsUpdate}
                  editIndex={editIndex}
                  detailsModal={detailsModal}
                  editingItem={editingItem}
                  restaurant={restaurant}
              />
            </span>
            <form onSubmit={handleNewDishSumbit} className='restaurantAdminView__form'>
              <span>{languageSelector(language, 'newDishFormTitle')}</span>
              <label htmlFor='newDishTitle'>{languageSelector(language, 'newDishFormName')}</label>
              <input 
                type='text' 
                name='title' 
                id='newDishTitle' 
                placeholder={languageSelector(language, 'newDishFormName')}
              />
              {errors.title && <p className='restaurantAdminView__error'>{errors.title}</p>}
              <label htmlFor='newDishDescription'>{languageSelector(language, 'newDishFormDescription')}</label>
              <input 
                type='text' 
                name='description' 
                id='newDishDescription' 
                placeholder={languageSelector(language, 'newDishFormDescription')}
              />
              {errors.description && <p className='restaurantAdminView__error'>{errors.description}</p>}
              <label htmlFor='newDishPrice'>{languageSelector(language, 'newDishFormPrice')}</label>
              <input 
                type='number' 
                name='price'  
                id='newDishPrice' 
                placeholder={languageSelector(language, 'newDishFormPrice')}
              />
              {errors.price && <p className='restaurantAdminView__error'>{errors.price}</p>}
              <label htmlFor='newDishCategorie'>{languageSelector(language, 'newDishFormCategory')}</label>
              <select id='newDishCategorie' name='category'>
                <option value={'breakfast'}>{languageSelector(language, 'filterBreakfast')}</option>
                <option value={'lunch'}>{languageSelector(language, 'newDishFormCategoryLunch')}</option>
                <option value={'drinks'}>{languageSelector(language, 'newDishFormCategoryDrinks')}</option>
              </select>
              <button type='sumbit'>{languageSelector(language, 'newDishFormButton')}</button>
            </form>
            <article className='restaurantAdminView__article'>
              <span>{languageSelector(language, 'restaurantAdminMenuTitle')}</span>
              <p>{languageSelector(language, 'restaurantAdminMenuSubtitle')}</p>
              {Object.entries(menu).map(([category, item])=> (
                <div key={category}>
                  <p className='restauranAdminView__itemTitle'>{category}</p>
                  <ul className='restauranAdminView__itemList'>
                    {item.map((item, index)=> (
                      <li key={index} className='restaurantAdminView__details'>
                        {languageSelector(language, 'title')}: {item.title} - {languageSelector(language, 'price')}: {item.price}
                        <AiFillEdit className='restaurantAdminView__icon restaurantAdminView__edit' onClick={()=>handleEditClick(item, index, category)}/>
                        <AiFillDelete className='restaurantAdminView__icon' onClick={()=> handleDelete(category, index)}/>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          </article>
      </div>
      <Footer/>
    </>
  )
}

export default RestaurantAdminView