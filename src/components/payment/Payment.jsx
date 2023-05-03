import "./payment.css";
import { useSelector, useDispatch } from "react-redux";
import { NEW_ORDER } from "../../store/reducers/Order.reducer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import languageSelector from "../../assets/languages/languageSelector";
import routePaths from "../../constants/routePaths";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { API_URL } from "../../constants/apiUrl";
import Cookies from "universal-cookie";
import Loader from "../Loader/Loader";

const Payment = ({ deliveryAddress }) => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const oderStatus = useSelector((state) => state.orderReducer);
  const navigate = useNavigate();
  const language = useSelector((state) => state.languageReducer);
  const cartSubtotal = useSelector((state) => state.subtotalReducer);
  const [paymentData, setPaymentData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    dispatch({ type: NEW_ORDER, payload: paymentData });
    if (paymentData) {
      navigate("/order");
    }
  }, [paymentData]);

  const elements = useElements();
  const stripe = useStripe();

  const debitSubmit = async (event) => {
    event.preventDefault();

    if (!deliveryAddress.address) {
      toast.error("Choose an address to delivery", {
        position: "bottom-right",
      });
      return;
    }

    if (!cartSubtotal) {
      toast.error("Your cart is empty", {
        position: "bottom-right",
      });
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        email: cookies.get("email"),
        name: `${cookies.get("name")} ${cookies.get("last_name")}`,
        phone: null,
      },
    });

    if (error) {
      toast.error(error, {
        position: "bottom-right",
      });
      return;
    }

    try {
      setLoader(true);
      const response = await axios.post(`${API_URL}/checkout`, {
        paymentMethod,
        amount: Math.round((cartSubtotal / 4500) * 100),
      });

      setPaymentData({
        orderStatus: response.data.payment.status,
        orderData: {
          address: deliveryAddress.address,
          city: deliveryAddress.city,
          addressId: deliveryAddress.id_address,
        },
      });
      elements.getElement(CardElement).clear();
      setLoader(false);
    } catch (error) {
      toast.error(`Error ${error.response.data.decline_code}`, {
        position: "bottom-right",
      });
      setLoader(false);
    }
  };

  return (
    <main className="payment-container">
      <ToastContainer />
      {loader ? <Loader /> : ""}
      <h2 className="payment-container__init-title">
        {languageSelector(language, "payment")}
      </h2>
      <section className="payment-content">
        <form action="" className="debit-card-form">
          <label htmlFor="debitNumber" className="debit-card-form-label">
            {languageSelector(language, "paymentCardNumber")}
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "20px",
                },
              },
            }}
          />
          <button className="button-payment__make-pay" onClick={debitSubmit}>
            <b>{languageSelector(language, "paymentMakePayment")}</b>
          </button>
        </form>
      </section>
    </main>
  );
};
export { Payment };
