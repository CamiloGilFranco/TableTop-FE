import './RestaurantFilterComponent.css'
import { useEffect } from 'react';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im'

const RestaurantFilterComponent = ({ categories, setCategories, rating, setRating }) =>{

  const [mobileFilter, setMobileFilter] = useState('');

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
    if (categories.some((element)=> element === event.target.name)) {
      setCategories(categories.filter((element) => element !== (event.target.name) ));
    } else {
      setCategories([...categories, event.target.name]);
    }
  }

  const handleRatingChange = (event) =>{
    if (rating.some((element)=> element === parseInt(event.target.id))) {
      setRating(rating.filter((element) => element !== parseInt(event.target.id) ));
    } else {
      setRating([...rating, parseInt(event.target.name)]);
    }
  }

  const handleListClick = () => {
    mobileFilter === 'Filter__none'? setMobileFilter('') : setMobileFilter('Filter__none')
  }

  return(
    <section className='restaurantFilter__container'>
      <section className='restaurantFilterMobile'>
        <select className='restaurantFilter__dropdown'>
          <option disabled>Filter</option>
          <option>All</option>
          <option>Popular</option>
          <option>Latest</option>
          <option>Trend</option>
        </select>
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
              <AiOutlineMinus className='restaurantFilter_icons'/>
            </section>
              <section className='popularFilter'>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='asian'
                    name='asian'
                    onChange={handleCategoriesChange}
                  />
                  Asian
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='seafood'
                    name='seafood'
                    onChange={handleCategoriesChange}
                  />
                  Seafood
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='italian'
                    name='italian'
                    onChange={handleCategoriesChange}
                  />
                  Italian
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='pizza'
                    name='pizza'
                    onChange={handleCategoriesChange}
                  />
                  Pizza
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='western'
                    name='western'
                    onChange={handleCategoriesChange}
                  />
                  Western
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='chinise'
                    name='chinese'
                    onChange={handleCategoriesChange}
                  />
                  Chinese
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='dessert'
                    name='dessert'
                    onChange={handleCategoriesChange}
                  />
                  Dessert
                </label>
              </section>
            </article>
            <article>
              <section className='restaurantFilter__filter'>
                <p>Star Category</p>
                <AiOutlineMinus className='restaurantFilter_icons'/>
              </section>
              <section className='popularFilter'>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='5'
                    name='5'
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='4'
                    name='4'
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='3'
                    name='3'
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='2'
                    name='2'
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