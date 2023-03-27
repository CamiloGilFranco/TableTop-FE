import React, { useEffect } from "react";

const DeliveryAddressBox = ({
  index,
  name,
  mobileNumber,
  address,
  city,
  setAddressSelected,
  addressSelected,
  handleDelete,
}) => {
  const styleChange = () => {
    if (addressSelected === `option${index}`) {
      return "delivery-address-box-selected-style";
    } else {
      return "";
    }
  };

  /* const handleDelete = (index) => {
    setData(data.filter((item, i) => i !== index));
  }; */
  return (
    <div>
      <input
        type="radio"
        id={`addressN${index}`}
        name="addressOption"
        value={`option${index}`}
        checked={addressSelected === `option${index}`}
        className="delivery-address-box-radio"
        onChange={(event) => {
          setAddressSelected(`option${index}`);
        }}
      />
      <label
        htmlFor={`addressN${index}`}
        className={`delivery-personal-info ${styleChange()}`}
      >
        <h3 className="delivery-content__name">{name}</h3>

        <p className="delivery-personal-info-data">{address}</p>
        <p className="delivery-personal-info-data">{city}</p>
        <p className="delivery-personal-info-data delivery-personal-info-data-last">
          {mobileNumber}
        </p>

        <button
          className="delivery-button--red"
          onClick={(event) => {
            event.preventDefault();
            handleDelete(index);
          }}
        >
          Remove
        </button>
      </label>
    </div>
  );
};

export default DeliveryAddressBox;
