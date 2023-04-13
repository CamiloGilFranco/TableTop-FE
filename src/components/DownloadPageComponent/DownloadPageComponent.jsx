import "./DownloadPageComponent.css";
import picture from "./assets/picture.jpg";
import { BsApple } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";
import { useSelector } from "react-redux";
import languageSelector from "../../assets/languages/languageSelector";

const DownloadPageComponent = () => {
  const language = useSelector((state) => state.languageReducer);

  return (
    <article className="download-page-container">
      <section className="download-page-buttons-container">
        <h3 className="download-page-title">
          {languageSelector(language, "downloadPageTitle")}
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis.
        </p>
        <h4 className="download-page-title">
          {languageSelector(language, "downloadPageCTA")}
        </h4>
        <section className="download-page-buttons">
          <button className="download-page-iOS">
            <BsApple className="download-page-icons" />
            <span>App Store</span>
          </button>
          <button className="download-page-android">
            <DiAndroid className="download-page-icons" />
            <span>Play Store</span>
          </button>
        </section>
      </section>
      <picture className="download-page-photo-Container">
        <img src={picture} alt="whatev" className="downloadPage__picture" />
      </picture>
    </article>
  );
};

export default DownloadPageComponent;
