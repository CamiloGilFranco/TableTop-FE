import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import './RestaurantFilterComponent.css';
import { useEffect } from 'react';
import { BsFillFilterSquareFill } from 'react-icons/bs';
import { useState } from 'react';
import { ImInfo } from 'react-icons/im';
import { useSearchParams } from 'react-router-dom';


const RestaurantFilterComponent = ({ categories, setCategories, rating, setRating, data }) =>{

  const [searchParams, setSearchParams] = useSearchParams({});

  const [mobileFilter, setMobileFilter] = useState('');
  const [radioSelected, setRadioSelected] = useState('');
  const [checkBoxSelected, setCheckBoxSelected] = useState([]);

  const language = useSelector(state=> state.languageReducer);
  const filterTitle = () => {
    switch (language) {
      case 'en':
        return en.filterTitle
      case 'es':
        return es.filterTitle
      default:
        return en.filterTitle
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
  const filterClear = () => {
    switch (language) {
      case 'en':
        return en.filterClear
      case 'es':
        return es.filterClear
      default:
        return en.filterClear
    }
  }
  const filterAsian = () => {
    switch (language) {
      case 'en':
        return en.filterAsian
      case 'es':
        return es.filterAsian
      default:
        return en.filterAsian
    }
  }
  const filterFastFood = () => {
    switch (language) {
      case 'en':
        return en.filterFastFood
      case 'es':
        return es.filterFastFood
      default:
        return en.filterFastFood
    }
  }
  const filterItalian = () => {
    switch (language) {
      case 'en':
        return en.filterItalian
      case 'es':
        return es.filterItalian
      default:
        return en.filterItalian
    }
  }
  const filterMexican = () => {
    switch (language) {
      case 'en':
        return en.filterMexican
      case 'es':
        return es.filterMexican
      default:
        return en.filterMexican
    }
  }
  const filterBreakfast = () => {
    switch (language) {
      case 'en':
        return en.filterBreakfast
      case 'es':
        return es.filterBreakfast
      default:
        return en.filterBreakfast
    }
  }
  const filterTipical = () => {
    switch (language) {
      case 'en':
        return en.filterTipical
      case 'es':
        return es.filterTipical
      default:
        return en.filterTipical
    }
  }
  const filterDessert = () => {
    switch (language) {
      case 'en':
        return en.filterDessert
      case 'es':
        return es.filterDessert
      default:
        return en.filterDessert
    }
  }
  const filterVeg = () => {
    switch (language) {
      case 'en':
        return en.filterVeg
      case 'es':
        return es.filterVeg
      default:
        return en.filterVeg
    }
  }
  const filterCoffee = () => {
    switch (language) {
      case 'en':
        return en.filterCoffee
      case 'es':
        return es.filterCoffee
      default:
        return en.filterCoffee
    }
  }
  const filterRating = () => {
    switch (language) {
      case 'en':
        return en.filterRating
      case 'es':
        return es.filterRating
      default:
        return en.filterRating
    }
  }
  const filterHelp = () => {
    switch (language) {
      case 'en':
        return en.filterHelp
      case 'es':
        return es.filterHelp
      default:
        return en.filterHelp
    }
  }
  const filterShcedule = () => {
    switch (language) {
      case 'en':
        return en.filterShcedule
      case 'es':
        return es.filterShcedule
      default:
        return en.filterShcedule
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 765) {
        setMobileFilter('');
      }
    };    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // fires when a categorie is selected, adds the value to he state checkboxSelected and updates the searchParam with whats comming from the cuisine arrray and keeps the other values if they exist. 
  const handleCategoriesChange = (event) =>{
    if (event.target.checked) {
      setCheckBoxSelected([...checkBoxSelected, event.target.name]);
      setSearchParams({
        ...searchParams.get('searchTerm') && { searchTerm: searchParams.get('searchTerm')},
        cuisine: [event.target.name].concat(searchParams.getAll('cuisine')),
        ...searchParams.get('rating') && { rating: searchParams.get('rating')},
      })
    } else {
      setCheckBoxSelected(checkBoxSelected.filter(value => value !== event.target.name));
      searchParams({
        ...searchParams.get('searchTerm') && { searchTerm: searchParams.get('searchTerm')},
        cuisine: 'y aint u working',
        ...searchParams.get('rating') && { rating: searchParams.get('rating')},
      })
    }
    if (categories.some((element)=> element === event.target.name)) {
      setCategories(categories.filter((element) => element !== (event.target.name) ));
    } else {
      setCategories([...categories, event.target.name]);
    }
  }

  // fires when a star rating is selected, updates the radioSelected state and searchParam with the value from the star rating and keeps the other values if they exist.
  const handleRatingChange = (event) =>{
    setRadioSelected(event.target.id);
    setSearchParams({
      ...searchParams.get('searchTerm') && { searchTerm: searchParams.get('searchTerm')},
      ...searchParams.get('cuisine') && {cuisine: searchParams.getAll('cuisine')},
      rating: event.target.id
    });
  }

  // renders the mobile list
  const handleListClick = () => {
    mobileFilter === 'Filter__none'? setMobileFilter('') : setMobileFilter('Filter__none')
  }

  // clears the categories, checkboxSelected and searchParam of the values from cuisine, clears all the checked checkboxes and removes the values from the searchparams while keeping the other values if they exist
  const handleClearCuisine = () => {
    setCategories([]);
    setCheckBoxSelected([]);
    setSearchParams({
      ...searchParams.get('searchTerm') && { searchTerm: searchParams.get('searchTerm')},
      ...!searchParams.get('cuisine') && {cuisine: searchParams.getAll('cuisine')},
      ...searchParams.get('rating') && { rating: searchParams.get('rating')}
    });
  }

  // clears the rating and searchParam of the values from rating, clears the radioslected and removes the values from the searchparams while keeping the other values if they exist
  const handleClearRating = () => {
    setRadioSelected('');
    setSearchParams({
      ...searchParams.get('searchTerm') && { searchTerm: searchParams.get('searchTerm')},
      ...searchParams.get('cuisine') && {cuisine: searchParams.getAll('cuisine')},
      ...!searchParams.get('rating') && { rating: searchParams.get('rating')}
    });
  }
  return(
    <section className='restaurantFilter__container'>
      <section className='restaurantFilterMobile'>
        <section className='restaurantFilter__filter'>
          <p>{filterTitle()}</p>
          <BsFillFilterSquareFill onClick={handleListClick}/>
        </section>
      </section>
  
      <section className={`restaurantFilterDesktop ${mobileFilter}`} >
         <section className='restaurantFilter__filter'>
           <p>{filterTitle()}</p>
         </section>
          <article>
            <section className='restaurantFilter__filter'>
              <p>{filterCuisine()}</p>
              <p onClick={handleClearCuisine} className='restaurantFilter_clear'>{filterClear()}</p>
            </section>
              <section className='popularFilter'>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='asian'
                    name='asian'
                    checked={checkBoxSelected.includes('asian')}
                    onChange={handleCategoriesChange}
                  />
                  {filterAsian()}
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='fastfood'
                    name='fastfood'
                    checked={checkBoxSelected.includes('fastfood')}
                    onChange={handleCategoriesChange}
                  />
                  {filterFastFood()}
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='italian'
                    name='italian'
                    checked={checkBoxSelected.includes('italian')}
                    onChange={handleCategoriesChange}
                  />
                  {filterItalian()}
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='mexican'
                    name='mexican'
                    checked={checkBoxSelected.includes('mexican')}
                    onChange={handleCategoriesChange}
                  />
                  {filterMexican()}
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='breakfast'
                    name='breakfast'
                    checked={checkBoxSelected.includes('breakfast')}
                    onChange={handleCategoriesChange}
                  />
                  {filterBreakfast()}
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='tipical'
                    name='tipical'
                    checked={checkBoxSelected.includes('tipical')}
                    onChange={handleCategoriesChange}
                  />
                  {filterTipical()}
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='dessert'
                    name='dessert'
                    checked={checkBoxSelected.includes('dessert')}
                    onChange={handleCategoriesChange}
                  />
                  {filterDessert()}
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='vegetarian'
                    name='vegetarian'
                    checked={checkBoxSelected.includes('vegetarian')}
                    onChange={handleCategoriesChange}
                  />
                  {filterVeg()}
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='bar'
                    name='bar'
                    checked={checkBoxSelected.includes('bar')}
                    onChange={handleCategoriesChange}
                  />
                  Bar
                </label>
                <label>
                  <input 
                    type='checkbox'
                    className='filterCheckbox'
                    id='coffee'
                    name='coffee'
                    checked={checkBoxSelected.includes('coffee')}
                    onChange={handleCategoriesChange}
                  />
                  {filterCoffee()}
                </label>
              </section>
            </article>
            <article>
              <section className='restaurantFilter__filter'>
                <p>{filterRating()}</p>
                <p onClick={handleClearRating} className='restaurantFilter_clear'>{filterClear()}</p>
              </section>
              <section className='popularFilter'>
                <label for='5'>
                  <input 
                    type='radio'
                    className='filterCheckbox'
                    id='5'
                    name='rating'
                    checked={radioSelected === '5'}
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='radio'
                    className='filterCheckbox'
                    id='4'
                    name='rating'
                    checked={radioSelected === '4'}
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='radio'
                    className='filterCheckbox'
                    id='3'
                    name='rating'
                    checked={radioSelected === '3'}
                    onChange={handleRatingChange}
                  />
                  ⭐⭐⭐
                </label>
                <label>
                  <input 
                    type='radio'
                    className='filterCheckbox'
                    id='2'
                    name='rating'
                    checked={radioSelected === '2'}
                    onChange={handleRatingChange}
                  />
                  ⭐⭐
                </label>
              </section>
            </article>
            <div className='helpButton'>
              <ImInfo/>
              <b>{filterHelp()}</b>
            </div>
            <h3>856-215-211</h3>
            <span>{filterShcedule()} 9:00 AM - 7:30 PM</span>
      </section>
    </section>
  )
}

export default RestaurantFilterComponent;