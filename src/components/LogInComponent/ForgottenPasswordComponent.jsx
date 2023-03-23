import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';

const ForgottenPasswordComponent = ({ setWhichForm }) => {

  const language = useSelector(state=> state.languageReducer);
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
  const forgotPassTitle = () => {
    switch (language) {
      case 'en':
        return en.forgotPassTitle
      case 'es':
        return es.forgotPassTitle
      default:
        return en.forgotPassTitle
    }
  }
  const forgotPassButton = () => {
    switch (language) {
      case 'en':
        return en.forgotPassButton
      case 'es':
        return es.forgotPassButton
      default:
        return en.forgotPassButton
    }
  }
  const forgotPassBack = () => {
    switch (language) {
      case 'en':
        return en.forgotPassBack
      case 'es':
        return es.forgotPassBack
      default:
        return en.forgotPassBack
    }
  }

  return (
    <div className="forgotten-password-component">
      <form action="" className="forgotten-password-component-form">
        <span className="forgotten-password-component-form-title">
          {forgotPassTitle()}
        </span>
        <label
          htmlFor="forgotten-password-component-form-label"
          className="forgotten-password-component-form-label"
        >
          {signInEmail()}
        </label>
        <input
          type="text"
          className="forgotten-password-component-form-input"
          placeholder={signInEmail()}
        />
        <input
          type="submit"
          className="log-in-main-form-button"
          value={forgotPassButton()}
        />
        <span
          className="forgotten-password-component-form-return"
          onClick={() => setWhichForm(true)}
        >
          ⬅ {forgotPassBack()}
        </span>
      </form>
    </div>
  );
};

export default ForgottenPasswordComponent;
