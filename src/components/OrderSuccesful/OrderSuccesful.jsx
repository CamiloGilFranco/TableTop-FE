import './OrderSuccesful.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const OrderSuccesful = () =>{
    return(
        <section className='orderSuccesful__container'>
            <picture>
                <BsFillCheckCircleFill className='orderSuccesful__icon'/>
            </picture>
            <section className='orderSuccesful__text'>
                <h3>Payment Successful! Get Ready for Delicious Food.</h3>
                <span>Thank You For Your Payment. We Have Recieved Your Payment Succesfully. Your Transaction ID Is "SHJG12155125". You Will Get An Email Invoice Soon!</span>
                <button className='orderSuccesful__button'>Download Invoice</button>
            </section>
        </section>
    )
}

export default OrderSuccesful;