import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';

const LoginFormComponent = ({ setWhichForm }) => {
  const language = useSelector(state=> state.languageReducer.code);
  const signInEmail = () => {
    switch (language) {
      case 'en':
        return en.signInEmail
      case 'es':
        return es.signInEmail
      default:
        return en.signInEmail
    }
  }
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
  const logInPass = () => {
    switch (language) {
      case 'en':
        return en.logInPass
      case 'es':
        return es.logInPass
      default:
        return en.logInPass
    }
  }
  const logInFooter = () => {
    switch (language) {
      case 'en':
        return en.logInFooter
      case 'es':
        return es.logInFooter
      default:
        return en.logInFooter
    }
  }
  return (
    <form action="" className="log-in-form-main-form-form">
      <div className="log-in-form-main-form-input-box">
        <label htmlFor="log-in-user" className="log-in-form-main-form-label">
          {signInEmail()}
        </label>
        <input
          type="text"
          id="log-in-user"
          className="log-in-main-form-input"
          placeholder={signInEmail()}
        />
      </div>
      <div className="log-in-form-main-form-input-box">
        <label
          htmlFor="log-in-password"
          className="log-in-form-main-form-label"
        >
          {logInPass()}
        </label>
        <input
          type="password"
          id="log-in-password"
          className="log-in-main-form-input"
          placeholder={logInPass()}
        />
      </div>
      <input
        type="submit"
        className="log-in-main-form-button"
        value={logInTitle()}
      />
      <span
        className="log-in-main-form-forgot-password"
        onClick={() => setWhichForm(false)}
      >
        {logInFooter()}
      </span>
    </form>
  );
};

export default LoginFormComponent;
