import { useSelector } from 'react-redux';

import LogInComponent from "../LogInComponent/LogInComponent";
import React, { useState } from "react";
import logo from "../../assets/logo_white.svg";
import location from "./assets/location.svg";
import telephone from "./assets/telephone.svg";
import email from "./assets/email.svg";
import new1 from "./assets/new1.jpg";
import new2 from "./assets/new2.jpg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import google from "./assets/google.svg";
import "./Footer.css";
import { NavLink } from 'react-router-dom';
import languageSelector from '../../assets/languages/languageSelector';
import routePaths from '../../constants/routePaths';

const Footer = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const language = useSelector(state=> state.languageReducer);

  return (
    <div className="footer">
      {showLogIn ? <LogInComponent setShowLogIn={setShowLogIn} /> : ""}
      <div className="general-footer">
        <div className="footer-info footer-card">
          <div className="footer-info-brand">
            <img src={logo} alt="" className="footer-logo" />
            <span className="footer-info-title">TableTop</span>
          </div>
          <div className="footer-info-text">
            <p className="footer-info-text-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sint
            </p>
          </div>
          <div className="footer-info-data">
            <div className="footer-info-text-address footer-info-text-data-container">
              <img src={location} alt="" className="footer-icon" />
              <span className="footer-info-text-data">
                {" "}
                A-32, Albany, New york
              </span>
            </div>
            <div className="footer-info-text-telephone footer-info-text-data-container">
              <img src={telephone} alt="" className="footer-icon" />
              <span className="footer-info-text-data">123-456-7890</span>
            </div>
            <div className="footer-info-text-email footer-info-text-data-container">
              <img src={email} alt="" className="footer-icon" />
              <span className="footer-info-text-data">contact@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="footer-about footer-card">
          <span className="footer-card-title">{languageSelector(language, 'footerAbout')}</span>
          <div className="footer-about-list">
            <a href="_blank" className="footer-about-list-item">
            {languageSelector(language, 'footerAboutUs')}
            </a>
            <a href="_blank" className="footer-about-list-item">
            {languageSelector(language, 'footerFAQ')}
            </a>
            <a onClick={()=> setShowLogIn(true)} href='#top' className="footer-about-list-item">
              {languageSelector(language, 'footerLogin')}
            </a>
            <NavLink to={routePaths.register} className="footer-about-list-item">
              {languageSelector(language, 'footerRegister')}
            </NavLink>
            <a href="_blank" className="footer-about-list-item">
              {languageSelector(language, 'footerTC')}
            </a>
            <a href="_blank" className="footer-about-list-item">
              {languageSelector(language, 'footerPrivacy')}
            </a>
            <a href="_blank" className="footer-about-list-item">
              {languageSelector(language, 'footerSupport')}
            </a>
          </div>
        </div>
        <div className="footer-location footer-card">
          <span className="footer-card-title">{languageSelector(language, 'footerLocation')}</span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.51641065857!2d-74.24789243112241!3d4.64828371761393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2zQm9nb3TDoQ!5e0!3m2!1ses!2sco!4v1677287425515!5m2!1ses!2sco"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
            className="footer-location-map"
          />
        </div>
        <div className="footer-links footer-card">
          <span className="footer-card-title">{languageSelector(language, 'footerLinks')}</span>
          <div className="footer-links-list">
            <NavLink to={routePaths.home} href='#top' className="footer-links-list-item">
              {languageSelector(language, 'footerHome')}
            </NavLink>
            <a href="_blank" className="footer-links-list-item">
              {languageSelector(language, 'footerVehicle')}
            </a>
            <a href="_blank" className="footer-links-list-item">
              {languageSelector(language, 'footerVideo')}
            </a>
            <a href="_blank" className="footer-links-list-item">
              {languageSelector(language, 'footerServices')}
            </a>
            <a href="_blank" className="footer-links-list-item">
              {languageSelector(language, 'footerBooking')}
            </a>
            <a href="_blank" className="footer-links-list-item">
              {languageSelector(language, 'footerEmergency')}
            </a>
            <a href="_blank" className="footer-links-list-item">
              {languageSelector(language, 'footerApp')}
            </a>
          </div>
        </div>
        <div className="footer-new footer-card">
          <span className="footer-card-title">{languageSelector(language, 'footerTopics')}</span>
          <div className="footer-new-container">
            <div className="footer-new-container-new">
              <div className="footer-new-container-new-image">
                <img src={new1} alt="" className="footer-new-image" />
              </div>
              <div className="footer-new-container-new-text">
                <span className="footer-new-container-text-title">
                  {languageSelector(language, 'footerNews')}
                </span>
                <p className="footer-new-container-text-paragraph">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
            <div className="footer-new-container-new">
              <div className="footer-new-container-new-image">
                <img src={new2} alt="" className="footer-new-image" />
              </div>
              <div className="footer-new-container-new-text">
                <span className="footer-new-container-text-title">
                  {languageSelector(language, 'footerNews')}
                </span>
                <p className="footer-new-container-text-paragraph">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-social-media">
        <img src={facebook} alt="" className="footer-social-media-icon" />
        <img src={instagram} alt="" className="footer-social-media-icon" />
        <img src={twitter} alt="" className="footer-social-media-icon" />
        <img src={google} alt="" className="footer-social-media-icon" />
      </div>
    </div>
  );
};

export default Footer;