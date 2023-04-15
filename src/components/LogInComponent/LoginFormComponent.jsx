import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions/user.action";

const LoginFormComponent = ({ setWhichForm, closeModal }) => {
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const authUrl = process.env.REACT_APP_AUTH_URL;
  const language = useSelector(state=> state.languageReducer);
  const [dataUser, setDataUser] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${authUrl}/local/login`, dataUser);
      cookies.set("token", data.token);
      cookies.set("name", data.data.name);
      cookies.set("last_name", data.data.last_name);
      cookies.set("email", data.data.email);
      dispatch(setUser(data.data));
      toast.success(languageSelector(language, "logInSuccessfull"));

      setTimeout(() => {
        closeModal();
      }, 6000);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(languageSelector(language, "generalError"));
      }
    }
  }

  const handleChange = (e) => {
   const { value, name } = e.target;
   setDataUser({ ...dataUser, [name]: value });
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="log-in-form-main-form-form">
        <div className="log-in-form-main-form-input-box">
          <label htmlFor="log-in-user" className="log-in-form-main-form-label">
            {languageSelector(language, "signInEmail")}
          </label>
          <input
            type="text"
            id="log-in-user"
            className="log-in-main-form-input"
            name="email"
            value={dataUser.email}
            onChange={handleChange}
            placeholder={languageSelector(language, "signInEmail")}
          />
        </div>
        <div className="log-in-form-main-form-input-box">
          <label
            htmlFor="log-in-password"
            className="log-in-form-main-form-label"
          >
            {languageSelector(language, "logInPass")}
          </label>
          <input
            type="password"
            id="log-in-password"
            className="log-in-main-form-input"
            value={dataUser.password}
            name="password"
            onChange={handleChange}
            placeholder={languageSelector(language, "logInPass")}
          />
        </div>
        <input
          type="submit"
          className="log-in-main-form-button"
          value={languageSelector(language, "logInTitle")}
        />
        <span
          className="log-in-main-form-forgot-password"
          onClick={() => setWhichForm(false)}
        >
          {languageSelector(language, "logInFooter")}
        </span>
      </form>
    </>
  );
};

export default LoginFormComponent;
