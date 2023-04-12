import { useSelector } from "react-redux";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./MobileNavBar.css";
import languageSelector from "../../assets/languages/languageSelector";

const MobileNavBar = ({
  mobileShow,
  setMobileShow,
  handleLocationChange,
  location,
  handleLanguageChange,
}) => {
  const language = useSelector((state) => state.languageReducer);

  const handleBackclick = () => {
    setMobileShow("mobileNavBar__none");
  };
  return (
    <div className={`mobileNavBar ${mobileShow}`}>
      <section className="mobileNavBar__container">
        <span className="mobileNavBar__header" onClick={handleBackclick}>
          <p>{languageSelector(language, "back")}</p>
        </span>
        <article className="mobileNavBar__section">
          <section className="mobileNavBar__title">
            <Link to={"/"}>
              <p>{languageSelector(language, "footerHome")}</p>
            </Link>
          </section>
          <section></section>
        </article>
        <article className="mobileNavBar__section">
          <section className="mobileNavBar__title">
            <Link to={"/restaurants"}>
              <p>{languageSelector(language, "headerRestaurant")}</p>
            </Link>
          </section>
        </article>
        <select
          className="mobileNavBar-location-list"
          onChange={handleLocationChange}
          value={location}
        >
          <option value={"bogota"}>Bogotá</option>
          <option value={"medellin"}>Medellín</option>
          <option value={"cali"}>Calí</option>
          <option value={"cartagena"}>Cartagena</option>
          <option value={"bucaramanga"}>Bucaramanga</option>
        </select>
        <select
          className="mobileNavBar-language-list"
          onChange={handleLanguageChange}
          value={language}
        >
          <option value={"en"}>EN</option>
          <option value={"es"}>ES</option>
        </select>
      </section>
      <section></section>
    </div>
  );
};

export default MobileNavBar;
