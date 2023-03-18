import './SearchbarComponent.css';

const SearchbarComponent = ({ inputValue, setInputValue })=>{


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
      <span className='searchBar__text'>The Food You Love. Delivered With Care.</span>
      <form className='searchBar__form'  onSubmit={handleSearchSumbit}>
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
        >
          <b>
            Find a restaurant
          </b>
        </button>
      </form>
    </section>
  )
}

export default SearchbarComponent;