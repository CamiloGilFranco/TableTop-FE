const LoginFormComponent = ({ setWhichForm }) => {
  return (
    <form action="" className="log-in-form-main-form-form">
      <div className="log-in-form-main-form-input-box">
        <label htmlFor="log-in-user" className="log-in-form-main-form-label">
          Correo
        </label>
        <input
          type="text"
          id="log-in-user"
          className="log-in-main-form-input"
          placeholder="Correo"
        />
      </div>
      <div className="log-in-form-main-form-input-box">
        <label
          htmlFor="log-in-password"
          className="log-in-form-main-form-label"
        >
          Contraseña
        </label>
        <input
          type="password"
          id="log-in-password"
          className="log-in-main-form-input"
          placeholder="Contraseña"
        />
      </div>
      <input
        type="submit"
        className="log-in-main-form-button"
        value="Ingresar"
      />
      <span
        className="log-in-main-form-forgot-password"
        onClick={() => setWhichForm(false)}
      >
        ¿Olvidaste tu contraseña? Recupérala aquí
      </span>
    </form>
  );
};

export default LoginFormComponent;
