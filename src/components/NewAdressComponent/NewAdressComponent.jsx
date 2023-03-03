import './NewAdressComponent.css';
import { AiOutlineClose } from 'react-icons/ai'

const NewAdressComponent =()=>{
  return(
    <section className='newAddressComponent__flex'>
      <section className='newAddressComponent__container'>
        <header className='newAddressComponent__header'>
          <h3>Add New Adress</h3>
          <AiOutlineClose className='newAddressComponent__icon'/>
        </header>
        <form className='newAdressComponent__form'>
          <label className='newAdressComponent__textInput'>
            Name
            <input type='text' className='newAdressIntput'/>
          </label>
          <label className='newAdressComponent__textInput'>
            Mobile Number
            <input type='text' className='newAdressIntput'/>
          </label>
          <label className='newAdressComponent__textInput'>
            Adress
            <input type='text' className='newAdressIntput'/>
          </label>
          <label className='newAdressComponent__textInput'>
            City
            <input type='text' className='newAdressIntput'/>
          </label>
          <label className='newAdressComponent__textInput'>
            State
            <select className='newAdressIntput'>
              <option disabled>Choose...</option>
              <option>opt 1</option>
              <option>opt 2</option>
              <option>opt 3</option>
              <option>opt 4</option>
            </select>
          </label>
          <label className='newAdressComponent__textInput'>
            Zip Code
            <input type='text' className='newAdressIntput'/>
          </label>
            <footer className='newAdressComponent__footer'>
              <button type='submit' className='newAdressComponent__button addAdress'>Add Adress</button>
              <button type='submit' className='newAdressComponent__button'>Close</button>
            </footer>
        </form>
      </section>
    </section>
  )
}

export default NewAdressComponent;