import { useSelector } from 'react-redux';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MobileNavBar.css'
import languageSelector from '../../assets/languages/languageSelector';


const MobileNavBar =({mobileShow, setMobileShow})=>{
  const language = useSelector(state=> state.languageReducer);

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
            <Link to={'/'}><p>{languageSelector(language, 'footerHome')}</p></Link>
          </section>
          <section>
          </section>
        </article>
        <article className='mobileNavBar__section'>
          <section className='mobileNavBar__title'>
            <Link to={'/restaurants'}><p>{languageSelector(language, 'headerRestaurant')}</p></Link>
          </section>
          <section>
          </section>
        </article>
      </section>
    </div>
    )
}

export default MobileNavBar;