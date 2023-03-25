import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import './OrderSuccesful.css'

const OrderSuccesful = () =>{
  const language = useSelector(state=> state.languageReducer);
  const orderID = useSelector(state => state.orderReducer.orderID)
  console.log(orderID);
  const orderSuccessTitle = () => {
    switch (language) {
      case 'en':
        return en.orderSuccessTitle
      case 'es':
        return es.orderSuccessTitle
      default:
        return en.orderSuccessTitle
    }
  }
  const orderSuccessBody = () => {
    switch (language) {
      case 'en':
        return en.orderSuccessBody
      case 'es':
        return es.orderSuccessBody
      default:
        return en.orderSuccessBody
    }
  }
  const orderSuccessFooter = () => {
    switch (language) {
      case 'en':
        return en.orderSuccessFooter
      case 'es':
        return es.orderSuccessFooter
      default:
        return en.orderSuccessFooter
    }
  }
  return(
    <section className='orderSuccesful__container'>
      <picture>
        <BsFillCheckCircleFill className='orderSuccesful__icon'/>
      </picture>
      <section className='orderSuccesful__text'>
        <h3>{orderSuccessTitle()}</h3>
        <span>{orderSuccessBody()}</span>
        <span>Transaction number #{orderID}</span>
        <button className='orderSuccesful__button'>{orderSuccessFooter()}</button>
      </section>
    </section>
  )
}

export default OrderSuccesful;