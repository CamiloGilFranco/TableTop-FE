import "./payment.css"
import typesCards from "./assets/typeCards.png"
import {BsRecord2} from 'react-icons/bs'



const Payment = () => {
    return (
      <main className="payment-container">
            <h2 className="payment-container__init-title">Payment</h2>
            <section className="payment-content">
                <div className="payment-content__header">
                    <div className="payment-content__header--icon">{<BsRecord2 color="red" size="30px" />}</div>
                    <p className="payment-content__header--paragraph"><b>Debit Card</b></p>
                </div>
                <form action="" className="payment-form">
                    <label for="nombre" className="payment-form-name">
                        <p className="payment-form__paragraph">Name On Card</p>
                        <input  type="text" id="nombre" className="payment-form__input-name"/>
                    </label>
                    <label for="number">
                        <p className="payment-card-paragraph">Card Number</p>
                        <div className="payment-card-info">
                            <input  type="number" id="number" className="payment-card-info__number"/>
                            <img src={typesCards} alt="" className="payment-card-info__images"/>
                        </div>
                    </label>
                </form>
                <form action="" className="form-card">
                    <label for="month" className="form-card__date" >
                        <p className="card-paragraph">Month</p>
                        <input  type="month" id="month" placeholder="Month..." className="form-card__imput"/>
                    </label>
                    <label for="year" className="form-card__date">
                        <p className="card-paragraph">Year</p>
                        <input  type="year" id="year" className="form-card__imput"/>
                    </label>
                    <label for="cvv" className="form-card__date">
                        <p className="card-paragraph">Cvv</p>
                        <input  type="number" id="cvv" className="form-card__imput"/>
                    </label>
                </form>
                <div className="button-payment">
                    <button className="payment">MAKE PAYMENT</button>
                </div>
            </section>
            <form className="type">
                <div className="type__payment">
                    <input type="radio" id="card" name="fav_language" />
                    <label for="card" className="type-payment-text"><b>Credit Card</b></label><br/>
                </div>
                <div className="type__payment">
                    <input type="radio" id="net" name="fav_language"/>
                    <label for="net" className="type-payment-text"><b>Net Banking</b></label><br/>
                </div>
                <div className="type__payment">
                    <input type="radio" id="wallet" name="fav_language" className="input-final"/>
                    <label for="wallet" className="type-payment-text"><b>My Wallet</b></label>
                </div>
            </form>
        </main>

    )
}
export {Payment}