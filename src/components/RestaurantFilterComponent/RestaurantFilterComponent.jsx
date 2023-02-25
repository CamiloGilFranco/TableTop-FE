import './RestaurantFilterComponent.css'
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { ImInfo } from 'react-icons/im'

const RestaurantOrderComponent =()=>{
    return(
        <section className='restaurantFilter__container'>
            <section className='mobile'>
                <select className='restaurantFilter__dropdown'>
                    <option value={''} disabled selected>Filter</option>
                    <option>All</option>
                    <option>Popular</option>
                    <option>Latest</option>
                    <option>Trend</option>
                </select>
                <section className='restaurantFilter__filter'>
                    <p>Latest Filter</p>
                    <BsFillFilterSquareFill />
                </section>
            </section>
            <section className='desktop'>
                <input 
                    type='text' 
                    placeholder='Search Here' 
                    className='searchBar'
                >
                </input>
                <section className='restaurantFilter__filter'>
                    <p>Latest Filter</p>
                    <BsFillFilterSquareFill className='icons'/>
                </section>
                <article>
                    <section className='restaurantFilter__filter'>
                        <p>Popular</p>
                        <AiOutlineMinus className='icons'/>
                    </section>
                    <section className='popularFilter'>
                        <label>
                            <input type='checkbox'></input>
                            Free Delivery
                        </label>
                        <label>
                            <input type='checkbox'></input>
                            Reached in 20 Mins
                        </label>
                        <label>
                            <input type='checkbox'></input>
                            Pure Veg
                        </label>
                        <label>
                            <input type='checkbox'></input>
                            Non Veg
                        </label>
                    </section>
                </article>
                <article>
                    <section className='restaurantFilter__filter'>
                        <p>Cuisine</p>
                        <AiOutlineMinus className='icons'/>
                    </section>
                    <section className='popularFilter'>
                        <label className='label'>
                            <input type='checkbox'></input>
                            Asian
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            Seafood
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            Italian
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            Pizza
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            Western
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            Chinese
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            Dessert
                        </label>
                    </section>
                </article>
                <article>
                    <section className='restaurantFilter__filter'>
                        <p>Star Category</p>
                        <AiOutlineMinus className='icons'/>
                    </section>
                    <section className='popularFilter'>
                        <label className='label'>
                            <input type='checkbox'></input>
                            ⭐⭐⭐⭐⭐
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            ⭐⭐⭐⭐
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            ⭐⭐⭐
                        </label>
                        <label className='label'>
                            <input type='checkbox'></input>
                            ⭐⭐
                        </label>
                    </section>
                </article>
                <article>
                    <section className='restaurantFilter__filter'>
                        <p>Cost for Two</p>
                        <AiOutlineMinus className='icons'/>
                    </section>
                    <section className='popularFilter'>
                       <input type='range'/> 
                    </section>
                </article>
                <article>
                    <section className='restaurantFilter__filter'>
                        <p>Delivery Time</p>
                        <AiOutlineMinus className='icons'/>
                    </section>
                    <section className='popularFilter'>
                        <label>
                            <input type='checkbox'></input>
                            Up to 20 Minutes
                        </label>
                        <label>
                            <input type='checkbox'></input>
                            Up to 30 Minutes
                        </label>
                        <label>
                            <input type='checkbox'></input>
                            Up to 40 Minutes
                        </label>
                        <label>
                            <input type='checkbox'></input>
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

export default RestaurantOrderComponent;