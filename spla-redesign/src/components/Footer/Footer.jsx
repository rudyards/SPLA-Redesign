import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = props => {
  return (
    <div className="footer">
      <div className="sm-links">
        <a
          href="https://www.facebook.com/SafeParkingLA/"
          target="_blank"
          className="sm-link"
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          href="http://instagram.com/safeparking_la"
          target="_blank"
          className="sm-link"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          href="mailto:info@safeparkingla.org"
          target="_blank"
          className="sm-link"
        >
          <i className="far fa-envelope" />
        </a>
      </div>
      <div className="footer-links">
        <Link to="/About" className="footer-link">
          About
        </Link>
        <Link to="/Donate" className="footer-link">
          Donate
        </Link>
        <Link to="/ContactUs" className="footer-link">
          Contact us
        </Link>
        <Link to="/Resources" className="footer-link">
          Resources
        </Link>
      </div>
    </div>
  );
};

export default Footer;
