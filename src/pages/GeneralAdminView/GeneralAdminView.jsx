import Footer from '../../components/Footer/Footer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './GeneralAdminView.css';
import userDB from '../../assets/admins.json';
import restaurantDB from '../../assets/dat.json';
import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react';

const GeneralAdminView = () => {
  const usersData = userDB;
  const resDB = restaurantDB;
  const [errors, setErrors] = useState({});
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
  })

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
      createdAt: [new Date().getFullYear(), new Date().getDate(), new Date().getDate()+1].join('-'),
    }


    if (name.length < 2) {
      validationErrors.name = '* You must provide a name that is at least two characters long';
    }
    if (checkedValues.every((value)=> !value)) {
      validationErrors.categories = '* You must provide at least one category to the new restaurant';
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
  
  return (
    <>
      <HeaderComponent />
      <div className='generalAdminView__container'>
        <h1 className='generalAdminView__title'>Hi {usersData[3].name}!</h1>
        <article className='generalAdminView__flex'>
          <span>
            <h3>In this page you can remove or add restaurants</h3>
            <span className='generalAdminView__list'>There currently are #{restaurants.length} restaurant{restaurants.length > 1 ? 's' : ''}</span>
          </span>
          <form className='generalAdminView__form' onSubmit={handleNewRestaurantSumbit}>
          <span>Do you want to add any new restaurant?</span>
          <label htmlFor='newRestaurantTitle'>New restaurant name</label>
              <input 
                type='text' 
                name='name' 
                id='newRestaurantTitle' 
                placeholder='Write the new Restaurant name'
              />
            {errors.name && <p className='generalAdminView__error'>{errors.name}</p>}
            <label htmlFor='newRestaurantLocation'>New restaurant location</label>
            <select id='newRestaurantLocation' name='location'>
                <option value={'bogota'}>Bogotá</option>
                <option value={'medellin'}>Medellín</option>
                <option value={'cali'}>Calí</option>
                <option value={'cartagena'}>Cartagena</option>
                <option value={'bucaramanga'}>Bucaramanga</option>
              </select>
              <div>
                <label className='generalAdminView__checkboxTitle'>Choose the categories of the new restaurant</label>
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
              <button type='sumbit'>Create the new restaurant!</button>
          </form>
          <article className='generalAdminView__article'>
            <span>This is a list of all the restaurants</span>
            <p>If you want to delete something you can do it here</p>
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
//name, location, categories, 
export default GeneralAdminView;