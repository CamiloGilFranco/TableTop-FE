import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { toast, ToastContainer } from 'react-toastify';
import ForgottenPasswordComponent from "./ForgottenPasswordComponent";
import LoginFormComponent from "./LoginFormComponent";
import "./LogInComponent.css";
import languageSelector from '../../assets/languages/languageSelector';
import { setUser } from '../../store/actions/user.action';

const LogInComponent = ({ setShowLogIn }) => {

  const language = useSelector(state=> state.languageReducer);
  const user = useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();
  const [whichForm, setWhichForm] = useState(true);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleLogout = () => {
    dispatch(setUser({}));
    cookies.remove("token");
    cookies.remove("name");
    cookies.remove("last_name");
    cookies.remove("email");
    toast.success(languageSelector(language, "logOutSuccess"));
  };
  const isUserLoggedIn = Object.keys(user).length;

  return (
    <>
      <ToastContainer/>
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
          {isUserLoggedIn ? (
              <div className='log-in-main-form-buttons-container'>
                <button className='log-in-main-form-buttons' onClick={() => navigate('/user')}>
                  {languageSelector(language, 'userPage')}
                </button>
                <button className='log-in-main-form-buttons' onClick={handleLogout}>
                  {languageSelector(language, 'logOutText')}
                </button>
              </div>
            ) : (
              whichForm ? (
                <LoginFormComponent setWhichForm={setWhichForm} closeModal={() => setShowLogIn(false)}/>
              ) : (
                <ForgottenPasswordComponent setWhichForm={setWhichForm} />
              )
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
    </>
  );
};

export default LogInComponent;
