import "./SignInPage.css";
import facebook from "./assets/facebook.svg";
import google from "./assets/google.svg";
import twitter from "./assets/twitter.svg";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import languageSelector from "../../assets/languages/languageSelector";
import axios from "axios";


const SignInPage = () => {
  const navigate = useNavigate();
  const [formContent, setFormContent] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    documentType: "CC",
    documentNumber: "",
    birthYear: "1925",
    birthMonth: "January",
    birthDay: "01",
    city: "Bogota",
    address: "",
    phoneNumber: "",
    termsAndConditions: false,
    dataProcessing: false,
    emailInformation: false,
    smsInformation: false,
    wppInformation: false,
  });

  const language = useSelector(state=> state.languageReducer);
  const [emailError, setEmailError] = useState(false);
  const [confirmEmailError, setConfirmEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [documentNumberError, setDocumentNumberError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [TACError, setTACError] = useState(false);
  const [DPError, setDPError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;

  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const sendUserData = async (input) => {
    try {
      const response = await axios.post(`${apiUrl}/users`, input);
    } catch (error) {
      console.error(error);
    }
  };


  // handles de submit of the form 
  const handleSubmit = async (event) => {
    event.preventDefault();
  let isValid = true;

  const monthNameToNumber = (monthName) => {
    const monthNames = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "july",
      "august",
      "september",
      "october",
      "november",
      "december",
    ];
    return monthNames.indexOf(monthName) + 1;
  };
  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegEx =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
  const namesRegExp = /[^a-zA-ZñÑáéíóúAÉÍÓÚ\s]/g;

  if (!emailRegEx.test(formContent.email)) {
    setEmailError(true);
    isValid = false;
  } else {
    setEmailError(false);
  }

  if (
    formContent.confirmEmail !== formContent.email ||
    formContent.confirmEmail.length === 0
  ) {
    setConfirmEmailError(true);
    isValid = false;
  } else {
    setConfirmEmailError(false);
  }

  if (!passwordRegEx.test(formContent.password)) {
    setPasswordError(true);
    isValid = false;
  } else {
    setPasswordError(false);
  }

  if (
    formContent.confirmPassword !== formContent.password ||
    formContent.confirmPassword.length === 0
  ) {
    setConfirmPasswordError(true);
    isValid = false;
  } else {
    setConfirmPasswordError(false);
  }

  if (
    namesRegExp.test(formContent.firstName) ||
    formContent.firstName.length
  ) {
    setFirstNameError(true);
    isValid = false;
  } else {
    setFirstNameError(false);
  }

  if (
    namesRegExp.test(formContent.lastName) ||
    formContent.lastName.length === 0
  ) {
    setLastNameError(true);
    isValid = false;
  } else {
    setLastNameError(false);
  }

  if (formContent.documentNumber.length < 6) {
    setDocumentNumberError(true);
    isValid = false;
  } else {
    setDocumentNumberError(false);
  }

  if (!formContent.address.length) {
    setAddressError(true);
    isValid = false;
  } else {
    setAddressError(false);
  }

  if (formContent.phoneNumber.length < 10) {
    setPhoneNumberError(true);
    isValid = false;
  } else {
    setPhoneNumberError(false);
  }

  if (!formContent.termsAndConditions) {
    setTACError(true);
    isValid = false;
  } else {
    setTACError(false);
  }

  if (!formContent.dataProcessing) {
    setDPError(true);
    isValid = false;
  } else {
    setDPError(false);
  }

  if (isValid) {

    const monthNumber = monthNameToNumber(formContent.birthMonth);
    const dateString = `${formContent.birthYear}-${monthNumber}-${formContent.birthDay}`;
    const parsedDateOfBirth = new Date(dateString);
    const {
      email,
      password,
      name,
      last_name,
      document_type,
      document_number,
      city,
      contact_email,
      contact_sms,
      contact_wpp,
      address,
      phone_number
    } = formContent;

    const userObject = {
      email,
      password,
      name,
      last_name,
      document_type,
      document_number,
      date_of_birth: parsedDateOfBirth,
      city,
      contact_email,
      contact_sms,
      contact_wpp,
      user_role: 'user',
      address,
      phone_number
    };
      await sendUserData(userObject);
      setSuccessMessage(languageSelector(language, 'signInSuccess'))
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-page-header">
        <HeaderComponent />
      </div>
      <div>{successMessage && <div className="signIn_success">{successMessage}</div>}</div>
      <div className="sign-in-page-social-media-container">
        <span className="sign-in-page-social-media-container-title">
          {languageSelector(language, 'signInTitle')}
        </span>
        <div className="sign-in-page-social-media-container-icons">
          <div className="sign-in-page-social-media-single-icon-container">
            <img
              src={facebook}
              alt=""
              className="sign-in-page-social-media-single-icon"
            />
          </div>
          <div className="sign-in-page-social-media-single-icon-container">
            <img
              src={google}
              alt=""
              className="sign-in-page-social-media-single-icon"
            />
          </div>
          <div className="sign-in-page-social-media-single-icon-container">
            <img
              src={twitter}
              alt=""
              className="sign-in-page-social-media-single-icon"
            />
          </div>
        </div>
      </div>
      <span className="sign-in-page-subtitle">{languageSelector(language, 'signInFormTitle')}</span>
      <form action="" className="sign-in-page-form" onSubmit={handleSubmit}>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="email" className="sign-in-page-form-label">
            {languageSelector(language, 'signInEmail')}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="sign-in-page-form-text-input"
            placeholder={languageSelector(language, 'signInEmail')}
            value={formContent.email}
            onChange={(event) =>
              setFormContent({ ...formContent, email: event.target.value })
            }
          />
          {emailError ? (
            <p className="sign-in-page-form-text-error">
              {languageSelector(language, 'signInEmailError')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInEmailConfirmation')}
          </label>
          <input
            type="email"
            className="sign-in-page-form-text-input"
            placeholder={languageSelector(language, 'signInEmailConfirmation')}
            value={formContent.confirmarCorreo}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                confirmarCorreo: event.target.value,
              })
            }
          />
          {confirmEmailError ? (
            <p className="sign-in-page-form-text-error">
              {languageSelector(language, 'signInEmailConfirmationError')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="password" className="sign-in-page-form-label">
            {languageSelector(language, 'signInPassword')}
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="sign-in-page-form-text-input"
            placeholder={languageSelector(language, 'signInPassword')}
            value={formContent.contraseña}
            onChange={(event) =>
              setFormContent({ ...formContent, contraseña: event.target.value })
            }
          />
          {passwordError ? (
            <p className="sign-in-page-form-text-error">
             {languageSelector(language, 'signInPasswordError')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInPasswordConfirmation')}
          </label>
          <input
            type="password"
            className="sign-in-page-form-text-input"
            placeholder={languageSelector(language, 'signInPasswordConfirmation')}
            value={formContent.confirmarContraseña}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                confirmarContraseña: event.target.value,
              })
            }
          />
          {confirmPasswordError ? (
            <p className="sign-in-page-form-text-error">
              {languageSelector(language, 'signInPasswordConfirmationError')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInFirstName')}
          </label>
          <input
            type="text"
            className="sign-in-page-form-text-input"
            placeholder={languageSelector(language, 'signInFirstName')}
            value={formContent.nombres}
            onChange={(event) =>
              setFormContent({ ...formContent, nombres: event.target.value })
            }
          />
          {firstNameError ? (
            <p className="sign-in-page-form-text-error">
              {languageSelector(language, 'signInFirstNameError')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInLastName')}
          </label>
          <input
            type="text"
            className="sign-in-page-form-text-input"
            placeholder={languageSelector(language, 'signInLastName')}
            value={formContent.apellidos}
            onChange={(event) =>
              setFormContent({ ...formContent, apellidos: event.target.value })
            }
          />
          {lastNameError ? (
            <p className="sign-in-page-form-text-error">
              {languageSelector(language, 'signInLastNameError')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-input-container sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInId')}
          </label>
          <div className="sign-in-page-form-input-subcontainer">
            <select
              name=""
              id=""
              className="sign-in-page-form-text-input sign-in-page-form-text-input-id-select"
              value={formContent.tipoDocumento}
              onChange={(event) =>
                setFormContent({
                  ...formContent,
                  tipoDocumento: event.target.value,
                })
              }
            >
              <option value="CC">
                {languageSelector(language, 'signInIdCC')}
              </option>
              <option value="CE">
                {languageSelector(language, 'signInIdCE')}
              </option>
              <option value="PP">
                {languageSelector(language, 'signInIdPassport')}
              </option>
            </select>
            <input
              type="number"
              className="sign-in-page-form-text-input sign-in-page-form-text-input-id-text"
              placeholder={languageSelector(language, 'signInIdNumber')}
              value={formContent.numeroDocumento}
              onChange={(event) =>
                setFormContent({
                  ...formContent,
                  numeroDocumento: event.target.value,
                })
              }
            />
          </div>
          {documentNumberError ? (
            <span className="sign-in-page-form-text-error-id sign-in-page-form-text-error">
              {languageSelector(language, 'signInIdNumberError')}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInDoB')}
          </label>
          <div className="sign-in-page-form-input-subcontainer">
            <select
              name=""
              id=""
              className="sign-in-page-form-text-input sign-in-page-form-text-input-birth-select"
              value={formContent.añoNacimiento}
              onChange={(event) =>
                setFormContent({
                  ...formContent,
                  añoNacimiento: event.target.value,
                })
              }
            >
              <option value="1925">1925</option>
              <option value="1926">1926</option>
              <option value="1927">1927</option>
              <option value="1928">1928</option>
              <option value="1929">1929</option>
              <option value="1930">1930</option>
              <option value="1931">1931</option>
              <option value="1932">1932</option>
              <option value="1933">1933</option>
              <option value="1934">1934</option>
              <option value="1935">1935</option>
              <option value="1936">1936</option>
              <option value="1937">1937</option>
              <option value="1938">1938</option>
              <option value="1939">1939</option>
              <option value="1940">1940</option>
              <option value="1941">1941</option>
              <option value="1942">1942</option>
              <option value="1943">1943</option>
              <option value="1944">1944</option>
              <option value="1945">1945</option>
              <option value="1946">1946</option>
              <option value="1947">1947</option>
              <option value="1948">1948</option>
              <option value="1949">1949</option>
              <option value="1950">1950</option>
              <option value="1951">1951</option>
              <option value="1952">1952</option>
              <option value="1953">1953</option>
              <option value="1954">1954</option>
              <option value="1955">1955</option>
              <option value="1956">1956</option>
              <option value="1957">1957</option>
              <option value="1958">1958</option>
              <option value="1959">1959</option>
              <option value="1960">1960</option>
              <option value="1961">1961</option>
              <option value="1962">1962</option>
              <option value="1963">1963</option>
              <option value="1964">1964</option>
              <option value="1965">1965</option>
              <option value="1966">1966</option>
              <option value="1967">1967</option>
              <option value="1968">1968</option>
              <option value="1969">1969</option>
              <option value="1970">1970</option>
              <option value="1971">1971</option>
              <option value="1972">1972</option>
              <option value="1973">1973</option>
              <option value="1974">1974</option>
              <option value="1975">1975</option>
              <option value="1976">1976</option>
              <option value="1978">1978</option>
              <option value="1979">1979</option>
              <option value="1980">1980</option>
              <option value="1981">1981</option>
              <option value="1982">1982</option>
              <option value="1983">1983</option>
              <option value="1984">1984</option>
              <option value="1985">1985</option>
              <option value="1986">1986</option>
              <option value="1987">1987</option>
              <option value="1988">1988</option>
              <option value="1989">1989</option>
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
              <option value="1993">1993</option>
              <option value="1994">1994</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
            </select>
            <select
              name=""
              id=""
              className="sign-in-page-form-text-input sign-in-page-form-text-input-birth-select"
              value={formContent.mesNacimiento}
              onChange={(event) =>
                setFormContent({
                  ...formContent,
                  mesNacimiento: event.target.value,
                })
              }
            >
              <option value="january">{languageSelector(language, 'signInJan')}</option>
              <option value="february">{languageSelector(language, 'signInFeb')}</option>
              <option value="march">{languageSelector(language, 'signInMar')}</option>
              <option value="april">{languageSelector(language, 'signInApr')}</option>
              <option value="may">{languageSelector(language, 'signInMay')}</option>
              <option value="june">{languageSelector(language, 'signInJune')}</option>
              <option value="july">{languageSelector(language, 'signInJul')}</option>
              <option value="august">{languageSelector(language, 'signInAug')}</option>
              <option value="september">{languageSelector(language, 'signInSep')}</option>
              <option value="october">{languageSelector(language, 'signInOct')}</option>
              <option value="november">{languageSelector(language, 'signInNov')}</option>
              <option value="december">{languageSelector(language, 'signInDec')}</option>
            </select>
            <select
              name=""
              id=""
              className="sign-in-page-form-text-input sign-in-page-form-text-input-birth-select"
              value={formContent.diaNacimiento}
              onChange={(event) =>
                setFormContent({
                  ...formContent,
                  diaNacimiento: event.target.value,
                })
              }
            >
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInCity')}
          </label>
          <select
            name=""
            id=""
            className="sign-in-page-form-text-input sign-in-page-form-city-input"
            value={formContent.ciudad}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                ciudad: event.target.value,
              })
            }
          >
            <option value="bogota">Bogotá</option>
            <option value="medellin">Medellín</option>
            <option value="cartagena">Cartagena</option>
            <option value="cali">Calí</option>
            <option value="bucaramanga">Bucaramanga</option>
          </select>
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInAddress')}
          </label>
          <input
            type="text"
            className="sign-in-page-form-text-input"
            placeholder={languageSelector(language, 'signInAddress')}
            value={formContent.direccion}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                direccion: event.target.value,
              })
            }
          />
          {addressError ? (
            <p className="sign-in-page-form-text-error">
              {languageSelector(language, 'signInAddressError')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            {languageSelector(language, 'signInPhone')}
          </label>
          <input
            type="number"
            className="sign-in-page-form-text-input"
            placeholder={languageSelector(language, 'signInPhone')}
            value={formContent.celular}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                celular: event.target.value,
              })
            }
          />
          {phoneNumberError ? (
            <p className="sign-in-page-form-text-error">
              {languageSelector(language, 'signInPhoneError')}
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="sign-in-page-form-checkbox-container">
          <input
            type="checkbox"
            id="accept-t-y-d"
            className="sign-in-page-form-checkbox"
            checked={formContent.terminosYCondiciones}
            onChange={() =>
              setFormContent({
                ...formContent,
                terminosYCondiciones: !formContent.terminosYCondiciones,
              })
            }
          />
          <label
            htmlFor="accept-t-y-d"
            className="sign-in-page-form-checkbox-label"
          >
            {languageSelector(language, 'signInTC')}
          </label>
        </div>
        {TACError ? (
          <p className="sign-in-page-form-text-error">
            {languageSelector(language, 'signInTCError')}
          </p>
        ) : (
          <></>
        )}
        <div className="sign-in-page-form-checkbox-container">
          <input
            type="checkbox"
            id="autorizacion-tratamiento-de-datos"
            className="sign-in-page-form-checkbox"
            checked={formContent.tratamientoDeDatos}
            onChange={() =>
              setFormContent({
                ...formContent,
                tratamientoDeDatos: !formContent.tratamientoDeDatos,
              })
            }
          />
          <label
            htmlFor="autorizacion-tratamiento-de-datos"
            className="sign-in-page-form-checkbox-label"
          >
           {languageSelector(language, 'signInPrivacy')}
          </label>
        </div>
        {DPError ? (
          <p className="sign-in-page-form-text-error">
            {languageSelector(language, 'signInPrivacyError')}
          </p>
        ) : (
          <></>
        )}
        <span className="sign-in-page-form-receive-information">
          {languageSelector(language, 'signInSubcribe')}
        </span>
        <div className="sign-in-page-form-checkbox-container">
          <input
            type="checkbox"
            id="accept-email-information"
            className="sign-in-page-form-checkbox"
            checked={formContent.informacionCorreo}
            onChange={() =>
              setFormContent({
                ...formContent,
                informacionCorreo: !formContent.informacionCorreo,
              })
            }
          />
          <label
            htmlFor="accept-email-information"
            className="sign-in-page-form-checkbox-label"
          >
            {languageSelector(language, 'signInTextMessage')}
          </label>
        </div>
        <div className="sign-in-page-form-checkbox-container">
          <input
            type="checkbox"
            id="accept-sms-information"
            className="sign-in-page-form-checkbox"
            checked={formContent.informacionSMS}
            onChange={() =>
              setFormContent({
                ...formContent,
                informacionSMS: !formContent.informacionSMS,
              })
            }
          />
          <label
            htmlFor="accept-sms-information"
            className="sign-in-page-form-checkbox-label"
          >
            {languageSelector(language, 'signInWhatsApp')}
          </label>
        </div>
        <div className="sign-in-page-form-checkbox-container">
          <input
            type="checkbox"
            id="accept-wpp-information"
            className="sign-in-page-form-checkbox"
            checked={formContent.informacionWPP}
            onChange={() =>
              setFormContent({
                ...formContent,
                informacionWPP: !formContent.informacionWPP,
              })
            }
          />
          <label
            htmlFor="accept-wpp-information"
            className="sign-in-page-form-checkbox-label"
          >
            {languageSelector(language, 'signInButton')}
          </label>
        </div>
        <input
          type="submit"
          value={languageSelector(language, 'signInButton')}
          className="sign-in-page-form-submit-button"
        />
      </form>
      <div className="sign-in-page-footer">
        <Footer />
      </div>
    </div>
  );
};

export default SignInPage;