import './OrderFailed.css'
import { BsExclamationCircleFill } from 'react-icons/bs'

const OrderFailed = ()=>{
    return(
        <section className='orderFailed__container'>
            <picture>
                <BsExclamationCircleFill className='orderFailed__icon'/>
            </picture>
            <section className='orderFailed__text'>
                <h3>Oops! We Are Unable To Process Your Payment</h3>
                <span>Looks Like We Encountered An Error. Please Try Again. If You Continue To Have Issues Try Another Payment Method</span>
                <button className='orderFailed__button'>Try Again</button>
            </section>
        </section>
    )
}

export default OrderFailed