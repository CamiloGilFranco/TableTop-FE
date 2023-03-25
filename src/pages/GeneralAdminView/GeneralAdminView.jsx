import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { useState } from 'react';
import userDB from '../../assets/admins.json';
import restaurantDB from '../../assets/dat.json';
import Footer from '../../components/Footer/Footer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { AiFillDelete } from 'react-icons/ai'
import './GeneralAdminView.css';

const GeneralAdminView = () => {
  const usersData = userDB;
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
  })

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
  const generalAdminSubtitle = () => {
    switch (language) {
      case 'en':
        return en.generalAdminSubtitle
      case 'es':
        return es.generalAdminSubtitle
      default:
        return en.generalAdminSubtitle
    }
  }
  const generalAdminList = () => {
    switch (language) {
      case 'en':
        return en.generalAdminList
      case 'es':
        return es.generalAdminList
      default:
        return en.generalAdminList
    }
  }

  const newRestaurantFormTitle = () => {
    switch (language) {
      case 'en':
        return en.newRestaurantFormTitle
      case 'es':
        return es.newRestaurantFormTitle
      default:
        return en.newRestaurantFormTitle
    }
  }
  const newRestaurantFormName = () => {
    switch (language) {
      case 'en':
        return en.newRestaurantFormName
      case 'es':
        return es.newRestaurantFormName
      default:
        return en.newRestaurantFormName
    }
  }

  const newRestaurantFormNameError = () => {
    switch (language) {
      case 'en':
        return en.newRestaurantFormNameError
      case 'es':
        return es.newRestaurantFormNameError
      default:
        return en.newRestaurantFormNameError
    }
  }
  const newRestaurantFormLocation = () => {
    switch (language) {
      case 'en':
        return en.newRestaurantFormLocation
      case 'es':
        return es.newRestaurantFormLocation
      default:
        return en.newRestaurantFormLocation
    }
  }
  const newRestaurantFormCategories = () => {
    switch (language) {
      case 'en':
        return en.newRestaurantFormCategories
      case 'es':
        return es.newRestaurantFormCategories
      default:
        return en.newRestaurantFormCategories
    }
  }
  const newRestaurantFormCategoriesError = () => {
    switch (language) {
      case 'en':
        return en.newRestaurantFormCategoriesError
      case 'es':
        return es.newRestaurantFormCategoriesError
      default:
        return en.newRestaurantFormCategoriesError
    }
  }
  const newRestaurantFormButton = () => {
    switch (language) {
      case 'en':
        return en.newRestaurantFormButton
      case 'es':
        return es.newRestaurantFormButton
      default:
        return en.newRestaurantFormButton
    }
  }
  const generalAdminFullList = () => {
    switch (language) {
      case 'en':
        return en.generalAdminFullList
      case 'es':
        return es.generalAdminFullList
      default:
        return en.generalAdminFullList
    }
  }
  const generalAdminDelete = () => {
    switch (language) {
      case 'en':
        return en.generalAdminDelete
      case 'es':
        return es.generalAdminDelete
      default:
        return en.generalAdminDelete
    }
  }
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
    const newRestaurant = {
      id: restaurants.length + 1,
      restautantPathName: name.replaceAll(' ', '').toLowerCase(),
      restaurantName: name, 
      location, 
      createdAt: [new Date().getFullYear(), new Date().getDate(), new Date().getMonth()+1].join('-'),
    }


    if (name.length < 2) {
      validationErrors.name = newRestaurantFormNameError();
    }
    if (checkedValues.every((value)=> !value)) {
      validationErrors.categories = newRestaurantFormCategoriesError();
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
      validationErrors.email = '* Email Error';
    }
    if (firstName.length < 2) {
      validationErrors.firstName = newRestaurantFormNameError();
    }
    if (lastName.length < 2 ) {
      validationErrors.lastName = newRestaurantFormNameError();
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
  
  return (
    <>
      <HeaderComponent />
      <div className='generalAdminView__container'>
        <h1 className='generalAdminView__title'>{restaurantAdminTitle()} {usersData[3].name}!</h1>
        <article className='generalAdminView__flex'>
          <span>
            <h3>{generalAdminSubtitle()}</h3>
            <span>{generalAdminList()} #{restaurants.length} restaurant{restaurants.length > 1 ? 's' : ''} and #{users.length} users</span>
            <h3>Here you can see all the users</h3>
            <form className='generalAdminView__form' onSubmit={newUserSumbit}>
              <h3>Here you can add a new user:</h3>
              <label htmlFor='newUserFirstName'>First Name</label>
              <input 
                type='text' 
                name='newUserFirstName' 
                id='newUserFirstName' 
                placeholder='New user first name'
              />
              {errors.firstName && <p className='restaurantAdminView__error'>{errors.firstName}</p>}
              <label htmlFor='newUserLastName'>Last Name</label>
              <input 
                type='text' 
                name='newUserLastName' 
                id='newUserLastName' 
                placeholder='New user last name'
              />
              {errors.lastName && <p className='restaurantAdminView__error'>{errors.lastName}</p>}
              <label htmlFor='newUserEmail'>Email</label>
              <input 
                type='text' 
                name='newUserEmail' 
                id='newUserEmail' 
                placeholder='New user email'
              />
              {errors.email && <p className='restaurantAdminView__error'>{errors.email}</p>}
              <label htmlFor='newUserRole'>What kind of user will this be?</label>
              <select id='newUserRole' name='newUserRole'>
                <option value={'restaurantAdmin'}>Restaurant Admin</option>
                <option value={'generalAdmin'}>General Admin</option>
                <option value={'regularUser'}>Regular User</option>
              </select>
              <button type='sumbit'>Create the new User!</button>
            </form>
              {users.map((item, index)=> {
                return(
                  <ul key={index}>
                    <li className='newUser__list'>#{item.id} {item.name} {<AiFillDelete className='generalAdminView__icon' onClick={()=>hanldeUserDelete(item.id)}/>}</li>
                  </ul>
                )
              })}
          </span>
          <form className='generalAdminView__form' onSubmit={handleNewRestaurantSumbit}>
          <span>{newRestaurantFormTitle()}</span>
          <label htmlFor='newRestaurantTitle'>{newRestaurantFormName()}</label>
              <input 
                type='text' 
                name='name' 
                id='newRestaurantTitle' 
                placeholder={newRestaurantFormName()}
              />
            {errors.name && <p className='generalAdminView__error'>{errors.name}</p>}
            <label htmlFor='newRestaurantLocation'>{newRestaurantFormLocation()}</label>
            <select id='newRestaurantLocation' name='location'>
                <option value={'bogota'}>Bogotá</option>
                <option value={'medellin'}>Medellín</option>
                <option value={'cali'}>Calí</option>
                <option value={'cartagena'}>Cartagena</option>
                <option value={'bucaramanga'}>Bucaramanga</option>
              </select>
              <div>
                <label className='generalAdminView__checkboxTitle'>{newRestaurantFormLocation()}</label>
                {categoriesArr.map((checkbox)=> (
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
              <button type='sumbit'>{newRestaurantFormButton()}</button>
          </form>
          <article className='generalAdminView__article'>
            <span>{generalAdminFullList()}</span>
            <p>{generalAdminDelete()}</p>
            <ul>
              {Object.entries(restaurants).map(([key, value])=> (
                <li key={key} className='generalAdminView__details'>
                  {value.restaurantName} - {value.location}
                  <AiFillDelete className='generalAdminView__icon' onClick={()=> handleDelete(parseInt(key)+1)}/>
                </li>
              ))}
            </ul>
          </article>
        </article>
      </div>
      <Footer/>    
    </>
  )
}
export default GeneralAdminView;