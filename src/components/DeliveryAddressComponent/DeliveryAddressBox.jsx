import React from "react";

const DeliveryAddressBox = ({ el, setData, data, index }) => {
  const handleDelete = (index) => {
    setData(data.filter((item, i) => i !== index));
  };
  return (
    <section className="delivery-personal-info">
      <div className="delivery-content">
        <h3 className="delivery-content__name">{el.name}</h3>
        <button className="delivery-content__button">Home</button>
      </div>
      <p className="delivery-personal-info-data">{el.address}</p>
      <p className="delivery-personal-info-data">{el.city}</p>
      <p className="delivery-personal-info-data">{el.mobileNumber}</p>
      <p className="delivery-personal-info-data">{`Mobile: ${el.mobileNumber}`}</p>
      <div className="delivery-buttons">
        <button className="delivery-button--green">Edit</button>
        <button
          className="delivery-button--red"
          onClick={(index) => handleDelete(index)}
        >
          Remove
        </button>
      </div>
    </section>
  );
};

export default DeliveryAddressBox;
