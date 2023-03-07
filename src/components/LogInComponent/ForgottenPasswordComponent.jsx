const ForgottenPasswordComponent = ({ setWhichForm }) => {
  return (
    <div className="forgotten-password-component">
      <form action="" className="forgotten-password-component-form">
        <span className="forgotten-password-component-form-title">
          Recupera tu contraseña
        </span>
        <label
          htmlFor="forgotten-password-component-form-label"
          className="forgotten-password-component-form-label"
        >
          Correo
        </label>
        <input
          type="text"
          className="forgotten-password-component-form-input"
          placeholder="Correo"
        />
        <input
          type="submit"
          className="log-in-main-form-button"
          value="Recuperar"
        />
        <span
          className="forgotten-password-component-form-return"
          onClick={() => setWhichForm(true)}
        >
          ⬅ Volver al ingreso
        </span>
      </form>
    </div>
  );
};

export default ForgottenPasswordComponent;
