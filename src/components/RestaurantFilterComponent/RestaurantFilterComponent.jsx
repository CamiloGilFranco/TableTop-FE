import './RestaurantFilterComponent.css'
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import FilterMobile from '../FilterMobile/FilterMobile';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im'

const RestaurantFilterComponent =()=>{

  const [mobileFilter, setMobileFilter] = useState('mobileFilter__none');

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
      />
      <section className='restaurantFilterDesktop'>
        <input 
          type='text' 
          placeholder='Search Here' 
          className='restaurantFilter__SearchBar'
        />
         <section className='restaurantFilter__filter'>
           <p>Latest Filter</p>
           <BsFillFilterSquareFill className='restaurantFilter_icons'/>
         </section>
         <article>
           <section className='restaurantFilter__filter'>
             <p>Popular</p>
             <AiOutlineMinus className='restaurantFilter_icons'/>
           </section>
           <section className='popularFilter'>
             <label>
              <input type='checkbox'className='filterCheckbox'/>
               Free Delivery
             </label>
             <label>
               <input type='checkbox'className='filterCheckbox'/>
                 Reached in 20 Mins
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
          </article>
          <article>
            <section className='restaurantFilter__filter'>
              <p>Cuisine</p>
              <AiOutlineMinus className='restaurantFilter_icons'/>
            </section>
              <section className='popularFilter'>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Asian
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Seafood
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Italian
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Pizza
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Western
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Chinese
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
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
                  <input type='checkbox'className='filterCheckbox'/>
                  ⭐⭐⭐⭐⭐
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  ⭐⭐⭐⭐
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  ⭐⭐⭐
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  ⭐⭐
                </label>
              </section>
            </article>
            <article>
              <section className='restaurantFilter__filter'>
                <p>Cost for Two</p>
                <AiOutlineMinus className='restaurantFilter_icons'/>
              </section>
              <section className='popularFilter'>
                <label className='filterCheckbox'>
                  0
                  <input type='range' className='restaurantFilter__Slider' min={0} max={1500}/> 
                  1500
                </label>
              </section>
            </article>
            <article>
              <section className='restaurantFilter__filter'>
                <p>Delivery Time</p>
                <AiOutlineMinus className='restaurantFilter_icons'/>
              </section>
              <section className='popularFilter'>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Up to 20 Minutes
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Up to 30 Minutes
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Up to 40 Minutes
                </label>
                <label>
                  <input type='checkbox'className='filterCheckbox'/>
                  Up to 40 Minutes
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