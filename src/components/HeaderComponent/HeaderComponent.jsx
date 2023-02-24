import './HeaderComponent.css'
import { BsCheck2Circle } from 'react-icons/bs'

const HeaderComponent =()=>{
    return(
        <header className='headerNavBar'>
            <picture className='logo__container'>
                <BsCheck2Circle className='logo'/>
                <span className='header__title'><b>Table Top</b></span>
            </picture>
            <section className='header__buttons'>
                <button className='header__homeButton'><b>HOME</b></button>
                <button className='header__restaurantButton'><b>RESTAURANT</b></button>
            </section>
        </header>
    )
}

export default HeaderComponent;