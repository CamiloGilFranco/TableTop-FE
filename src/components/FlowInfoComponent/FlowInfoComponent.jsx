import './FlowInfoComponent.css';
import { RiSmartphoneLine, RiEBikeFill } from 'react-icons/ri';
import { MdNotificationsActive } from'react-icons/md';
import { GiRiceCooker } from 'react-icons/gi'

const FlowInfoComponent =()=>{
    return(
        <section className='infoFlow__container'>
            <span className='infoFlow__title'>
                <h3>Super Easy Booking</h3>
            </span>
            <span className='infoFlow__text'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </span>
            <section className='infoFlow__card__container'>
                <span className='infoFlow__card'>
                    <RiSmartphoneLine className='flowInfo__icons'/>
                    <p>Order Food Threw Website or App</p>
                </span>
                <span className='infoFlow__card'>
                    <MdNotificationsActive className='flowInfo__icons'/>
                    <p>Users Receives Confirmation</p>
                </span>
                <span className='infoFlow__card'>
                    <GiRiceCooker className='flowInfo__icons'/>
                    <p>Order Processing & Food Preparation</p>
                </span>
                <span className='infoFlow__card'>
                    <RiEBikeFill className='flowInfo__icons'/>
                    <p>Food Is On Its Way To Deliver</p>
                </span>
            </section>
        </section>
    )
}

export default FlowInfoComponent;