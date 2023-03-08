import './RestaurantFilterComponent.css'
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import FilterMobile from '../FilterMobile/FilterMobile';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im'

const RestaurantFilterComponent = ({ categories, setCategories, isChecked, setIsChecked, rating, setRating }) =>{

  const [mobileFilter, setMobileFilter] = useState('mobileFilter__none');


  const handleCategoriesChange = (event) =>{
    if (categories.some((element)=> element === event.target.name)) {
      setCategories(categories.filter((element) => element!==(event.target.name) ));
      setIsChecked(event.target.checked);
    } else {
      setCategories([...categories, event.target.name]);
      setIsChecked(event.target.checked);
    }
  }

  const handleRatingChange = (event) =>{
    if (rating.some((element)=> element === parseInt(event.target.id))) {
      setRating(rating.filter((element) => element!==(event.target.name) ));
      setIsChecked(event.target.checked);
    } else {
      setRating([...rating, parseInt(event.target.name)]);
      setIsChecked(event.target.checked);
    }
  }

  const handleListClick = () => {
    mobileFilter=== 'mobileFilter__none'? setMobileFilter('') : setMobileFilter('mobileFilter__none')
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
      <FilterMobile 
        setMobileFilter={setMobileFilter}
        mobileFilter={mobileFilter}
        categories={categories}
        setCategories={setCategories}
        handleCategoriesChange={handleCategoriesChange}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        rating={rating}
        handleRatingChange={handleRatingChange}
      />
      <section className='restaurantFilterDesktop'>
         <section className='restaurantFilter__filter'>
           <p>Latest Filter</p>
           <BsFillFilterSquareFill className='restaurantFilter_icons'/>
         </section>
         {/* <article>
           <section className='restaurantFilter__filter'>
             <p>Popular searches</p>
             <AiOutlineMinus className='restaurantFilter_icons'/>
           </section>
           <section className='popularFilter'>
             <label>
              <input 
                type='checkbox'
                className='filterCheckbox'
                id=''
              />
               Free Delivery
             </label>
             <label>
               <input type='checkbox'className='filterCheckbox'/>
                 Pure Veg
               </label>
             <label>
               <input type='checkbox'className='filterCheckbox'/>
                 Non Veg
              </label>
            </section>
          </article> */}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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
                    checked={isChecked}
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