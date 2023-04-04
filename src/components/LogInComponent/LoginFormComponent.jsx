import { useSelector } from 'react-redux';
import languageSelector from '../../assets/languages/languageSelector';

const LoginFormComponent = ({ setWhichForm }) => {
  const language = useSelector(state=> state.languageReducer);

  return (
    <form action="" className="log-in-form-main-form-form">
      <div className="log-in-form-main-form-input-box">
        <label htmlFor="log-in-user" className="log-in-form-main-form-label">
          {languageSelector(language, 'signInEmail')}
        </label>
        <input
          type="text"
          id="log-in-user"
          className="log-in-main-form-input"
          placeholder={languageSelector(language, 'signInEmail')}
        />
      </div>
      <div className="log-in-form-main-form-input-box">
        <label
          htmlFor="log-in-password"
          className="log-in-form-main-form-label"
        >
          {languageSelector(language, 'logInPass')}
        </label>
        <input
          type="password"
          id="log-in-password"
          className="log-in-main-form-input"
          placeholder={languageSelector(language, 'logInPass')}
        />
      </div>
      <input
        type="submit"
        className="log-in-main-form-button"
        value={languageSelector(language, 'logInTitle')}
      />
      <span
        className="log-in-main-form-forgot-password"
        onClick={() => setWhichForm(false)}
      >
        {languageSelector(language, 'logInFooter')}
      </span>
    </form>
  );
};

export default LoginFormComponent;
