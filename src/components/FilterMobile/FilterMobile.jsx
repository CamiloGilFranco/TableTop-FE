import './FilterMobile.css';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im'



const FilterMobile = ({ mobileFilter }) =>{
  return(
      <section className={`filterMobile__container ${mobileFilter}`}>
        <input 
          type='text' 
          placeholder='Search Here' 
          className='restaurantFilter__SearchBar'
        >
        </input>
        <article>
          <section className='restaurantFilter__filter'>
            <p>Popular</p>
            <AiOutlineMinus className='restaurantFilter_icons'/>
          </section>
          <section className='popularFilter'>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Free Delivery
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Reached in 20 Mins
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Pure Veg
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
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
              <input type='checkbox'className='filterCheckbox'></input>
              Asian
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Seafood
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Italian
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Pizza
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Western
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Chinese
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
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
              <input type='checkbox'className='filterCheckbox'></input>
              ⭐⭐⭐⭐
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              ⭐⭐⭐⭐
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              ⭐⭐⭐
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
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
              <input type='checkbox'className='filterCheckbox'></input>
              Up to 20 Minutes
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Up to 30 Minutes
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
              Up to 40 Minutes
            </label>
            <label>
              <input type='checkbox'className='filterCheckbox'></input>
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
  )
}

export default FilterMobile;