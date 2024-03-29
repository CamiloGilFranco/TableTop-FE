import { useSelector } from "react-redux";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./MobileNavBar.css";
import languageSelector from "../../assets/languages/languageSelector";
import routePaths from "../../constants/routePaths";

const MobileNavBar = ({
  mobileShow,
  setMobileShow,
  handleLocationChange,
  location,
  handleLanguageChange,
  cities,
}) => {
  const language = useSelector((state) => state.languageReducer);

  const handleBackclick = () => {
    setMobileShow("mobile-navbar-none");
  };
  return (
    <div className={`mobile-navbar ${mobileShow}`}>
      <section className="mobile-navbar-container">
        <span className="mobileNavBar__header" onClick={handleBackclick}>
          <p>{languageSelector(language, "back")}</p>
        </span>
        <article className="mobile-navbar-section">
          <section className="mobile-navbar-title">
            <Link to={routePaths.home}>
              <p>{languageSelector(language, "footerHome")}</p>
            </Link>
          </section>
          <section></section>
        </article>
        <article className="mobile-navbar-section">
          <section className="mobile-navbar-title">
            <Link to={routePaths.restaurants}>
              <p>{languageSelector(language, "headerRestaurant")}</p>
            </Link>
          </section>
        </article>
        <select
          className="mobile-navbar-language-list"
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
