import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { BsExclamationCircleFill } from 'react-icons/bs'
import './OrderFailed.css'

const OrderFailed = ()=>{

  const language = useSelector(state=> state.language.code);
  const orderFailedTitle = () => {
    switch (language) {
      case 'en':
        return en.orderFailedTitle
      case 'es':
        return es.orderFailedTitle
      default:
        return en.orderFailedTitle
    }
  }
  const orderFailedBody = () => {
    switch (language) {
      case 'en':
        return en.orderFailedBody
      case 'es':
        return es.orderFailedBody
      default:
        return en.orderFailedBody
    }
  }
  const orderFailedFooter = () => {
    switch (language) {
      case 'en':
        return en.orderFailedFooter
      case 'es':
        return es.orderFailedFooter
      default:
        return en.orderFailedFooter
    }
  }
  return(
    <section className='orderFailed__container'>
      <picture>
        <BsExclamationCircleFill className='orderFailed__icon'/>
      </picture>
      <section className='orderFailed__text'>
        <h3>{orderFailedTitle()}</h3>
        <span>{orderFailedBody()}</span>
        <button className='orderFailed__button'>{orderFailedFooter()}</button>
      </section>
    </section>
  )
}

export default OrderFailed;