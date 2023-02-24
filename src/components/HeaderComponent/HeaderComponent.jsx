import "./HeaderComponent.css";
import {
  //BsCheck2Circle,
  BsFillPersonFill,
  BsFillGearFill,
} from "react-icons/bs";
import { HiOutlineViewList } from "react-icons/hi";
import logo from "../../assets/logo.svg";

const HeaderComponent = () => {
  return (
    <header className="headerNavBar">
      <picture className="logo__container">
        <img src={logo} alt="" className="logotipo" />
        {/* <BsCheck2Circle className="logo" /> */}
        <span className="header__title">
          <b>TableTop</b>
        </span>
      </picture>
      <section className="header__textButtons">
        <span className="header__homeButton">
          <b className="header__text">HOME</b>
        </span>
        <span className="header__restaurantButton">
          <b className="header__text">RESTAURANT</b>
        </span>
        <span className="header__pagesButton">
          <b className="header__text">PAGES</b>
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
        <HiOutlineViewList className="header__listIcon header__icons" />
        <BsFillPersonFill className="header__personIcon header__icons" />
        <BsFillGearFill className="header__gearIcon header__icons" />
      </section>
    </header>
  );
};

export default HeaderComponent;
