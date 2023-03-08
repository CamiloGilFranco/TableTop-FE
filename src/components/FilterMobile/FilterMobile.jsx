import './FilterMobile.css';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im'



const FilterMobile = ({ mobileFilter, handleCategoriesChange, isChecked, handleRatingChange }) =>{
  
  
  return(
      <section className={`filterMobile__container ${mobileFilter}`}>
        {/* <article>
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
  )
}

export default FilterMobile;