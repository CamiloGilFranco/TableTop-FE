import { useSelector } from 'react-redux';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import './OrderSuccesful.css'
import languageSelector from '../../assets/languages/languageSelector';

const OrderSuccesful = () =>{
  const language = useSelector(state=> state.languageReducer);
  const orderID = useSelector(state => state.orderReducer.orderID);

  return(
    <section className='orderSuccesful__container'>
      <picture>
        <BsFillCheckCircleFill className='orderSuccesful__icon'/>
      </picture>
      <section className='orderSuccesful__text'>
        <h3>{languageSelector(language, 'orderSuccessTitle')}</h3>
        <span>{languageSelector(language, 'orderSuccessBody')} #{orderID} {languageSelector(language, 'orderSuccessBodyTwo')}</span>
        <button className='orderSuccesful__button'>{languageSelector(language, 'orderSuccessFooter')}</button>
      </section>
    </section>
  )
}

export default OrderSuccesful;