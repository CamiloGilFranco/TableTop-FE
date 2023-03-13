import "./LogInComponent.css";
import ForgottenPasswordComponent from "./ForgottenPasswordComponent";
import LoginFormComponent from "./LoginFormComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const LogInComponent = ({ setShowLogIn }) => {
  const [whichForm, setWhichForm] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="log-in-component">
      <div
        className="log-in-component-background"
        onClick={() => setShowLogIn(false)}
      ></div>
      <div className="log-in-form">
        <div className="log-in-form-title-box">
          <span className="log-in-main-title">Iniciar Sesión</span>
          <span className="log-in-main-subtitle">
            Entra con tu usuario registrado
          </span>
        </div>
        <div className="log-in-form-main-form">
          {whichForm ? (
            <LoginFormComponent setWhichForm={setWhichForm} />
          ) : (
            <ForgottenPasswordComponent setWhichForm={setWhichForm} />
          )}
        </div>
        <div className="log-in-sign-up">
          <span
            className="log-in-sign-up-text"
            onClick={() => navigate("/registro")}
          >
            ¿No estas registrado? Regístrate aquí
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
