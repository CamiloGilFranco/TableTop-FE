import './SearchbarComponent.css';
import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';

const SearchbarComponent = ({ inputValue, setInputValue })=>{
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
    setInputValue(event.target.value);
  }

  const handleSearchSumbit = (event) => {
    event.preventDefault();

    inputValue.length >= 3 ? console.log('cumple con la condición') : alert('search term must be at least 3 characters long');
    setInputValue('');
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
          value={inputValue}
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