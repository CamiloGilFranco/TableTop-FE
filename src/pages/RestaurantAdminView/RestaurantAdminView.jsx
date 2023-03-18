import Footer from '../../components/Footer/Footer';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './RestaurantAdminView.css';
import userDB from '../../assets/admins.json';
import restaurantDB from '../../assets/dat.json';
import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react';

const RestaurantAdminView = () => {
  const usersData = userDB;
  const resDB = restaurantDB;
  const restaurantExpample = resDB[0]
  const [menu, setMenu] = useState(restaurantExpample.menu);
  const [errors, setErrors] = useState({});



  const handleNewDishSumbit = (e) => {
    const validationErrors = {};
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = parseInt(form.price.value);
    const category = form.category.value;
    e.preventDefault();
    
    const newMenuEntry = {
      title,
      description,
      price,
      category
    }
    if (title.length < 2) {
      validationErrors.title = '* You must provide a title that is at least two characters long';
    }
    if (description.length < 2) {
      validationErrors.description = '* You must provide a description that is at least two characters long';
    }
    if (price.length === 0) {
      validationErrors.price = '* You must provide a price for this dish';
    } else if (isNaN(price)) {
      validationErrors.price= '* The price must be a number';
    } else if (price <= 0){
      validationErrors.price = '* The price must be above 0';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedMenu= {
      ...menu, 
      [category]: [...menu[category], newMenuEntry]
    }
    setMenu(updatedMenu);
    setErrors({});
    form.reset();
  }

  const handleDelete = (category, index) =>{
   const updatedMenu = {...menu};
   updatedMenu[category].splice(index, 1);
   setMenu(updatedMenu);
  }
  
  return(
    <>
      <HeaderComponent/>
      <div className='restaurantAdminView__container'>
        <h1 className='restaurantAdminView__title'>Hi {usersData[0].name}</h1>
        <section>
          <article className='restauranAdminView__flex'>
            <span>
              <h3>Here's how your restaurant has been doing</h3>
              <ul className='restauranAdminView__list'>
                <li>Restaurant name: {restaurantExpample.restaurantName}</li>
                <li>The total amount of sales is: {restaurantExpample.numberOfSales}</li>
                <li>This is the rating for this restaurant: {restaurantExpample.rating}</li>
              </ul>
            </span>
            <form onSubmit={handleNewDishSumbit} className='restaurantAdminView__form'>
              <span>Do you want to add anything to your menu?</span>
              <label htmlFor='newDishTitle'>New dish name</label>
              <input 
                type='text' 
                name='title' 
                id='newDishTitle' 
                placeholder='Write the new Dish title'
              />
              {errors.title && <p className='restaurantAdminView__error'>{errors.title}</p>}
              <label htmlFor='newDishDescription'>New dish description</label>
              <input 
                type='text' 
                name='description' 
                id='newDishDescription' 
                placeholder='Write the new Dish description'
              />
              {errors.description && <p className='restaurantAdminView__error'>{errors.description}</p>}
              <label htmlFor='newDishPrice'>New dish price</label>
              <input 
                type='number' 
                name='price'  
                id='newDishPrice' 
                placeholder='Write the new Dish price'
              />
              {errors.price && <p className='restaurantAdminView__error'>{errors.price}</p>}
              <label htmlFor='newDishCategorie'>New dish Categorie</label>
              <select id='newDishCategorie' name='category'>
                <option value={'breakfast'}>Breakfast</option>
                <option value={'lunch'}>Lunch</option>
                <option value={'drinks'}>Drinks</option>
              </select>
              <button type='sumbit'>Create the new dish!</button>
            </form>
            <article className='restaurantAdminView__article'>
              <span>This your menu</span>
              <p>If you want to delete something you can do it here</p>
              {Object.entries(menu).map(([category, item])=> (
                <div key={category}>
                  <p className='restauranAdminView__itemTitle'>{category}</p>
                  <ul className='restauranAdminView__itemList'>
                    {item.map((item, index)=> (
                      <li key={index} className='restaurantAdminView__details'>
                        Title: {item.title} - Price: {item.price}
                        <AiFillDelete className='restaurantAdminView__icon' onClick={()=> handleDelete(category, index)}/>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          </article>
        </section>
      </div>
      <Footer/>
    </>
  )
}

export default RestaurantAdminView