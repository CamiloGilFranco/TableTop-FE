import MobileNavBar from "../MobileNavBar/MobileNavBar";
import LogInComponent from "../LogInComponent/LogInComponent";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LANGUAGE_SWITCH } from "../../store/reducers/Language.reducer";
import { en } from "../../assets/languages/languajeEN";
import { es } from "../../assets/languages/languageES";
import { BsFillPersonFill, BsFillGearFill } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import "./HeaderComponent.css";
import logo from "../../assets/logo.svg";

const HeaderComponent = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const language = useSelector(state=> state.languageReducer);
  const dispatch = useDispatch();


  const [mobileShow, setMobileShow] = useState("mobileNavBar__none");
  const [location, setLocation] = useState("bogota");
  const [currency, setCurrency] = useState("USD");

  const restaurantHeader = () => {
    switch (language) {
      case 'en':
        return en.headerRestaurant;
      case 'es':
        return es.headerRestaurant;
      default:
        return en.headerRestaurant;
    }
  }

  const handleClickList = () => {
    setMobileShow("");
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  const handleLanguageChange = (e) => {
    dispatch({ type: LANGUAGE_SWITCH ,  payload: (e.target.value)});
  };

  return (
    <header className="headerNavBar">
      {showLogIn ? <LogInComponent setShowLogIn={setShowLogIn} /> : ""}

      <NavLink to={"/"} className='navbar__logo'>
        <picture className="logo__container">
          <img src={logo} alt="" className="logotipo" />
          <span className="header__title">
            <b>TableTop</b>
          </span>
        </picture>
      </NavLink>
      <section className="header__textButtons">
        <span className="header__homeButton">
        </span>
        <span className="header__restaurantButton">
          <NavLink to={"/restaurants"}>
            <b className="header__text">{restaurantHeader()}</b>
          </NavLink>
        </span>
        <span className="header__pagesButton">
        </span>
      </section>
      <section className="header__buttons">
        <select className="locationList" onChange={handleLocationChange}>
          <option value={"bogota"}>Bogotá</option>
          <option value={"medellin"}>Medellín</option>
          <option value={"cali"}>Calí</option>
          <option value={"cartagena"}>Cartagena</option>
          <option value={"bucaramanga"}>Bucaramanga</option>
        </select>
        <section className="header__optionLists">
          <select className="currencyList" onChange={handleCurrencyChange}>
            <option value={"USD"}>USD</option>
            <option value={"COP"}>COP</option>
          </select>
          <select className="languageList" onChange={handleLanguageChange}>
            <option value={"en"}>EN</option>
            <option value={"es"}>ES</option>
          </select>
        </section>
        <HiOutlineViewList
          className="header__listIcon header__icons"
          onClick={handleClickList}
        />
        <div onClick={() => setShowLogIn(true)}>
          <BsFillPersonFill className="header__personIcon header__icons" />
        </div>
        <BsFillGearFill className="header__gearIcon header__icons" />
      </section>
      <MobileNavBar setMobileShow={setMobileShow} mobileShow={mobileShow} />
    </header>
  );
};

export default HeaderComponent;
