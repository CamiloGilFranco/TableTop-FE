import './SearchbarComponent.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import languageSelector from '../../assets/languages/languageSelector';
import routePaths from '../../constants/routePaths';


const SearchbarComponent = ({ inputValue, setInputValue })=>{
  const [displayText, setDisplayText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const language = useSelector(state=> state.languageReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = (event) => {
    setDisplayText(event.target.value);
  }

  const handleSearchSumbit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.searchButton.value

    if (searchTerm.length <= 1) {
      alert('The search must be at least 2 characters long');
    } else if (location.pathname === '/'){
        navigate(`${routePaths.restaurants}?searchTerm=${searchTerm}`);
    } else {
        setSearchParams({
          searchTerm,
          ...searchParams.get('cuisine') && {cuisine: searchParams.getAll('cuisine')},
          ...searchParams.get('rating') && { rating: searchParams.get('rating')}
        });
      }
   form.reset();   
  }
  
  return (
    <section className='searchBar__container'>
      <span className='searchBar__text'>{languageSelector(language, 'searchBarTitle')}</span>
      <form className='searchBar__form'  onSubmit={handleSearchSumbit}>
        <input
          className='searchBar__inputText' 
          type='text'
          id='searchButton'
          name='searchButton'
          placeholder={languageSelector(language, 'searchBarPlaceHolder')}
          value={displayText}
          onChange={handleInputChange}
        />
        <button 
          type='sumbit'
          className='searchBar__button'
        >
          <b>
            {languageSelector(language, 'searchBarButton')}
          </b>
        </button>
      </form>
    </section>
  )
}

export default SearchbarComponent;