import { useSelector } from 'react-redux';
import "./AlwaysFirstComponent.css";
import languageSelector from '../../assets/languages/languageSelector';

const AlwaysFirstComponent = () => {
  const language = useSelector(state=> state.languageReducer);

  return (
    <div className="always-first-component-container">
      <span className="always-first-component-title">{languageSelector(language, 'alwaysFirstTitle')}</span>
      <p className="always-first-component-paragraph">
        {languageSelector(language, 'alwaysFirstBody')}
      </p>
      <input
        type="text"
        placeholder={languageSelector(language, 'signInEmail')}
        className="always-first-component-input"
      />
      <button className="always-first-component-button">{languageSelector(language, 'alwaysFirstFooter')}</button>
    </div>
  );
};

export default AlwaysFirstComponent;
