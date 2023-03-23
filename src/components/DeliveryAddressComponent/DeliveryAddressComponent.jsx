import "./DeliveryAddressComponent.css";
import DeliveryAddressBox from "./DeliveryAddressBox";
import FormComponent from "./FormComponent";
import { useModal } from "./hooks/UseModal";
import { useState } from "react";
import Modal from "./modal/Modal";

const DeliveryAddressComponent = ({ data }) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [address, setAddress] = useState(data);

  return (
    <>
      <section className="container">
        <h2 className="container-title">Delivery Address:</h2>
        <div className="save-info">
          <h3 className="save-info__value">Saved Address</h3>
          <button className="save-info__button" onClick={openModal1}>
            + Add New Address
          </button>
        </div>
        <main className="main-box">
          {address.map((el) => (
            <DeliveryAddressBox 
                key={el.name} 
                el={el} 
                setAddress = {setAddress}
                data = {data}
                index = {address.indexOf(el)}
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
