import { useSelector, useDispatch } from "react-redux";
import { BsFillCheckCircleFill } from "react-icons/bs";
import "./OrderSuccesful.css";
import languageSelector from "../../assets/languages/languageSelector";
import { useEffect, useState } from "react";
import { API_URL } from "../../constants/apiUrl";
import axios from "axios";
import Cookies from "universal-cookie";
import { RESET_ORDER } from "../../store/reducers/Order.reducer";
import { type } from "@testing-library/user-event/dist/type";
import {
  RESET_CART,
  UPLOADSUBTOTAL,
} from "../../store/reducers/CartContent.reducer";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderSuccesful = () => {
  const language = useSelector((state) => state.languageReducer);
  const orderData = useSelector((state) => state.orderReducer);
  const price = useSelector((state) => state.subtotalReducer);
  const cart = useSelector((state) => state.cartReducer);
  const cookies = new Cookies();
  const [orderID, setOrderID] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const returnMessage = "Going back to the main page";

  useEffect(() => {
    const dishList = [];

    axios
      .post(
        `${API_URL}/orders`,
        {
          price,
          address: orderData.orderData.address,
          address_id: orderData.orderData.addressId,
          city: orderData.orderData.city,
          cart,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setOrderID(res.data.data.id_order);
        for (const dish of cart) {
          dishList.push({
            quantity: dish.quantity,
            ordersId_order: res.data.data.id_order,
            dishesId_dish: dish.id,
            restaurantsId_restaurant: dish.id_restaurant,
          });
        }
        axios
          .post(`${API_URL}/orders-details/several`, {
            dishList,
          })
          .then(() => {
            toast.success(returnMessage, {
              position: "bottom-right",
            });
            setTimeout(() => {
              dispatch({ type: UPLOADSUBTOTAL, payload: 0 });
              dispatch({ type: RESET_CART, payload: [] });
              dispatch({
                type: RESET_ORDER,
                payload: {
                  orderStatus: null,
                  orderData: {},
                },
              });

              navigate("/");
            }, 6000);
          });
      });
  }, []);

  return (
    <section className="orderSuccesful__container">
      <ToastContainer />
      <picture>
        <BsFillCheckCircleFill className="orderSuccesful__icon" />
      </picture>
      <section className="orderSuccesful__text">
        <h3>{languageSelector(language, "orderSuccessTitle")}</h3>
        <span>
          {languageSelector(language, "orderSuccessBody")} <b>#{orderID}</b>{" "}
          {languageSelector(language, "orderSuccessBodyTwo")}
        </span>
        <span>
          Your order will be delivered in{" "}
          {`${orderData.orderData.address} - ${orderData.orderData.city}`}
        </span>
      </section>
    </section>
  );
};

export default OrderSuccesful;
