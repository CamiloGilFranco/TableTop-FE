import React from "react";

const DeliveryAddressBox = ({el, setData, data, index}) => {

  const handleDelete = (index) => {
    setData(data.filter((item, i) => i !== index))
  }
  return (
    <section className="personal-info">
      <div className="content">
        <h3 className="content__name">{el.name}</h3>
        <button className="content__button">Home</button>
      </div>
      <p className="personal-info-data">{el.address}</p>
      <p className="personal-info-data">{el.city}</p>
      <p className="personal-info-data">{el.mobileNumber}</p>
      <p className="personal-info-data">{`Mobile: ${el.mobileNumber}`}</p>
      <div className="buttons">
        <button className="button--green">Edit</button>
        <button className="button--red" onClick={(index) => handleDelete(index)}>Remove</button>
      </div>
    </section>
  );
};

export default DeliveryAddressBox;
