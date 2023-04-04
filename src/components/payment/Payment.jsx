import "./payment.css";
import { useSelector, useDispatch } from "react-redux";
import {
  ORDER_SWITCH,
  ORDER_ID,
  ORDER_NUMBER,
} from "../../store/reducers/Order.reducer";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import languageSelector from "../../assets/languages/languageSelector";

const Payment = () => {
  const dispatch = useDispatch();
  const oderStatus = useSelector((state) => state.orderReducer);
  const navigate = useNavigate();
  const language = useSelector(state => state.languageReducer);

  const [debitCard, setDebitCard] = useState({
    cardNumber: "",
    names: "",
    dueDate: "",
    cvv: "",
    type: "CC",
    documentNumber: "",
  });

  const [creditCard, setCreditCard] = useState({
    cardNumber: "",
    names: "",
    dueDate: "",
    cvv: "",
    type: "CC",
    documentNumber: "",
  });

  const [bankPSE, setBankPSE] = useState("BAN100");

  useEffect(() => {
    if (
      debitCard.cardNumber.length === 4 ||
      debitCard.cardNumber.length === 9 ||
      debitCard.cardNumber.length === 14
    ) {
      setDebitCard({ ...debitCard, cardNumber: debitCard.cardNumber + " " });
    }

    if (debitCard.dueDate.length === 2) {
      setDebitCard({ ...debitCard, dueDate: debitCard.dueDate + "/" });
    }
  }, [debitCard]);

  useEffect(() => {
    if (
      creditCard.cardNumber.length === 4 ||
      creditCard.cardNumber.length === 9 ||
      creditCard.cardNumber.length === 14
    ) {
      setCreditCard({ ...creditCard, cardNumber: creditCard.cardNumber + " " });
    }

    if (creditCard.dueDate.length === 2) {
      setCreditCard({ ...creditCard, dueDate: creditCard.dueDate + "/" });
    }
  }, [creditCard]);

  const [debitCardNumberError, setDebitCardNumberError] = useState(false);
  const [debitNamesError, setDebitNamesError] = useState(false);
  const [debitDueDateError, setDebitDueDateError] = useState(false);
  const [debitCVVError, setDebitCVVError] = useState(false);
  const [debitDocNumberError, setDebitDocNumberError] = useState(false);

  const [creditCardNumberError, setCreditCardNumberError] = useState(false);
  const [creditNamesError, setCreditNamesError] = useState(false);
  const [creditDueDateError, setCreditDueDateError] = useState(false);
  const [creditCVVError, setCreditCVVError] = useState(false);
  const [creditDocNumberError, setCreditDocNumberError] = useState(false);

  const cardNumberRegExp = /^([0-9]{4}\s){3}[0-9]{4}$/;
  const nombresRegExp = /[^a-zA-ZñÑáéíóúAÉÍÓÚ\s\.]/g;
  const dueDateRegExp = /^[0-9]{2}\/[0-9]{2}$/;
  const cvvRegExp = /^[0-9]{3}$/;

  const debitSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!cardNumberRegExp.test(debitCard.cardNumber)) {
      setDebitCardNumberError(true);
      isValid = false;
    } else {
      setDebitCardNumberError(false);
    }

    if (nombresRegExp.test(debitCard.names)) {
      setDebitNamesError(true);
      isValid = false;
    } else {
      setDebitNamesError(false);
    }

    if (!dueDateRegExp.test(debitCard.dueDate)) {
      setDebitDueDateError(true);
      isValid = false;
    } else {
      setDebitDueDateError(false);
    }

    if (!cvvRegExp.test(debitCard.cvv)) {
      setDebitCVVError(true);
      isValid = false;
    } else {
      setDebitCVVError(false);
    }

    if (
      debitCard.documentNumber.length < 6 ||
      debitCard.documentNumber.length > 12
    ) {
      setDebitDocNumberError(true);
      isValid = false;
    } else {
      setDebitDocNumberError(false);
    }

    if (isValid) {
      //logica de procesamiento del formulario
      console.log("pago con tarjeta debito procesado");
      dispatch({ type: ORDER_SWITCH, payload: !oderStatus.orderSuccessful });
      dispatch({ type: ORDER_ID, payload: oderStatus.numberOfOrders + 1 });
      dispatch({ type: ORDER_NUMBER, payload: oderStatus.numberOfOrders + 1 });
      navigate("/order");
    }
  };

  const creditSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!cardNumberRegExp.test(creditCard.cardNumber)) {
      setCreditCardNumberError(true);
      isValid = false;
    } else {
      setCreditCardNumberError(false);
    }

    if (nombresRegExp.test(creditCard.names)) {
      setCreditNamesError(true);
      isValid = false;
    } else {
      setCreditNamesError(false);
    }

    if (!dueDateRegExp.test(creditCard.dueDate)) {
      setCreditDueDateError(true);
      isValid = false;
    } else {
      setCreditDueDateError(false);
    }

    if (!cvvRegExp.test(creditCard.cvv)) {
      setCreditCVVError(true);
      isValid = false;
    } else {
      setCreditCVVError(false);
    }

    if (
      creditCard.documentNumber.length < 6 ||
      creditCard.documentNumber.length > 12
    ) {
      setCreditDocNumberError(true);
      isValid = false;
    } else {
      setCreditDocNumberError(false);
    }

    if (isValid) {
      //logica de procesamiento del formulario
      console.log("pago con tarjeta de crédito procesado");
      dispatch({ type: ORDER_SWITCH, payload: !oderStatus.orderSuccessful });
      dispatch({ type: ORDER_ID, payload: oderStatus.numberOfOrders + 1 });
      dispatch({ type: ORDER_NUMBER, payload: oderStatus.numberOfOrders + 1 });
      navigate("/order");
    }
  };

  const PSESubmit = (event) => {
    event.preventDefault();
    console.log("pago con PSE procesado");
    dispatch({ type: ORDER_SWITCH, payload: !oderStatus.orderSuccessful });
    dispatch({ type: ORDER_ID, payload: oderStatus.numberOfOrders + 1 });
    dispatch({ type: ORDER_NUMBER, payload: oderStatus.numberOfOrders + 1 });
    navigate("/order");
  };

  return (
    <main className="payment-container">
      <h2 className="payment-container__init-title">{languageSelector(language, 'payment')}</h2>
      <section className="payment-content">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton className="payment-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  {languageSelector(language, 'paymentDebitCard')}
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <form action="" className="debit-card-form">
                <label htmlFor="debitNumber" className="debit-card-form-label">
                {languageSelector(language, 'paymentCardNumber')}
                </label>
                <input
                  type="text"
                  id="debitNumber"
                  value={debitCard.cardNumber}
                  onChange={(e) =>
                    setDebitCard({ ...debitCard, cardNumber: e.target.value })
                  }
                  className="debit-card-text-input"
                />
                {debitCardNumberError ? (
                  <p className="payment-form-error-message">
                    {languageSelector(language, 'paymentCreditError')}
                  </p>
                ) : (
                  ""
                )}
                <label htmlFor="debitNames" className="debit-card-form-label">
                  {languageSelector(language, 'name')}
                </label>
                <input
                  type="text"
                  id="debitNames"
                  value={debitCard.names}
                  onChange={(e) =>
                    setDebitCard({ ...debitCard, names: e.target.value })
                  }
                  className="debit-card-text-input"
                />
                {debitNamesError ? (
                  <p className="payment-form-error-message">
                    {languageSelector(language, 'paymentNameError')}
                  </p>
                ) : (
                  ""
                )}
                <div className="debit-card-form-due-cvv">
                  <div className="debit-card-form-due-container">
                    <label htmlFor="debitDue" className="debit-card-form-label">
                      {languageSelector(language, 'paymentValidThrough')}
                    </label>
                    <input
                      type="text"
                      id="debitDue"
                      value={debitCard.dueDate}
                      onChange={(e) =>
                        setDebitCard({ ...debitCard, dueDate: e.target.value })
                      }
                      className="debit-card-text-input"
                    />
                    {debitDueDateError ? (
                      <p className="payment-form-error-message">
                        {languageSelector(language, 'paymentDateError')}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="debit-card-form-cvv-container">
                    <label htmlFor="debitDue" className="debit-card-form-label">
                      CVV
                    </label>
                    <input
                      type="number"
                      id="debitDue"
                      value={debitCard.cvv}
                      onChange={(e) =>
                        setDebitCard({ ...debitCard, cvv: e.target.value })
                      }
                      className="debit-card-text-input"
                    />
                    {debitCVVError ? (
                      <p className="payment-form-error-message">
                        {languageSelector(language, 'paymentCvvError')}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="debit-card-form-type-DocNum">
                  <div className="debit-card-form-type-container">
                    <label
                      htmlFor="debitType"
                      className="debit-card-form-label"
                    >
                      {languageSelector(language, 'signInId')}
                    </label>
                    <select
                      type="text"
                      id="debitType"
                      value={debitCard.type}
                      onChange={(e) =>
                        setDebitCard({ ...debitCard, type: e.target.value })
                      }
                      className="debit-card-text-input"
                    >
                      <option value="CC">CC</option>
                      <option value="TI">TI</option>
                      <option value="CE">CE</option>
                      <option value="PS">PS</option>
                    </select>
                  </div>
                  <div className="debit-card-form-DocNum-container">
                    <label
                      htmlFor="debitDocNum"
                      className="debit-card-form-label"
                    >
                      {languageSelector(language, 'number')}
                    </label>
                    <input
                      type="number"
                      id="debitDocNum"
                      value={debitCard.documentNumber}
                      onChange={(e) =>
                        setDebitCard({
                          ...debitCard,
                          documentNumber: e.target.value,
                        })
                      }
                      className="debit-card-text-input"
                    />
                    {debitDocNumberError ? (
                      <p className="payment-form-error-message">
                        {languageSelector(language, 'paymentNumberError')}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <button
                  className="button-payment__make-pay"
                  onClick={debitSubmit}
                >
                  <b>
                    {languageSelector(language, 'paymentMakePayment')}
                  </b>
                </button>
              </form>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className="payment-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  {languageSelector(language, 'paymentCreditCard')}
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <form action="" className="debit-card-form">
                <label htmlFor="debitNumber" className="debit-card-form-label">
                  {languageSelector(language, 'paymentCardNumber')}
                </label>
                <input
                  type="text"
                  id="debitNumber"
                  value={creditCard.cardNumber}
                  onChange={(e) =>
                    setCreditCard({ ...creditCard, cardNumber: e.target.value })
                  }
                  className="debit-card-text-input"
                />
                {creditCardNumberError ? (
                  <p className="payment-form-error-message">
                    {languageSelector(language, 'paymentCreditError')}
                  </p>
                ) : (
                  ""
                )}
                <label htmlFor="debitNames" className="debit-card-form-label">
                  {languageSelector(language, 'name')}
                </label>
                <input
                  type="text"
                  id="debitNames"
                  value={creditCard.names}
                  onChange={(e) =>
                    setCreditCard({ ...creditCard, names: e.target.value })
                  }
                  className="debit-card-text-input"
                />
                {creditNamesError ? (
                  <p className="payment-form-error-message">
                    {languageSelector(language, 'paymentNameError')}
                  </p>
                ) : (
                  ""
                )}
                <div className="debit-card-form-due-cvv">
                  <div className="debit-card-form-due-container">
                    <label htmlFor="debitDue" className="debit-card-form-label">
                      {languageSelector(language, 'paymentValidThrough')}
                    </label>
                    <input
                      type="text"
                      id="debitDue"
                      value={creditCard.dueDate}
                      onChange={(e) =>
                        setCreditCard({
                          ...creditCard,
                          dueDate: e.target.value,
                        })
                      }
                      className="debit-card-text-input"
                    />
                    {creditDueDateError ? (
                      <p className="payment-form-error-message">
                        {languageSelector(language, 'paymentDateError')}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="debit-card-form-cvv-container">
                    <label htmlFor="debitDue" className="debit-card-form-label">
                      CVV
                    </label>
                    <input
                      type="number"
                      id="debitDue"
                      value={creditCard.cvv}
                      onChange={(e) =>
                        setCreditCard({
                          ...creditCard,
                          cvv: e.target.value,
                        })
                      }
                      className="debit-card-text-input"
                    />
                    {creditCVVError ? (
                      <p className="payment-form-error-message">
                        {languageSelector(language, 'paymentCvvError')}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="debit-card-form-type-DocNum">
                  <div className="debit-card-form-type-container">
                    <label
                      htmlFor="debitType"
                      className="debit-card-form-label"
                    >
                      {languageSelector(language, 'signInId')}
                    </label>
                    <select
                      type="text"
                      id="debitType"
                      value={creditCard.type}
                      onChange={(e) =>
                        setCreditCard({ ...creditCard, type: e.target.value })
                      }
                      className="debit-card-text-input"
                    >
                      <option value="CC">CC</option>
                      <option value="TI">TI</option>
                      <option value="CE">CE</option>
                      <option value="PS">PS</option>
                    </select>
                  </div>
                  <div className="debit-card-form-DocNum-container">
                    <label
                      htmlFor="debitDocNum"
                      className="debit-card-form-label"
                    >
                      {languageSelector(language, 'number')}
                    </label>
                    <input
                      type="number"
                      id="debitDocNum"
                      value={creditCard.documentNumber}
                      onChange={(e) =>
                        setCreditCard({
                          ...creditCard,
                          documentNumber: e.target.value,
                        })
                      }
                      className="debit-card-text-input"
                    />
                    {creditDocNumberError ? (
                      <p className="payment-form-error-message">
                       {languageSelector(language, 'paymentNumberError')}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <button
                  className="button-payment__make-pay"
                  onClick={creditSubmit}
                >
                  <b>
                    {languageSelector(language, 'paymentMakePayment')}
                  </b>
                </button>
              </form>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className="payment-accordion-button">
                <div as="span" flex="1" textAlign="left">
                  PSE
                </div>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <form action="" className="debit-card-form">
                <label
                  htmlFor="bank-list-pse"
                  className="debit-card-form-label"
                >
                  {languageSelector(language, 'paymentSelectBank')}
                </label>
                <select
                  name="bank"
                  id="bank-list-pse"
                  value={bankPSE}
                  className="debit-card-text-input"
                  onChange={(e) => setBankPSE(e.target.value)}
                >
                  <option value="BAN100">BAN100</option>
                  <option value="BANCAMIA S.A.">BANCAMIA S.A.</option>
                  <option value="BANCO AGRARIO">BANCO AGRARIO</option>
                  <option value="BANCO AV VILLAS">BANCO AV VILLAS</option>
                  <option value="BANCO BBVA COLOMBIA S.A.">
                    BANCO BBVA COLOMBIA S.A.
                  </option>
                  <option value="BANCO CAJA SOCIAL">BANCO CAJA SOCIAL</option>
                  <option value="BANCO COOPERATIVO COOPCENTRAL">
                    BANCO COOPERATIVO COOPCENTRAL
                  </option>
                  <option value="BANCO DAVIVIENDA">BANCO DAVIVIENDA</option>
                  <option value="BANCO DE BOGOTA">BANCO DE BOGOTA</option>
                  <option value="BANCO DE OCCIDENTE">BANCO DE OCCIDENTE</option>
                  <option value="BANCO FALABELLA">BANCO FALABELLA</option>
                  <option value="BANCO FINANDINA S.A. BIC">
                    BANCO FINANDINA S.A. BIC
                  </option>
                  <option value="BANCO GNB SUDAMERIS">
                    BANCO GNB SUDAMERIS
                  </option>
                  <option value="BANCO ITAU">BANCO ITAU</option>
                  <option value="BANCO PICHINCHA S.A.">
                    BANCO PICHINCHA S.A.
                  </option>
                  <option value="BANCO POPULAR">BANCO POPULAR</option>
                  <option value="BANCO SANTANDER COLOMBIA">
                    BANCO SANTANDER COLOMBIA
                  </option>
                  <option value="BANCO SERFINANZA">BANCO SERFINANZA</option>
                  <option value="BANCO UNION antes GIROS">
                    BANCO UNION antes GIROS
                  </option>
                  <option value="BANCOLOMBIA">BANCOLOMBIA</option>
                  <option value="BANCOOMEVA S.A.">BANCOOMEVA S.A.</option>
                  <option value="CFA COOPERATIVA FINANCIERA">
                    CFA COOPERATIVA FINANCIERA
                  </option>
                  <option value="CITIBANK">CITIBANK</option>
                  <option value="COLTEFINANCIERA">COLTEFINANCIERA</option>
                  <option value="CONFIAR COOPERATIVA FINANCIERA">
                    CONFIAR COOPERATIVA FINANCIERA
                  </option>
                  <option value="COOFINEP COOPERATIVA FINANCIERA">
                    COOFINEP COOPERATIVA FINANCIERA
                  </option>
                  <option value="COTRAFA">COTRAFA</option>
                  <option value="DALE">DALE</option>
                  <option value="DAVIPLATA">DAVIPLATA</option>
                  <option value="IRIS">IRIS</option>
                  <option value="LULO BANK">LULO BANK</option>
                  <option value="MOVII S.A.">MOVII S.A.</option>
                  <option value="NEQUI">NEQUI</option>
                  <option value="RAPPIPAY">RAPPIPAY</option>
                  <option value="RAPPIPAY DAVIPLATA">RAPPIPAY DAVIPLATA</option>
                  <option value="SCOTIABANK COLPATRIA">
                    SCOTIABANK COLPATRIA
                  </option>
                </select>
                <button
                  className="button-payment__make-pay"
                  onClick={PSESubmit}
                >
                  <b>
                  {languageSelector(language, 'paymentMakePayment')}
                  </b>
                </button>
              </form>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
};
export { Payment };
