import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { useState } from 'react';
import userDB from '../../assets/admins.json';
import restaurantDB from '../../assets/dat.json';
import Footer from '../../components/Footer/Footer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import './RestaurantAdminView.css';
import EditModal from '../../components/EditModal/EditModal';

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
  

  const language = useSelector(state=> state.languageReducer);
  const restaurantAdminTitle = () => {
    switch (language) {
      case 'en':
        return en.restaurantAdminTitle
      case 'es':
        return es.restaurantAdminTitle
      default:
        return en.restaurantAdminTitle
    }
  }
  const restaurantAdminSubtitle = () => {
    switch (language) {
      case 'en':
        return en.restaurantAdminSubtitle
      case 'es':
        return es.restaurantAdminSubtitle
      default:
        return en.restaurantAdminSubtitle
    }
  }
  const restaurantAdminResTitle = () => {
    switch (language) {
      case 'en':
        return en.restaurantAdminResTitle
      case 'es':
        return es.restaurantAdminResTitle
      default:
        return en.restaurantAdminResTitle
    }
  }
  const restaurantAdminResSales = () => {
    switch (language) {
      case 'en':
        return en.restaurantAdminResSales
      case 'es':
        return es.restaurantAdminResSales
      default:
        return en.restaurantAdminResSales
    }
  }
  const restaurantAdminResRating = () => {
    switch (language) {
      case 'en':
        return en.restaurantAdminResRating
      case 'es':
        return es.restaurantAdminResRating
      default:
        return en.restaurantAdminResRating
    }
  }
  const newDishFormTitle = () => {
    switch (language) {
      case 'en':
        return en.newDishFormTitle
      case 'es':
        return es.newDishFormTitle
      default:
        return en.newDishFormTitle
    }
  }
  const newDishFormName = () => {
    switch (language) {
      case 'en':
        return en.newDishFormName
      case 'es':
        return es.newDishFormName
      default:
        return en.newDishFormName
    }
  }
  const newDishFormNameError = () => {
    switch (language) {
      case 'en':
        return en.newDishFormNameError
      case 'es':
        return es.newDishFormNameError
      default:
        return en.newDishFormNameError
    }
  }
  const newDishFormDescription = () => {
    switch (language) {
      case 'en':
        return en.newDishFormDescription
      case 'es':
        return es.newDishFormDescription
      default:
        return en.newDishFormDescription
    }
  }

  const newDishFormDescriptionError = () => {
    switch (language) {
      case 'en':
        return en.newDishFormDescriptionError
      case 'es':
        return es.newDishFormDescriptionError
      default:
        return en.newDishFormDescriptionError
    }
  }
  const newDishFormPrice = () => {
    switch (language) {
      case 'en':
        return en.newDishFormPrice
      case 'es':
        return es.newDishFormPrice
      default:
        return en.newDishFormPrice
    }
  }
  const newDishFormPriceError = () => {
    switch (language) {
      case 'en':
        return en.newDishFormPriceError
      case 'es':
        return es.newDishFormPriceError
      default:
        return en.newDishFormPriceError
    }
  }
  const newDishFormPriceErrorTwo = () => {
    switch (language) {
      case 'en':
        return en.newDishFormPriceErrorTwo
      case 'es':
        return es.newDishFormPriceErrorTwo
      default:
        return en.newDishFormPriceErrorTwo
    }
  }
  const newDishFormCategory = () => {
    switch (language) {
      case 'en':
        return en.newDishFormCategory
      case 'es':
        return es.newDishFormCategory
      default:
        return en.newDishFormCategory
    }
  }
  const filterBreakfast = () => {
    switch (language) {
      case 'en':
        return en.filterBreakfast
      case 'es':
        return es.filterBreakfast
      default:
        return en.filterBreakfast
    }
  }
  const newDishFormCategoryLunch = () => {
    switch (language) {
      case 'en':
        return en.newDishFormCategoryLunch
      case 'es':
        return es.newDishFormCategoryLunch
      default:
        return en.newDishFormCategoryLunch
    }
  }
  const newDishFormCategoryDrinks = () => {
    switch (language) {
      case 'en':
        return en.newDishFormCategoryDrinks
      case 'es':
        return es.newDishFormCategoryDrinks
      default:
        return en.newDishFormCategoryDrinks
    }
  }
  const newDishFormButton = () => {
    switch (language) {
      case 'en':
        return en.newDishFormButton
      case 'es':
        return es.newDishFormButton
      default:
        return en.newDishFormButton
    }
  }
  const restaurantAdminMenuTitle = () => {
    switch (language) {
      case 'en':
        return en.restaurantAdminMenuTitle
      case 'es':
        return es.restaurantAdminMenuTitle
      default:
        return en.restaurantAdminMenuTitle
    }
  }
  const restaurantAdminMenuSubtitle = () => {
    switch (language) {
      case 'en':
        return en.restaurantAdminMenuSubtitle
      case 'es':
        return es.restaurantAdminMenuSubtitle
      default:
        return en.restaurantAdminMenuSubtitle
    }
  }
  const title = () => {
    switch (language) {
      case 'en':
        return en.title
      case 'es':
        return es.title
      default:
        return en.title
    }
  }
  const price = () => {
    switch (language) {
      case 'en':
        return en.price
      case 'es':
        return es.price
      default:
        return en.price
    }
  }

  // logic for the sumbit of the form 
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
      validationErrors.title = newDishFormNameError();
    }
    if (description.length < 2 || typeof description !== 'string') {
      validationErrors.description = newDishFormDescriptionError();
    }
    if (price.length === 0) {
      validationErrors.price = newDishFormPriceError();
    } else if (isNaN(price)) {
      validationErrors.price= '* The price must be a number';
    } else if (price <= 0){
      validationErrors.price = newDishFormPriceErrorTwo();
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

  const handleEditClick = (item, index, category) => {
    setEditingCategory(category)
    setEditIndex(index)
    setEditingItem(item);
    setModalVisible(true);
  }
  const handleCloseModal = () => {
    setEditingItem(null);
    setModalVisible(false);
  };  

  const handleReservationDelete = (index) => {
    setReservations(reservations.filter((item, i) => i !== index)) ;
  }
  return(
    <>
      <HeaderComponent/>
      <div className='restaurantAdminView__container'>
        <h1 className='restaurantAdminView__title'>{restaurantAdminTitle()} {usersData[0].name}</h1>
          <article className='restauranAdminView__flex'>
            <span>
              <h3>{restaurantAdminSubtitle()}</h3>
              <ul className='restaurantAdminView__list'>
                <li>{restaurantAdminResTitle()}: {restaurantExpample.restaurantName}</li>
                <li>{restaurantAdminResSales()}: {restaurantExpample.numberOfSales}</li>
                <li>{restaurantAdminResRating()}: {restaurantExpample.rating}</li>
              </ul>
              <h3>Here you can see the upcoming reservations:</h3>
              <p className='restaurantAdmin__view-p'>If you want to delete something you can do it here</p>
              <section>
                {reservations.map((item, index) => {
                  return (
                    <span key={index} className='restaurantAdminView__reservation'>
                      <p>Name: {item.name} - Time: {item.time} - Date: {item.date} for {item.numberOfComensals} people</p>
                      <AiFillDelete className='restaurantAdminView__icon' onClick={()=>handleReservationDelete(index)}/>
                    </span>                    
                  )
                })}
              </section>
            </span>
            <form onSubmit={handleNewDishSumbit} className='restaurantAdminView__form'>
              <span>{newDishFormTitle()}</span>
              <label htmlFor='newDishTitle'>{newDishFormName()}</label>
              <input 
                type='text' 
                name='title' 
                id='newDishTitle' 
                placeholder={newDishFormName()}
              />
              {errors.title && <p className='restaurantAdminView__error'>{errors.title}</p>}
              <label htmlFor='newDishDescription'>{newDishFormDescription()}</label>
              <input 
                type='text' 
                name='description' 
                id='newDishDescription' 
                placeholder={newDishFormDescription()}
              />
              {errors.description && <p className='restaurantAdminView__error'>{errors.description}</p>}
              <label htmlFor='newDishPrice'>{newDishFormPrice()}</label>
              <input 
                type='number' 
                name='price'  
                id='newDishPrice' 
                placeholder='Write the new Dish price'
              />
              {errors.price && <p className='restaurantAdminView__error'>{errors.price}</p>}
              <label htmlFor='newDishCategorie'>{newDishFormCategory()}</label>
              <select id='newDishCategorie' name='category'>
                <option value={'breakfast'}>{filterBreakfast()}</option>
                <option value={'lunch'}>{newDishFormCategoryLunch()}</option>
                <option value={'drinks'}>{newDishFormCategoryDrinks()}</option>
              </select>
              <button type='sumbit'>{newDishFormButton()}</button>
            </form>
            <article className='restaurantAdminView__article'>
              <span>{restaurantAdminMenuTitle()}</span>
              <p>{restaurantAdminMenuSubtitle()}</p>
              {Object.entries(menu).map(([category, item])=> (
                <div key={category}>
                  <p className='restauranAdminView__itemTitle'>{category}</p>
                  <ul className='restauranAdminView__itemList'>
                    {item.map((item, index)=> (
                      <li key={index} className='restaurantAdminView__details'>
                        {title()}: {item.title} - {price()}: {item.price}
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
                setModalVisible={setModalVisible} 
                editIndex={editIndex}
                menu={menu}
                setMenu={setMenu}
                category={editingCategory}
              /> )}
            </article>
          </article>
          <section className='userPAge__logOut'>
            <span>If you want to log out, click this button</span>
            <button className='userPage__form-button'>
              Log Out
            </button>
          </section>
      </div>
      <Footer/>
    </>
  )
}

export default RestaurantAdminView