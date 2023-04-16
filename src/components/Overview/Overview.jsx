import { useSelector } from "react-redux";
import "./Overview.css";
import languageSelector from "../../assets/languages/languageSelector";

const Overview = ({
  phoneNumber,
  categories,
  schedule,
  address,
  facilities,
}) => {
  const language = useSelector((state) => state.languageReducer);

  return (
    <div className="restaurant-view-overview">
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          {languageSelector(language, "signInPhone")}:
        </span>
        <ul className="restaurant-view-overview-category-items">
          {phoneNumber &&
            phoneNumber.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          {languageSelector(language, "filterCuisine")}
        </span>
        <ul className="restaurant-view-overview-category-items">
          {categories &&
            categories.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          {languageSelector(language, "overViewSchedule")}
        </span>
        <ul className="restaurant-view-overview-category-items">
          {schedule &&
            schedule.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          {languageSelector(language, "signInAddress")}
        </span>
        <ul className="restaurant-view-overview-category-items">
          {address &&
            address.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          {languageSelector(language, "overviewFacilities")}
        </span>
        <ul className="restaurant-view-overview-category-items">
          {facilities &&
            facilities.map((element, index) => <li key={index}>{element}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
