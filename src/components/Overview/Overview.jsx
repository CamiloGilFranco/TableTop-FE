import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import "./Overview.css";

const Overview = ({
  phoneNumber,
  categories,
  schedule,
  address,
  facilities,
}) => {
  const language = useSelector(state=> state.language.code);
  const signInPhone = () => {
    switch (language) {
      case 'en':
        return en.signInPhone
      case 'es':
        return es.signInPhone
      default:
        return en.signInPhone
    }
  }
  const filterCuisine = () => {
    switch (language) {
      case 'en':
        return en.filterCuisine
      case 'es':
        return es.filterCuisine
      default:
        return en.filterCuisine
    }
  }
  const signInAddress = () => {
    switch (language) {
      case 'en':
        return en.signInAddress
      case 'es':
        return es.signInAddress
      default:
        return en.signInAddress
    }
  }
  const overViewSchedule = () => {
    switch (language) {
      case 'en':
        return en.overViewSchedule
      case 'es':
        return es.overViewSchedule
      default:
        return en.overViewSchedule
    }
  }
  const overviewFacilities = () => {
    switch (language) {
      case 'en':
        return en.overviewFacilities
      case 'es':
        return es.overviewFacilities
      default:
        return en.overviewFacilities
    }
  }
  return (
    <div className="restaurant-view-overview">
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          {signInPhone()}:
        </span>
        <ul className="restaurant-view-overview-category-items">
          {phoneNumber.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">{filterCuisine()}</span>
        <ul className="restaurant-view-overview-category-items">
          {categories.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          {overViewSchedule()}
        </span>
        <ul className="restaurant-view-overview-category-items">
          {schedule.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">{signInAddress()}</span>
        <ul className="restaurant-view-overview-category-items">
          {address.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="restaurant-view-overview-category">
        <span className="restaurant-view-overview-category-title">
          {overviewFacilities()}
        </span>
        <ul className="restaurant-view-overview-category-items">
          {facilities.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
