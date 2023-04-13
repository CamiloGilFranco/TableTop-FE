import { useSelector } from "react-redux";
import "./RestaurantFilterComponent.css";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import languageSelector from "../../assets/languages/languageSelector";
import burger from "../../assets/hamburger.svg";
import CheckboxFilter from "./CheckboxFilter";
import cuisinesDB from "../../assets/cuisines.json";

const RestaurantFilterComponent = () => {
  const cuisines = Object.keys(cuisinesDB);
  const [searchParams, setSearchParams] = useSearchParams({});

  const [radioSelected, setRadioSelected] = useState("");
  const [mobileView, setMobileView] = useState(false);

  const language = useSelector((state) => state.languageReducer);

  /*
  The existence of a rating type filter in the url is verified,
  if so, the corresponding value is applied to the state of 
  the radio buttons so that it is shown selected.*/
  useEffect(() => {
    if (Object.fromEntries(searchParams.entries()).rating) {
      setRadioSelected(Object.fromEntries(searchParams.entries()).rating);
    }
  }, []);

  /*
  This function is executed from the checkboxes component, 
  it receives the name of the checkbox and its value,
  if the value is true it adds the value to the searchParams, 
  otherwise it removes it.*/
  const handleCategoriesChange = (element, value) => {
    if (value) {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        [element]: true,
      });
    } else {
      const objectDeleting = { ...Object.fromEntries(searchParams.entries()) };
      delete objectDeleting[element];
      setSearchParams({ ...objectDeleting });
    }
  };

  /* 
  set the value of the selected radio button, 
  then add the rating value to the url 
  keeping the previous values */
  const handleRatingChange = (event) => {
    setRadioSelected(event.target.id);
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      rating: event.target.id,
    });
  };

  /* 
  verifies the existence of a rating type value in the url, 
  if it exists it stores it in a variable and generates 
  a new searchParams object only with that value, 
  otherwise an empty object is assigned to the searchParams */
  const handleClearCuisine = () => {
    if (searchParams.get("rating")) {
      const rating = searchParams.get("rating");
      setSearchParams({ rating });
    } else {
      setSearchParams({});
    }
  };

  /* 
  If there is a value of type rating in the searchParams, 
  it eliminates it keeping the other existing values, 
  also, it sets the state of the radio buttons as 
  an empty string so that no radio button is shown selected */
  const handleClearRating = () => {
    if (searchParams.get("rating")) {
      const cleaningRating = { ...Object.fromEntries(searchParams.entries()) };
      delete cleaningRating.rating;
      setSearchParams({ ...cleaningRating });
    }
    setRadioSelected("");
  };

  return (
    <section className="restaurantFilter-container">
      <div className="restaurantFilter-container-header">
        <span className="restaurantFilter-container-header-title">
          {languageSelector(language, "filterTitle")}
        </span>
        <img
          src={burger}
          alt=""
          className={`restaurantFilter-container-header-icon ${
            mobileView ? "restaurantFilter-container-header-icon-active" : ""
          }`}
          onClick={() => setMobileView(!mobileView)}
        />
      </div>
      <div
        className={`restaurantFilter-container-main-container ${
          mobileView
            ? "restaurantFilter-container-main-container-mobile-active"
            : ""
        }`}
      >
        <div className="restaurantFilter-container-main-container-cuisines">
          <div className="restaurantFilter-container-main-container-cuisines-head">
            <span className="restaurantFilter-container-main-container-cuisines-title">
              {languageSelector(language, "filterCuisine")}
            </span>
            <button
              className="restaurantFilter-container-main-container-cuisines-clear"
              onClick={handleClearCuisine}
            >
              {languageSelector(language, "filterClear")}
            </button>
          </div>
          <div className="restaurantFilter-container-main-container-cuisines-checks">
            {cuisines.map((element, index) => (
              <CheckboxFilter
                key={index}
                element={element}
                handleCategoriesChange={handleCategoriesChange}
                objectParams={Object.fromEntries(searchParams.entries())}
              />
            ))}
          </div>
        </div>

        <div className="restaurantFilter-container-main-container-stars">
          <div className="restaurantFilter-container-main-container-stars-head">
            <span className="restaurantFilter-container-main-container-stars-title">
              {languageSelector(language, "filterRating")}
            </span>
            <button
              className="restaurantFilter-container-main-container-stars-clear"
              onClick={handleClearRating}
            >
              {languageSelector(language, "filterClear")}
            </button>
          </div>
          <div className="restaurantFilter-container-main-container-stars-radios">
            <label htmlFor="5">
              <input
                type="radio"
                className="filterCheckbox"
                id="5"
                name="rating"
                checked={radioSelected === "5"}
                onChange={handleRatingChange}
              />
              ⭐⭐⭐⭐⭐
            </label>
            <label>
              <input
                type="radio"
                className="filterCheckbox"
                id="4"
                name="rating"
                checked={radioSelected === "4"}
                onChange={handleRatingChange}
              />
              ⭐⭐⭐⭐
            </label>
            <label>
              <input
                type="radio"
                className="filterCheckbox"
                id="3"
                name="rating"
                checked={radioSelected === "3"}
                onChange={handleRatingChange}
              />
              ⭐⭐⭐
            </label>
            <label>
              <input
                type="radio"
                className="filterCheckbox"
                id="2"
                name="rating"
                checked={radioSelected === "2"}
                onChange={handleRatingChange}
              />
              ⭐⭐
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantFilterComponent;
