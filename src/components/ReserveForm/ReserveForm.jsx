import "./ReserveForm.css";

const ReserveForm = () => {
  return (
    <form action="" className="reserve-form">
      <div className="reserve-form-input-container">
        <input
          type="text"
          placeholder="First Name"
          className="reserve-form-input"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="reserve-form-input"
        />
        <input
          type="email"
          placeholder="Email"
          className="reserve-form-input"
        />
        <input
          type="tel"
          placeholder="Phone No:"
          className="reserve-form-input"
        />
        <div className="reserve-form-input-date-container">
          <input
            type="text"
            className="reserve-form-input-date-text"
            placeholder="Choose Date & Time"
          />
          <input type="datetime-local" className="reserve-form-input-date" />
        </div>
        <input
          type="text"
          placeholder="Person"
          className="reserve-form-input"
        />
      </div>
      <div className="reserve-form-button-container">
        <input type="submit" value="SUBMIT" className="reserve-form-button" />
      </div>
    </form>
  );
};

export default ReserveForm;
