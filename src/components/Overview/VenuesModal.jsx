const VenuesModal = ({ setShowModal, infoModal }) => {
  return (
    <div className="venues-component-modal-container">
      <div
        className="venues-component-modal-background"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="venues-component-modal">
        <div className="venues-component-modal-img-container">
          <img
            src={infoModal.venue_photo}
            alt=""
            className="venues-component-modal-img"
          />
        </div>
        <p className="venues-component-modal-title">{infoModal.name_venue}</p>
        <p className="venues-component-modal-value">
          <span className="venues-component-modal-subtitle">City: </span>
          {infoModal.city}
        </p>
        <p className="venues-component-modal-value">
          <span className="venues-component-modal-subtitle">Address: </span>
          {infoModal.address}
        </p>
        <p className="venues-component-modal-value">
          <span className="venues-component-modal-subtitle">Schedule: </span>
          {`${infoModal.open_hour} -- ${infoModal.close_hour}`}
        </p>
        <p className="venues-component-modal-value">
          <span className="venues-component-modal-subtitle">
            Phone number:{" "}
          </span>
          {infoModal.phone_number}
        </p>
        <span className="venues-component-modal-subtitle">Facilities: </span>
        <div
          className="venues-component-modal-facilities-container"
          style={{ height: `${(infoModal.facilities.length * 24) / 2 + 48}px` }}
        >
          {infoModal.facilities.map((facility, index) => (
            <span
              className="venues-component-modal-facility"
              key={index}
            >{` - ${facility.facility}`}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenuesModal;
