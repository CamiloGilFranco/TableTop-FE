import "./payment.css"
import typesCards from "./assets/typeCards.png"
import {BsRecord2} from 'react-icons/bs'



const Payment = () => {
    return (
        
        <main className="container-main">
            <h2 className="container-main__title">Payment:</h2>
            <section className="payment-form">
                <div className="payment-header">
                    <div className="payment-header__icon">{<BsRecord2 color="red" size="30px" />}</div>
                    <p className="payment-header__card"><b>Debit Card</b></p>
                </div>
                <form action="" className="info-card">
                    <label htmlFor="nombre" className="info-card__name">
                        <p className="info-card__title">Name On Card</p>
                        <input  type="text" id="nombre" className="info-card__input"/>
                    </label>
                    <label htmlFor="number" className="info-card__name">
                        <p className="info-card__title">Card Number</p>
                        <div className="container-input">
                            <input  type="number" id="number" className="container-input__box"/>
                            <div className="icon-container">
                            <img src={typesCards} alt="" className="container-input__logo"/>
                            </div>
                        </div>
                    </label>
                </form>
                <form action="" className="form-card">
                    <label htmlFor="month" className="form-card__info" >
                        <p className="card-paragraph">Month</p>
                        <input  type="month" id="month" placeholder="Month" className="form-card__input"/>
                    </label>
                    <label htmlFor="year" className="form-card__info">
                        <p className="card-paragraph">Year</p>
                        <input  type="year" id="year" className="form-card__input"/>
                    </label>
                    <label htmlFor="cvv" className="form-card__info">
                        <p className="card-paragraph">Cvv</p>
                        <input  type="number" id="cvv" className="form-card__input"/>
                    </label>
                </form>
                <div className="make-payment">
                    <button className="make-payment__button">MAKE PAYMENT</button>
                </div>
            </section>
                <form className="form-select">
                    <div className="payment-type">
                        <input type="radio" id="card" name="option"/>
                        <label htmlFor="card" className="payment-type__text"><b>Credit Card</b></label><br/>
                    </div>
                    <div className="payment-type">
                        <input type="radio" id="net" name="option"/>
                        <label htmlFor="net" className="payment-type__text"><b>Net Banking</b></label><br/>
                    </div>
                    <div className="payment-type">
                        <input type="radio" id="wallet" name="option" className="payment-type__input"/>
                        <label htmlFor="wallet" className="payment-type__text"><b>My Wallet</b></label>
                    </div>
                </form>
        </main>
    )
}
export {Payment}