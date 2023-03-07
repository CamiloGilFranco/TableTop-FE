import './RestaurantFilterComponent.css'
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import FilterMobile from '../FilterMobile/FilterMobile';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im'

const RestaurantFilterComponent = ({ categories, setCategories }) =>{

  const [mobileFilter, setMobileFilter] = useState('mobileFilter__none');


  const handleCategoriesClick = (event) =>{
    if (categories.some((element)=> element === event.target.name)) {

      setCategories(categories.filter((element) => element!==(event.target.name) ));

    } else {

      setCategories([...categories, event.target.name]);

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
                    onChange={handleCategoriesClick}
                  />
                  Asian
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='seafood'
                    name='seafood'
                    onChange={handleCategoriesClick}
                  />
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