import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgottenPasswordComponent from "./ForgottenPasswordComponent";
import LoginFormComponent from "./LoginFormComponent";
import "./LogInComponent.css";

const LogInComponent = ({ setShowLogIn }) => {

  const language = useSelector(state=> state.languageReducer);
  const logInTitle = () => {
    switch (language) {
      case 'en':
        return en.logInTitle
      case 'es':
        return es.logInTitle
      default:
        return en.logInTitle
    }
  }
  const logInSubtitle = () => {
    switch (language) {
      case 'en':
        return en.logInSubtitle
      case 'es':
        return es.logInSubtitle
      default:
        return en.logInSubtitle
    }
  }
  const logInRegister = () => {
    switch (language) {
      case 'en':
        return en.logInRegister
      case 'es':
        return es.logInRegister
      default:
        return en.logInRegister
    }
  }

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
          <span className="log-in-main-title">{logInTitle()}</span>
          <span className="log-in-main-subtitle">
            {logInSubtitle()}
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
            onClick={() => navigate("/register")}
          >
            {logInRegister()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
