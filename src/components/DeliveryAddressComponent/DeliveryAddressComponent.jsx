import "./DeliveryAddressComponent.css";
import DeliveryAddressBox from "./DeliveryAddressBox";
import FormComponent from "./FormComponent";
import { useModal } from "./hooks/UseModal";
import { useState } from "react";
import Modal from "./modal/Modal";
import addresses from "../../assets/dataAddress.json";
import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";

const DeliveryAddressComponent = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [addressList, setAddressList] = useState(addresses);
  const [addressSelected, setAddressSelected] = useState("");
  const language = useSelector(state => state.languageReducer)

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
        <h2 className="delivery-container-title">{languageSelector(language, 'deliveryAddress')}:</h2>
        <div className="delivery-save-info">
          <h3 className="delivery-save-info__value">{languageSelector(language, 'savedAddresses')}</h3>
          <button className="delivery-save-info__button" onClick={openModal1}>
            + {languageSelector(language, 'addAddress')}
          </button>
        </div>
        <form className="delivery-main-box">
          {addressList.map((element, index) => (
            <DeliveryAddressBox
              key={index}
              index={index}
              name={element.name}
              mobileNumber={element.mobileNumber}
              address={element.address}
              city={element.city}
              setAddressSelected={setAddressSelected}
              addressSelected={addressSelected}
              handleDelete={handleDelete}
            />
          ))}
        </form>
      </section>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <FormComponent
          handleNewAddress={handleNewAddress}
          closeModal={closeModal1}
        />
      </Modal>
    </>
  );
};

export default DeliveryAddressComponent;
