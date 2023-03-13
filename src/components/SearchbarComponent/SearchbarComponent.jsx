import './SearchbarComponent.css';
import { useState } from 'react';

const SearchbarComponent = ()=>{

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    setInputValue('');
  }
  return (
    <section className='searchBar__container'>
      <span className='searchBar__text'>The Food You Love. Delivered With Care.</span>
      <form className='searchBar__form'>
        <input
          className='searchBar__inputText' 
          type='text'
          id='searchButton'
          name='searchButton'
          placeholder={'What Are You Craving?'}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button 
          type='sumbit'
          className='searchBar__button'
          onClick={handleSearchButtonClick}
        >
          <b>
            Find Food
          </b>
        </button>
      </form>
    </section>
  )
}

export default SearchbarComponent;