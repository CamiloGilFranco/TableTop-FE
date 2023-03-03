import './MobileNavBar.css'
import { FaGreaterThan } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom';


const MobileNavBar =({mobileShow, setMobileShow})=>{
    
    const handleBackclick =()=>{
        setMobileShow('mobileNavBar__none');
    }
    return(
        <div className={`mobileNavBar ${mobileShow}`}>
            <abbr/>
            <section className="mobileNavBar__container">
                <span className='mobileNavBar__header' onClick={handleBackclick}>
                    <p>Back</p>
                    <FaGreaterThan className='mobileNavBar__BackIcon'/>
                </span>
                <article className='mobileNavBar__section'>
                    <section className='mobileNavBar__title'>
                        <Link to={'/'}><p>Home</p></Link>
                        <AiOutlinePlus />
                    </section>
                    <section>
                        <p className='mobileNavBar__option'>opt 1</p>
                        <p className='mobileNavBar__option'>opt 2</p>
                        <p className='mobileNavBar__option'>opt 3</p>
                    </section>
                </article>
                <article className='mobileNavBar__section'>
                    <section className='mobileNavBar__title'>
                        <Link to={'/restaurant'}><p>Restaurant</p></Link>
                        <AiOutlinePlus/>
                    </section>
                    <section>
                        <p className='mobileNavBar__option'>opt 1</p>
                        <p className='mobileNavBar__option'>opt 2</p>
                        <p className='mobileNavBar__option'>opt 3</p>
                    </section>
                </article>
                <article className='mobileNavBar__section'>
                    <section className='mobileNavBar__title'>
                        <Link to={'/order'}><p>Order</p></Link>
                        <AiOutlinePlus/>
                    </section>
                    <section>
                        <p className='mobileNavBar__option'>opt 1</p>
                        <p className='mobileNavBar__option'>opt 2</p>
                        <p className='mobileNavBar__option'>opt 3</p>
                    </section>
                </article>
            </section>
        </div>
    )
}

export default MobileNavBar;