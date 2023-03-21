import './SearchbarComponent.css';
import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom'


const SearchbarComponent = ({ inputValue, setInputValue })=>{
  const [displayText, setDisplayText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const language = useSelector(state=> state.language.code);

  const titleText = () => {
    switch (language) {
      case 'en':
        return en.searchBarTitle
      case 'es':
        return es.searchBarTitle
      default:
        return en.searchBarTitle
    }
  }
  const placeholderText = () => {
    switch (language) {
      case 'en':
        return en.searchBarPlaceHolder
      case 'es':
        return es.searchBarPlaceHolder
      default:
        return en.searchBarPlaceHolder
    }
  }

  const buttonText = () => {
    switch (language) {
      case 'en':
        return en.searchBarButton
      case 'es':
        return es.searchBarButton
      default:
        return en.searchBarButton
    }
  }
  const handleInputChange = (event) => {
    setDisplayText(event.target.value);
  }

  const handleSearchSumbit = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.searchButton.value

    if (searchText.length <= 1) {
      alert('The search must be at least 2 characters long');
    } else {
      setInputValue(searchText);
      setSearchParams({searchTerm: searchText});
    }
   form.reset();
  }
  
  return (
    <section className='searchBar__container'>
      <span className='searchBar__text'>{titleText()}</span>
      <form className='searchBar__form'  onSubmit={handleSearchSumbit}>
        <input
          className='searchBar__inputText' 
          type='text'
          id='searchButton'
          name='searchButton'
          placeholder={placeholderText()}
          value={displayText}
          onChange={handleInputChange}
        />
        <button 
          type='sumbit'
          className='searchBar__button'
        >
          <b>
            {buttonText()}
          </b>
        </button>
      </form>
    </section>
  )
}

export default SearchbarComponent;