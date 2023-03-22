import './FlowInfoComponent.css';
import { RiSmartphoneLine, RiEBikeFill } from 'react-icons/ri';
import { MdNotificationsActive } from'react-icons/md';
import { GiRiceCooker } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';

const FlowInfoComponent =()=>{
  const language = useSelector(state=> state.languageReducer);

  const flowInfoTitle = () => {
    switch (language) {
      case 'en':
        return en.flowInfoTitle
      case 'es':
        return es.flowInfoTitle
      default:
        return en.flowInfoTitle
    }
  }
  const flowInfoCardOne = () => {
    switch (language) {
      case 'en':
        return en.flowInfoCardOne
      case 'es':
        return es.flowInfoCardOne
      default:
        return en.flowInfoCardOne
    }
  }
  const flowInfoCardTwo = () => {
    switch (language) {
      case 'en':
        return en.flowInfoCardTwo
      case 'es':
        return es.flowInfoCardTwo
      default:
        return en.flowInfoCardTwo
    }
  }
  const flowInfoCardThree = () => {
    switch (language) {
      case 'en':
        return en.flowInfoCardThree
      case 'es':
        return es.flowInfoCardThree
      default:
        return en.flowInfoCardThree
    }
  }
  const flowInfoCardFour = () => {
    switch (language) {
      case 'en':
        return en.flowInfoCardFour
      case 'es':
        return es.flowInfoCardFour
      default:
        return en.flowInfoCardFour
    }
  }

  return(
    <section className='infoFlow__container'>
      <span className='infoFlow__title'>
        <h3>{flowInfoTitle()}</h3>
      </span>
      <span className='infoFlow__text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </span>
      <section className='infoFlow__card__container'>
        <span className='infoFlow__card'>
          <RiSmartphoneLine className='flowInfo__icons'/>
          <p>{flowInfoCardOne()}</p>
        </span>
        <span className='infoFlow__card'>
          <MdNotificationsActive className='flowInfo__icons'/>
          <p>{flowInfoCardTwo()}</p>
        </span>
        <span className='infoFlow__card'>
          <GiRiceCooker className='flowInfo__icons'/>
          <p>{flowInfoCardThree()}</p>
        </span>
        <span className='infoFlow__card'>
          <RiEBikeFill className='flowInfo__icons'/>
          <p>{flowInfoCardFour()}</p>
        </span>
      </section>
    </section>
    )
}

export default FlowInfoComponent;