import { useSelector } from 'react-redux';
import { BsExclamationCircleFill } from 'react-icons/bs'
import './OrderFailed.css'
import languageSelector from '../../assets/languages/languageSelector';

const OrderFailed = ()=>{

  const language = useSelector(state=> state.languageReducer);
 
  return(
    <section className='orderFailed__container'>
      <picture>
        <BsExclamationCircleFill className='orderFailed__icon'/>
      </picture>
      <section className='orderFailed__text'>
        <h3>{languageSelector(language, 'orderFailedTitle')}</h3>
        <span>{languageSelector(language, 'orderFailedBody')}</span>
        <button className='orderFailed__button'>{languageSelector(language, 'orderFailedFooter')}</button>
      </section>
    </section>
  )
}

export default OrderFailed;