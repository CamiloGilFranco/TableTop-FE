import "./HeaderComponent.css";
import {
  BsFillPersonFill,
  BsFillGearFill,
} from "react-icons/bs";
import MobileNavBar from "../MobileNavBar/MobileNavBar"
import { HiOutlineViewList } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const HeaderComponent = () => {

  const [mobileShow, setMobileShow] = useState('mobileNavBar__none')

  const handleClickList = () => {
    setMobileShow('')
  }
  
  return (
    <header className="headerNavBar">
      <picture className="logo__container">
        <img src={logo} alt="" className="logotipo" />
        <span className="header__title">
          <b>TableTop</b>
        </span>
      </picture>
      <section className="header__textButtons">
        <span className="header__homeButton">
          <NavLink to={'/'}><b className="header__text">HOME</b></NavLink>
        </span>
        <span className="header__restaurantButton">
          <NavLink to={'/restaurant'}><b className="header__text">RESTAURANT</b></NavLink>
        </span>
        <span className="header__pagesButton">
          <NavLink to={'/pages'}><b className="header__text">PAGES</b></NavLink>
        </span>
      </section>
      <section className="header__buttons">
        <section className="header__optionLists">
          <select className="currencyList">
            <option value={"USD"}>USD</option>
            <option value={"COP"}>COP</option>
            <option value={"PEN"}>PEN</option>
            <option value={"MXN"}>MXN</option>
          </select>
          <select className="lenguageList">
            <option value={"english"}>EN</option>
            <option value={"spanish"}>ES</option>
          </select>
        </section>
        <HiOutlineViewList className="header__listIcon header__icons" onClick={handleClickList}/>
        <BsFillPersonFill className="header__personIcon header__icons" />
        <BsFillGearFill className="header__gearIcon header__icons" />
      </section>
      <MobileNavBar
        setMobileShow={setMobileShow}
        mobileShow={mobileShow}
      />
    </header>
  );
};

export default HeaderComponent;
