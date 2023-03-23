import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import "./RestaurantOptions.css";

const RestauranOptions = ({
  setSelected,
  selected = "nada",
  classOrderOnline,
  classOverview,
  classGallery,
  classLocation,
  classBookATable,
  classReviews,
}) => {

  const language = useSelector(state=> state.languageReducer);
  const restaurantOptionsOnline = () => {
    switch (language) {
      case 'en':
        return en.restaurantOptionsOnline
      case 'es':
        return es.restaurantOptionsOnline
      default:
        return en.restaurantOptionsOnline
    }
  }
  const restaurantOptionsOverview = () => {
    switch (language) {
      case 'en':
        return en.restaurantOptionsOverview
      case 'es':
        return es.restaurantOptionsOverview
      default:
        return en.restaurantOptionsOverview
    }
  }
  const restaurantOptionsGallery = () => {
    switch (language) {
      case 'en':
        return en.restaurantOptionsGallery
      case 'es':
        return es.restaurantOptionsGallery
      default:
        return en.restaurantOptionsGallery
    }
  }
  const restaurantOptionsLocation = () => {
    switch (language) {
      case 'en':
        return en.restaurantOptionsLocation
      case 'es':
        return es.restaurantOptionsLocation
      default:
        return en.restaurantOptionsLocation
    }
  }
  const restaurantOptionsBooking = () => {
    switch (language) {
      case 'en':
        return en.restaurantOptionsBooking
      case 'es':
        return es.restaurantOptionsBooking
      default:
        return en.restaurantOptionsBooking
    }
  }
  const restaurantOptionsReview = () => {
    switch (language) {
      case 'en':
        return en.restaurantOptionsReview
      case 'es':
        return es.restaurantOptionsReview
      default:
        return en.restaurantOptionsReview
    }
  }

  return (
    <div className="restaurant-options">
      <div className={`restaurant-options-option ${classOrderOnline}`}>
        <input
          type="radio"
          id="ORDER-ONLINE"
          name="restaurant-options-option"
          value="ORDER ONLINE"
          className="restaurant-options-option-radio"
          checked={selected === "ORDER ONLINE"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label
          htmlFor="ORDER-ONLINE"
          className="restaurant-options-option-text"
        >
          {restaurantOptionsOnline()}
        </label>
      </div>
      <div className={`restaurant-options-option ${classOverview}`}>
        <input
          type="radio"
          id="OVERVIEW"
          name="restaurant-options-option"
          value="OVERVIEW"
          className="restaurant-options-option-radio"
          checked={selected === "OVERVIEW"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="OVERVIEW" className="restaurant-options-option-text">
          {restaurantOptionsOverview()}
        </label>
      </div>
      <div className={`restaurant-options-option ${classGallery}`}>
        <input
          type="radio"
          id="GALLERY"
          name="restaurant-options-option"
          value="GALLERY"
          className="restaurant-options-option-radio"
          checked={selected === "GALLERY"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="GALLERY" className="restaurant-options-option-text">
          {restaurantOptionsGallery()}
        </label>
      </div>
      <div className={`restaurant-options-option ${classLocation}`}>
        <input
          type="radio"
          id="LOCATION"
          name="restaurant-options-option"
          value="LOCATION"
          className="restaurant-options-option-radio"
          checked={selected === "LOCATION"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="LOCATION" className="restaurant-options-option-text">
          {restaurantOptionsLocation()}
        </label>
      </div>
      <div className={`restaurant-options-option ${classBookATable}`}>
        <input
          type="radio"
          id="BOOK A TABLE"
          name="restaurant-options-option"
          value="BOOK A TABLE"
          className="restaurant-options-option-radio"
          checked={selected === "BOOK A TABLE"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label
          htmlFor="BOOK A TABLE"
          className="restaurant-options-option-text"
        >
          {restaurantOptionsBooking()}
        </label>
      </div>
      <div className={`restaurant-options-option ${classReviews}`}>
        <input
          type="radio"
          id="REVIEWS"
          name="restaurant-options-option"
          value="REVIEWS"
          className="restaurant-options-option-radio"
          checked={selected === "REVIEWS"}
          onChange={(e) => setSelected(e.target.value)}
        />
        <label htmlFor="REVIEWS" className="restaurant-options-option-text">
          {restaurantOptionsReview()}
        </label>
      </div>
    </div>
  );
};

export default RestauranOptions;
