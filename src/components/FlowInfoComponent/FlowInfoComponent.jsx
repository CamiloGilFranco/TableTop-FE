import './FlowInfoComponent.css';
import { RiSmartphoneLine, RiEBikeFill } from 'react-icons/ri';
import { MdNotificationsActive } from'react-icons/md';
import { GiRiceCooker } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import languageSelector from '../../assets/languages/languageSelector';

const FlowInfoComponent =()=>{
  const language = useSelector(state=> state.languageReducer);

  return(
    <section className='infoFlow__container'>
      <span className='infoFlow__title'>
        <h3>{languageSelector(language, 'flowInfoTitle')}</h3>
      </span>
      <span className='infoFlow__text'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </span>
      <section className='infoFlow__card__container'>
        <span className='infoFlow__card'>
          <RiSmartphoneLine className='flowInfo__icons'/>
          <p>{languageSelector(language, 'flowInfoCardOne')}</p>
        </span>
        <span className='infoFlow__card'>
          <MdNotificationsActive className='flowInfo__icons'/>
          <p>{languageSelector(language, 'flowInfoCardTwo')}</p>
        </span>
        <span className='infoFlow__card'>
          <GiRiceCooker className='flowInfo__icons'/>
          <p>{languageSelector(language, 'flowInfoCardThree')}</p>
        </span>
        <span className='infoFlow__card'>
          <RiEBikeFill className='flowInfo__icons'/>
          <p>{languageSelector(language, 'flowInfoCardFour')}</p>
        </span>
      </section>
    </section>
    )
}

export default FlowInfoComponent;