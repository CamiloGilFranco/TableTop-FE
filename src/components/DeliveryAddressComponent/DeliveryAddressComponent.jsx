import "./DeliveryAddressComponent.css";
import DeliveryAddressBox from "./DeliveryAddressBox";
import FormComponent from "./FormComponent";
import { useModal } from "./hooks/UseModal";
import { useState } from "react";
import Modal from "./modal/Modal";
import addresses from "../../assets/dataAddress.json";

const DeliveryAddressComponent = ({ data }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [address, setAddress] = useState(addresses);

  return (
    <>
      <section className="delivery-address-container">
        <h2 className="delivery-container-title">Delivery Address:</h2>
        <div className="delivery-save-info">
          <h3 className="delivery-save-info__value">Saved Address</h3>
          <button className="delivery-save-info__button" onClick={openModal1}>
            + Add New Address
          </button>
        </div>
        <main className="delivery-main-box">
          {address.map((el, index) => (
            <DeliveryAddressBox
              key={index}
              el={el}
              setAddress={setAddress}
              data={data}
              index={address.indexOf(el)}
            />
          ))}
        </main>
      </section>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <FormComponent />
      </Modal>
    </>
  );
};

export default DeliveryAddressComponent;
