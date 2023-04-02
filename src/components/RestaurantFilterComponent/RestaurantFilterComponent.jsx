import { useSelector } from "react-redux";
import "./RestaurantFilterComponent.css";
import { useEffect } from "react";
import { BsFillFilterSquareFill } from "react-icons/bs";
import { useState } from "react";
import { ImInfo } from "react-icons/im";
import { useSearchParams } from "react-router-dom";
import languageSelector from "../../assets/languages/languageSelector";

const RestaurantFilterComponent = ({
  categories,
  setCategories,
  rating,
  setRating,
  data,
}) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const [mobileFilter, setMobileFilter] = useState("");
  const [radioSelected, setRadioSelected] = useState("");
  const [checkBoxSelected, setCheckBoxSelected] = useState([]);

  const language = useSelector((state) => state.languageReducer);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 765) {
        setMobileFilter("");
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // fires when a categorie is selected, adds the value to he state checkboxSelected and updates the searchParam with whats comming from the cuisine arrray and keeps the other values if they exist. 
  const handleCategoriesChange = (event) => {
    if (event.target.checked) {
      setCheckBoxSelected([...checkBoxSelected, event.target.name]);
      setSearchParams({
        ...(searchParams.get("searchTerm") && {
          searchTerm: searchParams.get("searchTerm"),
        }),
        cuisine: [event.target.name].concat(searchParams.getAll("cuisine")),
        ...(searchParams.get("rating") && {
          rating: searchParams.get("rating"),
        }),
      });
    } else {
      setCheckBoxSelected(
        checkBoxSelected.filter((value) => value !== checkBoxSelected)
      );
    }
    if (categories.some((element) => element === event.target.name)) {
      setCategories(
        categories.filter((element) => element !== event.target.name)
      );
    } else {
      setCategories([...categories, event.target.name]);
    }
  };

  // fires when a star rating is selected, updates the radioSelected state and searchParam with the value from the star rating and keeps the other values if they exist.
  const handleRatingChange = (event) => {
    setRadioSelected(event.target.id);

    setSearchParams({
      ...(searchParams.get("searchTerm") && {
        searchTerm: searchParams.get("searchTerm"),
      }),
      ...(searchParams.get("cuisine") && {
        cuisine: searchParams.getAll("cuisine"),
      }),
      rating: event.target.id,
    });
  };

  // renders the mobile list
  const handleListClick = () => {
    mobileFilter === "Filter__none"
      ? setMobileFilter("")
      : setMobileFilter("Filter__none");
  };

  // clears the categories, checkboxSelected and searchParam of the values from cuisine, clears all the checked checkboxes and removes the values from the searchparams while keeping the other values if they exist
  const handleClearCuisine = () => {
    setCategories([]);
    setCheckBoxSelected([]);
    setSearchParams({
      ...(searchParams.get("searchTerm") && {
        searchTerm: searchParams.get("searchTerm"),
      }),
      ...(!searchParams.get("cuisine") && {
        cuisine: searchParams.getAll("cuisine"),
      }),
      ...(searchParams.get("rating") && { rating: searchParams.get("rating") }),
    });
  }

  // clears the rating and searchParam of the values from rating, clears the radioslected and removes the values from the searchparams while keeping the other values if they exist
  const handleClearRating = () => {
    setRadioSelected("");
    setSearchParams({
      ...(searchParams.get("searchTerm") && {
        searchTerm: searchParams.get("searchTerm"),
      }),
      ...(searchParams.get("cuisine") && {
        cuisine: searchParams.getAll("cuisine"),
      }),
      ...(!searchParams.get("rating") && {
        rating: searchParams.get("rating"),
      }),
    });
  };
  return (
    <section className="restaurantFilter__container">
      <section className="restaurantFilterMobile">
        <section className="restaurantFilter__filter">
          <p>{languageSelector(language, 'filterTitle')}</p>
          <BsFillFilterSquareFill onClick={handleListClick} />
        </section>
      </section>

      <section className={`restaurantFilterDesktop ${mobileFilter}`}>
        <section className="restaurantFilter__filter">
          <p>{languageSelector(language, 'filterTitle')}</p>
        </section>
        <article>
          <section className="restaurantFilter__filter">
            <p>{languageSelector(language, 'filterCuisine')}</p>
            <p onClick={handleClearCuisine} className="restaurantFilter_clear">
              {languageSelector(language, 'filterClear')}
            </p>
          </section>
          <section className="popularFilter">
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="asian"
                name="asian"
                checked={checkBoxSelected.includes("asian")}
                onChange={handleCategoriesChange}
              />
              {/* {filterAsian()} */}kuashbikudh
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="fastfood"
                name="fastfood"
                checked={checkBoxSelected.includes("fastfood")}
                onChange={handleCategoriesChange}
              />
              {languageSelector(language, 'filterFastFood')}
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="italian"
                name="italian"
                checked={checkBoxSelected.includes("italian")}
                onChange={handleCategoriesChange}
              />
              {languageSelector(language, 'filterItalian')}
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="mexican"
                name="mexican"
                checked={checkBoxSelected.includes("mexican")}
                onChange={handleCategoriesChange}
              />
              {languageSelector(language, 'filterMexican')}
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="breakfast"
                name="breakfast"
                checked={checkBoxSelected.includes("breakfast")}
                onChange={handleCategoriesChange}
              />
              {languageSelector(language, 'filterBreakfast')}
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="tipical"
                name="tipical"
                checked={checkBoxSelected.includes("tipical")}
                onChange={handleCategoriesChange}
              />
              {languageSelector(language, 'filterTypical')}
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="dessert"
                name="dessert"
                checked={checkBoxSelected.includes("dessert")}
                onChange={handleCategoriesChange}
              />
              {languageSelector(language, 'filterDessert')}
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="vegetarian"
                name="vegetarian"
                checked={checkBoxSelected.includes("vegetarian")}
                onChange={handleCategoriesChange}
              />
              {languageSelector(language, 'filterVeg')}
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="bar"
                name="bar"
                checked={checkBoxSelected.includes("bar")}
                onChange={handleCategoriesChange}
              />
              Bar
            </label>
            <label>
              <input
                type="checkbox"
                className="filterCheckbox"
                id="coffee"
                name="coffee"
                checked={checkBoxSelected.includes("coffee")}
                onChange={handleCategoriesChange}
              />
              {languageSelector(language, 'filterCoffee')}
            </label>
          </section>
        </article>
        <article>
          <section className="restaurantFilter__filter">
            <p>{languageSelector(language, 'filterRating')}</p>
            <p onClick={handleClearRating} className="restaurantFilter_clear">
              {languageSelector(language, 'filterClear')}
            </p>
          </section>
          <section className="popularFilter">
            <label for="5">
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
          </section>
        </article>
        <div className="helpButton">
          <ImInfo />
          <b>{languageSelector(language, 'filterHelp')}</b>
        </div>
        <h3>856-215-211</h3>
        <span>{languageSelector(language, 'filterSchedule')} 9:00 AM - 7:30 PM</span>
      </section>
    </section>
  );
};

export default RestaurantFilterComponent;
