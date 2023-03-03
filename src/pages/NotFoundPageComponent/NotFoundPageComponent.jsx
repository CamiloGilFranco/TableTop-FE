import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import NotFoundImg from './assets/NotFoundImg.svg'
import './NotFoundPageComponent.css'

const NotFoundPageComponent = () => {
  return(
    <>
      <HeaderComponent/>
      <section className="notFound__container">
        <h3 className="notFound__title">Got lost looking for something?</h3>
        <picture className="notFound__img__container">
          <img className="notFound__img" src={NotFoundImg} alt="Algo salio mal"/>
        </picture>
        <span className="notFound__text">
          It looks like the page you're looking for doesn't exist
        </span>
        <button className="notFound__button">
          <Link to={'/'} >Go back to home</Link>
        </button>
      </section>
      <Footer/>
    </>
  )
}

export default NotFoundPageComponent;