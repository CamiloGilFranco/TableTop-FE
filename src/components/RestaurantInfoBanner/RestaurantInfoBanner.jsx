import './RestaurantInfoBanner.css';
import logo from "../../assets/logo.svg";

const RestaurantInfoBanner = ()=>{
    return(
        <article className='restaurantInfoBanner__container'>
            <picture>
                <img src={logo} alt='restaurant logo' className='restaurantInfoBanner__logo'/>
            </picture>
            <section className='restaurantInfoBanner__text'>
                <h3>Fast Food, Cafe, Italian</h3>
                <span> 4.5 Rating | 30 mins | $25 for 2</span>
            </section>
        </article>
    )
}
export default RestaurantInfoBanner;