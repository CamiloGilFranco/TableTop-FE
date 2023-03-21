import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MobileNavBar.css'


const MobileNavBar =({mobileShow, setMobileShow})=>{
  const language = useSelector(state=> state.language.code);
  const footerHome = () => {
    switch (language) {
      case 'en':
        return en.footerHome
      case 'es':
        return es.footerHome
      default:
        return en.footerHome
    }
  }
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
            <Link to={'/'}><p>{footerHome()}</p></Link>
          </section>
          <section>
          </section>
        </article>
        <article className='mobileNavBar__section'>
          <section className='mobileNavBar__title'>
            <Link to={'/restaurant'}><p>Restaurants</p></Link>
          </section>
          <section>
          </section>
        </article>
      </section>
    </div>
    )
}

export default MobileNavBar;