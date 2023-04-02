import { useSelector } from 'react-redux';
import "./RestaurantOptions.css";
import languageSelector from '../../assets/languages/languageSelector';

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
          {languageSelector(language, 'restaurantOptionsOnline')}
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
          {languageSelector(language, 'restaurantOptionsOverview')}
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
         {languageSelector(language, 'restaurantOptionsGallery')}
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
          {languageSelector(language, 'restaurantOptionsLocation')}
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
          {languageSelector(language, 'restaurantOptionsBooking')}
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
          {languageSelector(language, 'restaurantOptionsReview')}
        </label>
      </div>
    </div>
  );
};

export default RestauranOptions;
