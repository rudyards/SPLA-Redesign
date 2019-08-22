import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="footer">
      <a href="https://www.facebook.com/SafeParkingLA/" target="_blank">
        <i class="fab fa-facebook" />
      </a>
      <a href="http://instagram.com/safeparking_la" target="_blank">
        <i class="fab fa-instagram" />
      </a>
      <a href="mailto:info@safeparkingla.org" target="_blank">
        <i class="far fa-envelope" />
      </a>
      <div className="footer-links">
        <Link to="/About" className="footer-links">
          About
        </Link>
        <Link to="/Donate" className="footer-links">
          Donate
        </Link>
        <Link to="/ContactUs" className="footer-links">
          Contact us
        </Link>
        <Link to="/Resources" className="footer-links">
          Resources
        </Link>
      </div>
    </div>
  );
};

export default Footer;
