import MobileNavBar from "../MobileNavBar/MobileNavBar";
import LogInComponent from "../LogInComponent/LogInComponent";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LANGUAGE_SWITCH } from "../../store/reducers/Language.reducer";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import "./HeaderComponent.css";
import logo from "../../assets/logo.svg";
import languageSelector from "../../assets/languages/languageSelector";
import routePaths from "../../constants/routePaths";

const HeaderComponent = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const language = useSelector((state) => state.languageReducer);
  const dispatch = useDispatch();

  const [mobileShow, setMobileShow] = useState("mobile-navbar-none");
  const [location, setLocation] = useState("Bogotá");

  const handleClickList = () => {
    setMobileShow("");
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLanguageChange = (e) => {
    dispatch({ type: LANGUAGE_SWITCH, payload: e.target.value });
  };

  return (
    <header className="headerNavBar">
      {showLogIn ? <LogInComponent setShowLogIn={setShowLogIn} /> : <></>}

      <NavLink to={routePaths.home} className="navbar-logo">
        <picture className="logo-container">
          <img src={logo} alt="" className="logotipo" />
          <span className="header-title">
            <b>TableTop</b>
          </span>
        </picture>
      </NavLink>
      <section className="header-textButtons">
        <span className="header-restaurant-button">
          <NavLink to={routePaths.restaurants}>
            <b className="header-text">
              {languageSelector(language, "headerRestaurant")}
            </b>
          </NavLink>
        </span>
      </section>
      <section className="header-buttons">
        <section className="header-optionLists">
          <select
            className="language-list"
            onChange={handleLanguageChange}
            value={language}
          >
            <option value={"en"}>EN</option>
            <option value={"es"}>ES</option>
          </select>
        </section>
        <HiOutlineViewList
          className="header-list-icon header-icons"
          onClick={handleClickList}
        />
        <div onClick={() => setShowLogIn(true)}>
          <BsFillPersonFill className="header-person-icon header-icons" />
        </div>
      </section>
      <MobileNavBar
        setMobileShow={setMobileShow}
        mobileShow={mobileShow}
        handleLocationChange={handleLocationChange}
        location={location}
        language={language}
        handleLanguageChange={handleLanguageChange}
      />
    </header>
  );
};

export default HeaderComponent;
