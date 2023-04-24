import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import NotFoundImg from './assets/NotFoundImg.svg'
import './NotFoundPageComponent.css'
import languageSelector from '../../assets/languages/languageSelector';
import routePaths from '../../constants/routePaths';

const NotFoundPageComponent = () => {
  const language = useSelector(state=> state.languageReducer);

  return(
    <>
      <HeaderComponent/>
      <section className="notFound__container">
        <h3 className="notFound__title">{languageSelector(language, 'notFoundTitle')}</h3>
        <picture className="notFound__img__container">
          <img className="notFound__img" src={NotFoundImg} alt="Algo salio mal"/>
        </picture>
        <span className="notFound__text">
          {languageSelector(language, 'notFoundBody')}
        </span>
        <button className="notFound__button">
          <Link to={routePaths.home} >{languageSelector(language, 'notFoundFooter')}</Link>
        </button>
      </section>
      <Footer/>
    </>
  )
}

export default NotFoundPageComponent;