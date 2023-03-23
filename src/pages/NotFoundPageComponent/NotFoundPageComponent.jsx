import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import NotFoundImg from './assets/NotFoundImg.svg'
import './NotFoundPageComponent.css'

const NotFoundPageComponent = () => {
  const language = useSelector(state=> state.languageReducer);
  const notFoundTitle = () => {
    switch (language) {
      case 'en':
        return en.notFoundTitle
      case 'es':
        return es.notFoundTitle
      default:
        return en.notFoundTitle
    }
  }
  const notFoundBody = () => {
    switch (language) {
      case 'en':
        return en.notFoundBody
      case 'es':
        return es.notFoundBody
      default:
        return en.notFoundBody
    }
  }
  const notFoundFooter = () => {
    switch (language) {
      case 'en':
        return en.notFoundFooter
      case 'es':
        return es.notFoundFooter
      default:
        return en.notFoundFooter
    }
  }
  return(
    <>
      <HeaderComponent/>
      <section className="notFound__container">
        <h3 className="notFound__title">{notFoundTitle()}</h3>
        <picture className="notFound__img__container">
          <img className="notFound__img" src={NotFoundImg} alt="Algo salio mal"/>
        </picture>
        <span className="notFound__text">
          {notFoundBody()}
        </span>
        <button className="notFound__button">
          <Link to={'/'} >{notFoundFooter()}</Link>
        </button>
      </section>
      <Footer/>
    </>
  )
}

export default NotFoundPageComponent;