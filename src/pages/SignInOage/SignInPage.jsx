import "./SignInPage.css";
import facebook from "./assets/facebook.svg";
import google from "./assets/google.svg";
import twitter from "./assets/twitter.svg";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const SignInPage = () => {
  const [formContent, setFormContent] = useState({
    correo: "",
    confirmarCorreo: "",
    contraseña: "",
    confirmarContraseña: "",
    nombres: "",
    apellidos: "",
    tipoDocumento: "Cédula de Ciudadanía",
    numeroDocumento: "",
    añoNacimiento: "1925",
    mesNacimiento: "Enero",
    diaNacimiento: "01",
    ciudad: "Bogota",
    direccion: "",
    celular: "",
    terminosYCondiciones: false,
    tratamientoDeDatos: false,
    informacionCorreo: false,
    informacionSMS: false,
    informacionWPP: false,
  });

  const [correoError, setCorreoError] = useState(false);
  const [confirmarCorreoError, setConfirmarCorreoError] = useState(false);
  const [contraseñaError, setContraseñaError] = useState(false);
  const [confirmarContraseñaError, setConfirmarContraseñaError] =
    useState(false);
  const [nombresError, setNombresError] = useState(false);
  const [apellidosError, setApellidosError] = useState(false);
  const [numeroDocumentoError, setNumeroDocumentoError] = useState(false);
  const [direccionError, setDireccionError] = useState(false);
  const [celularError, setCelularError] = useState(false);
  const [TYCError, setTYCError] = useState(false);
  const [TDPError, setTDPError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    const correoRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const contraseñaRegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;
    const nombresRegExp = /[^a-zA-ZñÑáéíóúAÉÍÓÚ\s]/g;

    if (!correoRegExp.test(formContent.correo)) {
      setCorreoError(true);
      isValid = false;
    } else {
      setCorreoError(false);
    }

    if (
      formContent.confirmarCorreo !== formContent.correo ||
      formContent.confirmarCorreo.length === 0
    ) {
      setConfirmarCorreoError(true);
      isValid = false;
    } else {
      setConfirmarCorreoError(false);
    }

    if (!contraseñaRegExp.test(formContent.contraseña)) {
      setContraseñaError(true);
      isValid = false;
    } else {
      setContraseñaError(false);
    }

    if (
      formContent.confirmarContraseña !== formContent.contraseña ||
      formContent.confirmarContraseña.length === 0
    ) {
      setConfirmarContraseñaError(true);
      isValid = false;
    } else {
      setConfirmarContraseñaError(false);
    }

    if (
      nombresRegExp.test(formContent.nombres) ||
      formContent.nombres.length === 0
    ) {
      setNombresError(true);
      isValid = false;
    } else {
      setNombresError(false);
    }

    if (
      nombresRegExp.test(formContent.apellidos) ||
      formContent.apellidos.length === 0
    ) {
      setApellidosError(true);
      isValid = false;
    } else {
      setApellidosError(false);
    }

    if (formContent.numeroDocumento.length < 6) {
      setNumeroDocumentoError(true);
      isValid = false;
    } else {
      setNumeroDocumentoError(false);
    }

    if (formContent.direccion.length < 1) {
      setDireccionError(true);
      isValid = false;
    } else {
      setDireccionError(false);
    }

    if (formContent.celular.length !== 10) {
      setCelularError(true);
      isValid = false;
    } else {
      setCelularError(false);
    }

    if (!formContent.terminosYCondiciones) {
      setTYCError(true);
      isValid = false;
    } else {
      setTYCError(false);
    }

    if (!formContent.tratamientoDeDatos) {
      setTDPError(true);
      isValid = false;
    } else {
      setTDPError(false);
    }

    if (isValid) {
      //logica de procesamiento del formulario
      console.log("formulario procesado");
    }
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-page-header">
        <HeaderComponent />
      </div>
      <div className="sign-in-page-social-media-container">
        <span className="sign-in-page-social-media-container-title">
          Regístrate con
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
      <span className="sign-in-page-subtitle">o completa el formulario</span>
      <form action="" className="sign-in-page-form" onSubmit={handleSubmit}>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Correo
          </label>
          <input
            type="text"
            className="sign-in-page-form-text-input"
            placeholder="Correo"
            value={formContent.correo}
            onChange={(event) =>
              setFormContent({ ...formContent, correo: event.target.value })
            }
          />
          {correoError ? (
            <p className="sign-in-page-form-text-error">
              * Escribe un correo valido
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Confirmar Correo
          </label>
          <input
            type="text"
            className="sign-in-page-form-text-input"
            placeholder="Confirmar Correo"
            value={formContent.confirmarCorreo}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                confirmarCorreo: event.target.value,
              })
            }
          />
          {confirmarCorreoError ? (
            <p className="sign-in-page-form-text-error">
              * Escribe el mismo correo que escribiste en el primer espacio
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="sign-in-page-form-text-input"
            placeholder="Contraseña"
            value={formContent.contraseña}
            onChange={(event) =>
              setFormContent({ ...formContent, contraseña: event.target.value })
            }
          />
          {contraseñaError ? (
            <p className="sign-in-page-form-text-error">
              * La contraseña debe contener al menos una mayúscula, una
              minúscula y un numero y debe ser de al menos 8 caracteres
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            className="sign-in-page-form-text-input"
            placeholder="Confirmar Contraseña"
            value={formContent.confirmarContraseña}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                confirmarContraseña: event.target.value,
              })
            }
          />
          {confirmarContraseñaError ? (
            <p className="sign-in-page-form-text-error">
              * Debes escribir la misma contraseña que escribiste en el espacio
              anterior
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Nombres
          </label>
          <input
            type="text"
            className="sign-in-page-form-text-input"
            placeholder="Nombres"
            value={formContent.nombres}
            onChange={(event) =>
              setFormContent({ ...formContent, nombres: event.target.value })
            }
          />
          {nombresError ? (
            <p className="sign-in-page-form-text-error">
              * Este espacio es requerido y no puede contener caracteres
              especiales o numéricos
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Apellidos
          </label>
          <input
            type="text"
            className="sign-in-page-form-text-input"
            placeholder="Apellidos"
            value={formContent.apellidos}
            onChange={(event) =>
              setFormContent({ ...formContent, apellidos: event.target.value })
            }
          />
          {apellidosError ? (
            <p className="sign-in-page-form-text-error">
              * Este espacio es requerido
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="sign-in-page-form-input-container sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Documento de identidad
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
              <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
              <option value="Cédula de Extranjería">
                Cédula de Extranjería
              </option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
            <input
              type="number"
              className="sign-in-page-form-text-input sign-in-page-form-text-input-id-text"
              placeholder="Numero del documento"
              value={formContent.numeroDocumento}
              onChange={(event) =>
                setFormContent({
                  ...formContent,
                  numeroDocumento: event.target.value,
                })
              }
            />
          </div>
          {numeroDocumentoError ? (
            <span className="sign-in-page-form-text-error-id sign-in-page-form-text-error">
              * Introduce un numero de documento valido
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Fecha de nacimiento
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
              2015
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
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
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
            Ciudad
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
            <option value="Bogota">Bogota</option>
            <option value="Medellin">Medellin</option>
            <option value="Cartagena">Cartagena</option>
            <option value="Cali">Cali</option>
            <option value="Bucaramanga">Bucaramanga</option>
          </select>
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Dirección
          </label>
          <input
            type="text"
            className="sign-in-page-form-text-input"
            placeholder="Dirección"
            value={formContent.direccion}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                direccion: event.target.value,
              })
            }
          />
          {direccionError ? (
            <p className="sign-in-page-form-text-error">
              * Este espacio es obligatorio
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="sign-in-page-form-input-container">
          <label htmlFor="" className="sign-in-page-form-label">
            Celular
          </label>
          <input
            type="number"
            className="sign-in-page-form-text-input"
            placeholder="Celular"
            value={formContent.celular}
            onChange={(event) =>
              setFormContent({
                ...formContent,
                celular: event.target.value,
              })
            }
          />
          {celularError ? (
            <p className="sign-in-page-form-text-error">
              * Debes escribir un numero de celular valido
            </p>
          ) : (
            ""
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
            Acepto los Términos y Condiciones de Uso del Portal.
          </label>
        </div>
        {TYCError ? (
          <p className="sign-in-page-form-text-error">
            * Debes aceptar los terminos y condiciones
          </p>
        ) : (
          ""
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
            En cumplimiento del Régimen de Protección Datos Personales, autorizo
            expresamente a TableTop, de manera directa, o a través de terceros
            designados, para almacenar, consultar, procesar y en general, para
            dar tratamiento a la información personal que suministre, y para ser
            incluido en sus bases de datos, recibir información de la Compañía,
            de conformidad con las políticas de privacidad y manejo de
            información.
          </label>
        </div>
        {TDPError ? (
          <p className="sign-in-page-form-text-error">
            * Debes aceptar la política de tratamiento de datos personales
          </p>
        ) : (
          ""
        )}
        <span className="sign-in-page-form-receive-information">
          Autorizo recibir información por
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
            Correo Electrónico
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
            Mensajes de texto SMS (sin costo al usuario)
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
            Mensajes de WhatsApp
          </label>
        </div>
        <input
          type="submit"
          value="Registrarme"
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
