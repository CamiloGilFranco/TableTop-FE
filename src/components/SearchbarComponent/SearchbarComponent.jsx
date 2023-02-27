import './SearchbarComponent.css';

const SearchbarComponent = ()=>{
    return (
        <section className='searchBar__container'>
            <span className='searchBar__text'>The Food You Love. Delivered With Care.</span>
            <form className='searchBar__form'>
                <input
                    className='searchBar__inputText' 
                    type='text'
                    placeholder={'Enter Your Location'}
                >
                    
                </input>
                <input
                    className='searchBar__inputText' 
                    type='text'
                    placeholder={'What Are You Craving?'}
                >
                    
                </input>
                <button 
                    type='sumbit'
                    className='searchBar__button'  
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