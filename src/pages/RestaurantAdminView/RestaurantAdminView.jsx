import { useSelector } from 'react-redux';
import { useState } from 'react';
import userDB from '../../assets/admins.json';
import restaurantDB from '../../assets/dat.json';
import Footer from '../../components/Footer/Footer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import './RestaurantAdminView.css';
import EditModal from '../../components/EditModal/EditModal';
import EditDetailsModal from '../../components/EditDetailsModal/EditDetailsModal';
import languageSelector from '../../assets/languages/languageSelector';

const RestaurantAdminView = () => {
  const usersData = userDB;
  const resDB = restaurantDB;
  const restaurantExpample = resDB[0]
  const [menu, setMenu] = useState(restaurantExpample.menu);
  const [errors, setErrors] = useState({});
  let mockReservations = [
    {name: 'name 1', time: '7:30 PM', date: '05-03-2023', numberOfComensals: 5},
    {name: 'name 2', time: '7:30 PM', date: '06-03-2023', numberOfComensals: 5},
    {name: 'name 3', time: '7:30 PM', date: '07-03-2023', numberOfComensals: 5},
    {name: 'name 4', time: '7:30 PM', date: '08-03-2023', numberOfComensals: 5},
    {name: 'name 5', time: '7:30 PM', date: '09-03-2023', numberOfComensals: 5}
  ];

  const [reservations, setReservations] = useState(mockReservations);
  const [editingItem, setEditingItem] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [address, setAddress] = useState(restaurantExpample.address);
  const [phoneNumber, setPhoneNumber] = useState(restaurantExpample.phoneNumber);
  const [detailsModal, setDetailsModal] = useState(false);
  

  const language = useSelector(state=> state.languageReducer);
 
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
    setModalVisible(true);
  }

  //call back function that closes the modal
  const handleCloseModal = () => {
    setEditingItem(null);
    setModalVisible(false);
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

  // eliminates one element of the reservations
  const handleReservationDelete = (index) => {
    setReservations(reservations.filter((item, i) => i !== index)) ;
  }
  return(
    <>
      <HeaderComponent/>
      <div className='restaurantAdminView__container'>
        <h1 className='restaurantAdminView__title'>{languageSelector(language, 'restaurantAdminTitle')} {usersData[0].name}!</h1>
          <article className='restauranAdminView__flex'>
            <span>
              <h3>{languageSelector(language, 'restaurantAdminSubtitle')}</h3>
              <ul className='restaurantAdminView__list'>
                <li>{languageSelector(language, 'restaurantAdminResTitle')}: {restaurantExpample.restaurantName}</li>
                <li>{languageSelector(language, 'restaurantAdminResSales')}: {restaurantExpample.numberOfSales}</li>
                <li>{languageSelector(language, 'restaurantAdminResRating')}: {restaurantExpample.rating}</li>
              </ul>
              <h3>{languageSelector(language, 'restaurantEditDetails')}</h3>
              <span>{languageSelector(language, 'restaurantEditAddress')}</span>
              <ul>
                {address.map((address, index)=>{
                  return(
                  <li key={index}>
                    {address}
                    <AiFillEdit className='restaurantAdminView__icon restaurantAdminView__edit' onClick={(e)=>handleDetailsClick(address, index)}/>
                    <AiFillDelete className='restaurantAdminView__icon'onClick={()=>handleDetailsDelete(restaurantExpample.address , index)}/>
                  </li>
                  )
                })}
              </ul>
              <span>{languageSelector(language, 'restaurantEditPhoneNumber')}</span>
              <ul>
                {phoneNumber.map(((phoneNumber, index)=> {
                  return(
                  <li key={index}>
                    {phoneNumber}
                    <AiFillEdit className='restaurantAdminView__icon restaurantAdminView__edit' onClick={(e)=>handleDetailsClick(phoneNumber, index)}/>
                    <AiFillDelete className='restaurantAdminView__icon'onClick={()=>handleDetailsDelete(restaurantExpample.phoneNumber, index)}/>
                  </li>
                  )
                }))}
              </ul>
              {detailsModal && (<EditDetailsModal 
                item={editingItem} 
                onClose={handleDetailsClose}
                handleDetailsUpdate={handleDetailsUpdate}
                address={address}
                phoneNumber={phoneNumber}
                index={editIndex}
              />
              )}
              <h3>{languageSelector(language, 'restaurantReservationsTitle')}:</h3>
              <p className='restaurantAdmin__view-p'>{languageSelector(language, 'restaurantReservationsEdit')}</p>
              <section>
                {reservations.map((item, index) => {
                  return (
                    <span key={index} className='restaurantAdminView__reservation'>
                      <p>{languageSelector(language, 'signInFirstName')}: {item.name} - {languageSelector(language, 'restaurantReservationsTime')}: {item.time} - {languageSelector(language, 'restaurantReservationsDate')}: {item.date} {language === 'en'? 'for' : 'para'} {item.numberOfComensals} {language === 'en'? 'people' : 'personas'}</p>
                      <AiFillDelete className='restaurantAdminView__icon' onClick={()=>handleReservationDelete(index)}/>
                    </span>                    
                  )
                })}
              </section>
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
              {modalVisible && (<EditModal 
                item={editingItem} 
                onClose={handleCloseModal} 
                handleUpdate={handleUpdate}
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

export default RestaurantAdminView