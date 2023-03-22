import { useSelector } from 'react-redux';
import { es } from '../../assets/languages/languageES';
import { en } from '../../assets/languages/languajeEN';
import "./AlwaysFirstComponent.css";

const AlwaysFirstComponent = () => {
  const language = useSelector(state=> state.languageReducer);
  const alwaysFirstTitle = () => {
    switch (language) {
      case 'en':
        return en.alwaysFirstTitle
      case 'es':
        return es.alwaysFirstTitle
      default:
        return en.alwaysFirstTitle
    }
  }
  const alwaysFirstBody = () => {
    switch (language) {
      case 'en':
        return en.alwaysFirstBody
      case 'es':
        return es.alwaysFirstBody
      default:
        return en.alwaysFirstBody
    }
  }
  const alwaysFirstFooter = () => {
    switch (language) {
      case 'en':
        return en.alwaysFirstFooter
      case 'es':
        return es.alwaysFirstFooter
      default:
        return en.alwaysFirstFooter
    }
  }
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
  return (
    <div className="always-first-component-container">
      <span className="always-first-component-title">{alwaysFirstTitle()}</span>
      <p className="always-first-component-paragraph">
       {alwaysFirstBody()}
      </p>
      <input
        type="text"
        placeholder={signInEmail()}
        className="always-first-component-input"
      />
      <button className="always-first-component-button">{alwaysFirstFooter()}</button>
    </div>
  );
};

export default AlwaysFirstComponent;
