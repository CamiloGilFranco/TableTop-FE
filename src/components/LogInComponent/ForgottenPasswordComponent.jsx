import { useSelector } from 'react-redux';
import languageSelector from '../../assets/languages/languageSelector';

const ForgottenPasswordComponent = ({ setWhichForm }) => {

  const language = useSelector(state=> state.languageReducer);


  return (
    <div className="forgotten-password-component">
      <form action="" className="forgotten-password-component-form">
        <span className="forgotten-password-component-form-title">
          {languageSelector(language, 'forgotPassTitle')}
        </span>
        <label
          htmlFor="forgotten-password-component-form-label"
          className="forgotten-password-component-form-label"
        >
          {languageSelector(language, 'signInEmail')}
        </label>
        <input
          type="text"
          className="forgotten-password-component-form-input"
          placeholder={languageSelector(language, 'signInEmail')}
        />
        <input
          type="submit"
          className="log-in-main-form-button"
          value={languageSelector(language, 'forgotPassButton')}
        />
        <span
          className="forgotten-password-component-form-return"
          onClick={() => setWhichForm(true)}
        >
          ⬅ {languageSelector(language, 'forgotPassBack')}
        </span>
      </form>
    </div>
  );
};

export default ForgottenPasswordComponent;
