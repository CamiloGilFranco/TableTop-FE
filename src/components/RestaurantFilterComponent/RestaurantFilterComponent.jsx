import './RestaurantFilterComponent.css'
import { useEffect } from 'react';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im'

const RestaurantFilterComponent = ({ categories, setCategories, rating, setRating, data }) =>{

  const [mobileFilter, setMobileFilter] = useState('');
  const [radioSelected, setRadioSelected] = useState('');
  const [checkBoxSelected, setCheckBoxSelected] = useState([]);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 765) {
        setMobileFilter('');
      }
    };    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCategoriesChange = (event) =>{
    if (event.target.checked) {
      setCheckBoxSelected([...checkBoxSelected, event.target.name]);
    } else {
      setCheckBoxSelected(checkBoxSelected.filter(value => value !== checkBoxSelected));
    }
    if (categories.some((element)=> element === event.target.name)) {
      setCategories(categories.filter((element) => element !== (event.target.name) ));
    } else {
      setCategories([...categories, event.target.name]);
    }
  }

  const handleRatingChange = (event) =>{
    setRating(parseInt(event.target.id));
    setRadioSelected(event.target.id)
  }
  const handleListClick = () => {
    mobileFilter === 'Filter__none'? setMobileFilter('') : setMobileFilter('Filter__none')
  }

  const handleClearCuisine = () => {
    setCategories([]);
    setCheckBoxSelected([]);
  }
  const handleClearReating = () => {
    setRating(0);
    setRadioSelected('');
  }
  
  return(
    <section className='restaurantFilter__container'>
      <section className='restaurantFilterMobile'>
        <section className='restaurantFilter__filter'>
          <p>Latest Filter</p>
          <BsFillFilterSquareFill onClick={handleListClick}/>
        </section>
      </section>
  
      <section className={`restaurantFilterDesktop ${mobileFilter}`} >
         <section className='restaurantFilter__filter'>
           <p>Latest Filter</p>
         </section>
          <article>
            <section className='restaurantFilter__filter'>
              <p>Cuisine</p>
              <p onClick={handleClearCuisine} className='restaurantFilter_clear'>clear filter</p>
            </section>
              <section className='popularFilter'>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='asian'
                    name='asian'
                    checked={checkBoxSelected.includes('asian')}
                    onChange={handleCategoriesChange}
                  />
                  Asian
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='fastfood'
                    name='fastfood'
                    checked={checkBoxSelected.includes('fastfood')}
                    onChange={handleCategoriesChange}
                  />
                  Fast Food
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='italian'
                    name='italian'
                    checked={checkBoxSelected.includes('italian')}
                    onChange={handleCategoriesChange}
                  />
                  Italian
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='mexican'
                    name='mexican'
                    checked={checkBoxSelected.includes('mexican')}
                    onChange={handleCategoriesChange}
                  />
                  Mexican
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='breakfast'
                    name='breakfast'
                    checked={checkBoxSelected.includes('breakfast')}
                    onChange={handleCategoriesChange}
                  />
                  Breakfast
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='tipical'
                    name='tipical'
                    checked={checkBoxSelected.includes('tipical')}
                    onChange={handleCategoriesChange}
                  />
                  Tipical
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='dessert'
                    name='dessert'
                    checked={checkBoxSelected.includes('dessert')}
                    onChange={handleCategoriesChange}
                  />
                  Dessert
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='vegetarian'
                    name='vegetarian'
                    checked={checkBoxSelected.includes('vegetarian')}
                    onChange={handleCategoriesChange}
                  />
                  Vegetarian
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='bar'
                    name='bar'
                    checked={checkBoxSelected.includes('bar')}
                    onChange={handleCategoriesChange}
                  />
                  Bar
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='coffee'
                    name='coffee'
                    checked={checkBoxSelected.includes('coffee')}
                    onChange={handleCategoriesChange}
                  />
                  Coffee
                </label>
              </section>
            </article>
            <article>
              <section className='restaurantFilter__filter'>
                <p>Star Category</p>
                <p onClick={handleClearReating} className='restaurantFilter_clear'>clear filter</p>
              </section>
              <section className='popularFilter'>
                <label for='5'>
                  <input 
                    type='radio'
                    className='filterCheckbox'
                    id='5'
                    name='rating'
                    checked={radioSelected === '5'}
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='radio'
                    className='filterCheckbox'
                    id='4'
                    name='rating'
                    checked={radioSelected === '4'}
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='radio'
                    className='filterCheckbox'
                    id='3'
                    name='rating'
                    checked={radioSelected === '3'}
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='radio'
                    className='filterCheckbox'
                    id='2'
                    name='rating'
                    checked={radioSelected === '2'}
                    onChange={handleRatingChange}
                  />
                  ⭐⭐
                </label>
              </section>
            </article>
            <div className='helpButton'>
              <ImInfo/>
              <b>Need help</b>
            </div>
            <h3>856-215-211</h3>
            <span> Monday to Friday 9:00 AM - 7:30 PM</span>
      </section>
    </section>
  )
}

export default RestaurantFilterComponent;