import './RestaurantOptions.css'

const RestaurantOptions=()=>{
    return(
        <section className='restaurantOptions__container'>
            <button className='restaurantOptions__options'><p>Order Online</p></button>
            <button className='restaurantOptions__options'><p>Overvies</p></button>
            <button className='restaurantOptions__options'><p>Gallery</p></button>
            <button className='restaurantOptions__options'><p>Location</p></button>
            <button className='restaurantOptions__options'><p>Book A Table</p></button>
            <button className='restaurantOptions__options'><p>Reviews</p></button>
        </section>
    )
}

export default RestaurantOptions;