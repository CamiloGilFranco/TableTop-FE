import "./payment.css"
import typesCards from "./assets/typeCards.png"
import { BsRecord2 } from 'react-icons/bs'



const Payment = () => {
    return (
    <section className="target">
        <main className="content">
            <h2 className="init-title">Payment</h2>
            <section className="container">
                <div className="container__header">
                    <div className="container__header--icon">{<BsRecord2 color="red" size="30px" />}</div>
                    <p className="constainer__header--paragraph"><b>Debit Card</b></p>
                </div>
                <form action="" className="card-info">
                    <label for="nombre" className="card-info__name">
                        <p className="card-paragraph">Name On Card</p>
                        <input  type="text" id="nombre" className="card-info__number"/>
                    </label>
                    <label for="number">
                        <p className="card-paragraph">Card Number</p>
                        <div className="card">
                            <input  type="number" id="number" className="card__number"/>
                            <img src={typesCards} alt="" className="card-images"/>
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
        </section>
    )
}
export {Payment}