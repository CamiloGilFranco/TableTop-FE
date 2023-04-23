import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";
import axios from "axios";
import { API_URL } from "../../constants/apiUrl";

const DeliveryAddressBox = ({
  index,
  id,
  name,
  address,
  city,
  setAddressSelected,
  addressSelected,
  handleDelete,
  setNewRenderList,
  newRenderList,
  setDeliveryAddress,
}) => {
  const styleChange = () => {
    if (addressSelected === `option${index}`) {
      return "delivery-address-box-selected-style";
    } else {
      return "";
    }
  };

  const language = useSelector((state) => state.languageReducer);

  const handleRemove = (event) => {
    event.preventDefault();
    handleDelete(index);

    axios.delete(`${API_URL}/user-address/${id}`).then(() => {
      setNewRenderList(!newRenderList);
    });
  };

  return (
    <div className="delivery-address-single-box">
      <input
        type="radio"
        id={`addressN${index}`}
        name="addressOption"
        value={`option${index}`}
        checked={addressSelected === `option${index}`}
        className="delivery-address-box-radio"
        onChange={(event) => {
          setAddressSelected(`option${index}`);
          setDeliveryAddress({ address, city });
        }}
      />
      <label
        htmlFor={`addressN${index}`}
        className={`delivery-personal-info ${styleChange()}`}
      >
        <h3 className="delivery-content__name">{name}</h3>

        <p className="delivery-personal-info-data">{address}</p>
        <p className="delivery-personal-info-data delivery-personal-info-data-last">
          {city}
        </p>

        <button className="delivery-button--red" onClick={handleRemove}>
          {languageSelector(language, "remove")}
        </button>
      </label>
    </div>
  );
};

export default DeliveryAddressBox;
