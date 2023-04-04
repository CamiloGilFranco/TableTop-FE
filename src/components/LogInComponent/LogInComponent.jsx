import { useSelector } from 'react-redux';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgottenPasswordComponent from "./ForgottenPasswordComponent";
import LoginFormComponent from "./LoginFormComponent";
import "./LogInComponent.css";
import languageSelector from '../../assets/languages/languageSelector';

const LogInComponent = ({ setShowLogIn }) => {

  const language = useSelector(state=> state.languageReducer);

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
          <span className="log-in-main-title">{languageSelector(language, 'logInTitle')}</span>
          <span className="log-in-main-subtitle">
            {languageSelector(language, 'logInSubtitle')}
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
            {languageSelector(language, 'logInRegister')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogInComponent;
