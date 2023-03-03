import React from "react";
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

const Footer = () => {
  return (
    <div className="footer">
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
          <span className="footer-card-title">About</span>
          <div className="footer-about-list">
            <a href="_blank" className="footer-about-list-item">
              About Us
            </a>
            <a href="_blank" className="footer-about-list-item">
              FAQ
            </a>
            <a href="_blank" className="footer-about-list-item">
              Login
            </a>
            <a href="_blank" className="footer-about-list-item">
              Register
            </a>
            <a href="_blank" className="footer-about-list-item">
              Terms & Co
            </a>
            <a href="_blank" className="footer-about-list-item">
              Privacy
            </a>
            <a href="_blank" className="footer-about-list-item">
              Support
            </a>
          </div>
        </div>
        <div className="footer-location footer-card">
          <span className="footer-card-title">Our Location</span>
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
          <span className="footer-card-title">Useful Links</span>
          <div className="footer-links-list">
            <a href="_blank" className="footer-links-list-item">
              Home
            </a>
            <a href="_blank" className="footer-links-list-item">
              Our Vehicle
            </a>
            <a href="_blank" className="footer-links-list-item">
              Latest Video
            </a>
            <a href="_blank" className="footer-links-list-item">
              services
            </a>
            <a href="_blank" className="footer-links-list-item">
              Booking Deal
            </a>
            <a href="_blank" className="footer-links-list-item">
              Emergency Call
            </a>
            <a href="_blank" className="footer-links-list-item">
              Mobile App
            </a>
          </div>
        </div>
        <div className="footer-new footer-card">
          <span className="footer-card-title">New Topics</span>
          <div className="footer-new-container">
            <div className="footer-new-container-new">
              <div className="footer-new-container-new-image">
                <img src={new1} alt="" className="footer-new-image" />
              </div>
              <div className="footer-new-container-new-text">
                <span className="footer-new-container-text-title">
                  Recent News
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
                  Recent News
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
