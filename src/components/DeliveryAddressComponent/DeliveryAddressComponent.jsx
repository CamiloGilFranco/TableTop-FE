import "./DeliveryAddressComponent.css";
import DeliveryAddressBox from "./DeliveryAddressBox";
import FormComponent from "./FormComponent";
import { useModal } from "./hooks/UseModal";
import { useEffect, useState } from "react";
import Modal from "./modal/Modal";
import addresses from "../../assets/dataAddress.json";
import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";
import axios from "axios";
import { API_URL } from "../../constants/apiUrl";
import Cookies from "universal-cookie";

const DeliveryAddressComponent = ({ setDeliveryAddress }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [addressList, setAddressList] = useState(addresses);
  const language = useSelector((state) => state.languageReducer);
  const cookies = new Cookies();
  const [addressesList, setAddressesList] = useState(null);
  const [newRenderList, setNewRenderList] = useState(false);
  const [addressSelected, setAddressSelected] = useState("");

  const renderList = () => {
    axios
      .get(`${API_URL}/users/payment`, {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      })
      .then((res) => {
        setAddressesList(res.data.data.addresses);
      });
  };

  useEffect(renderList, []);
  useEffect(renderList, [newRenderList]);

  const handleDelete = (index) => {
    const newAddressList = [...addressList];
    newAddressList.splice(index, 1);
    setAddressList(newAddressList);
  };

  const handleNewAddress = (newAddress) => {
    setAddressList([...addressList, newAddress]);
  };

  return (
    <>
      <section className="delivery-address-container">
        <h2 className="delivery-container-title">
          {languageSelector(language, "deliveryAddress")}:
        </h2>
        <div className="delivery-save-info">
          <h3 className="delivery-save-info__value">
            {languageSelector(language, "savedAddresses")}
          </h3>
          <button className="delivery-save-info__button" onClick={openModal1}>
            + {languageSelector(language, "addAddress")}
          </button>
        </div>
        <form className="delivery-main-box">
          {addressesList &&
            addressesList.map((element, index) => (
              <DeliveryAddressBox
                key={index}
                index={index}
                id={element.id_address}
                name={element.address_name}
                address={element.address}
                city={element.city}
                setAddressSelected={setAddressSelected}
                addressSelected={addressSelected}
                handleDelete={handleDelete}
                setNewRenderList={setNewRenderList}
                newRenderList={newRenderList}
                setDeliveryAddress={setDeliveryAddress}
              />
            ))}
        </form>
      </section>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <FormComponent
          handleNewAddress={handleNewAddress}
          closeModal={closeModal1}
          newRenderList={newRenderList}
          setNewRenderList={setNewRenderList}
        />
      </Modal>
    </>
  );
};

export default DeliveryAddressComponent;
