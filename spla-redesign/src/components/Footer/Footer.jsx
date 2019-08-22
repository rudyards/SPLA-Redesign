import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Grid, Row, Col } from "react-bootstrap";

const Footer = props => {
  return (
    <div className="footer">
      <Row className="justify-content-md-center">
        <Col xs={12} md={4} className="sm-links">
          <a
            href="https://www.facebook.com/SafeParkingLA/"
            target="_blank"
            className="sm-link"
          >
            <i class="fab fa-facebook" />
          </a>
          <a
            href="http://instagram.com/safeparking_la"
            target="_blank"
            className="sm-link"
          >
            <i class="fab fa-instagram" />
          </a>
          <a
            href="mailto:info@safeparkingla.org"
            target="_blank"
            className="sm-link"
          >
            <i class="far fa-envelope" />
          </a>
        </Col>
        <Col xs={12} md={4} className="footer-links">
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
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
