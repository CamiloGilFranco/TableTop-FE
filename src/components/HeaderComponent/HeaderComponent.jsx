import "./HeaderComponent.css";
import { BsFillPersonFill, BsFillGearFill } from "react-icons/bs";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import LogInComponent from "../LogInComponent/LogInComponent";
import { HiOutlineViewList } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const HeaderComponent = () => {

  const [mobileShow, setMobileShow] = useState("mobileNavBar__none");
  const [showLogIn, setShowLogIn] = useState(false);

  const handleClickList = () => {
    setMobileShow("");
  };


  const [mobileShow, setMobileShow] = useState('mobileNavBar__none');
  const [location, setLocation] = useState('bogota');
  const [currency, setCurrency] = useState('USD');
  const [lenguage, setLenguage] = useState('english');

  const handleClickList = () => {
    setMobileShow('');
  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  }
  const handleLenguageChange = (event) => {
    setLenguage(event.target.value);
  }


  return (
    <header className="headerNavBar">
      {showLogIn ? <LogInComponent setShowLogIn={setShowLogIn} /> : ""}

      <picture className="logo__container">
        <img src={logo} alt="" className="logotipo" />
        <span className="header__title">
          <b>TableTop</b>
        </span>
      </picture>
      <section className="header__textButtons">
        <span className="header__homeButton">
          <NavLink to={"/"}>
            <b className="header__text">HOME</b>
          </NavLink>
        </span>
        <span className="header__restaurantButton">
          <NavLink to={"/restaurant"}>
            <b className="header__text">RESTAURANT</b>
          </NavLink>
        </span>
        <span className="header__pagesButton">
          <NavLink to={"/pages"}>
            <b className="header__text">PAGES</b>
          </NavLink>
        </span>
      </section>
      <section className="header__buttons">
        <select className="locationList" onChange={handleLocationChange}>
          <option value={"bogota"}>Bog</option>
          <option value={"medellin"}>Med</option>
          <option value={"cali"}>Calí</option>
        </select>
        <section className="header__optionLists">
          <select className="currencyList" onChange={handleCurrencyChange}>
            <option value={"USD"}>USD</option>
            <option value={"COP"}>COP</option>
            <option value={"PEN"}>PEN</option>
            <option value={"MXN"}>MXN</option>
          </select>
          <select className="lenguageList" onChange={handleLenguageChange}>
            <option value={"english"}>EN</option>
            <option value={"spanish"}>ES</option>
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
