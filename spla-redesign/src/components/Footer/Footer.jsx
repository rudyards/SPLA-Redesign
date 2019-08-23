import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Grid, Row, Col } from "react-bootstrap";

const Footer = props => {
  return (
    <div className="footer">
      <Row className="justify-content-xs-center">
        <Col
          xs={{ span: 6, offset: 3 }}
          md={{ span: 3, order: 12, offset: 3 }}
          className="sm-links"
        >
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
        </Col>
        <Col xs={12} md={{ span: 6, order: 1 }} className="footer-links">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <a
            className="footer-link"
            href="https://safeparkingla.networkforgood.com/projects/68953-safe-parking-la"
          >
            Donate
          </a>
          <Link to="/contactus" className="footer-link">
            Contact us
          </Link>
          <Link to="/resources" className="footer-link">
            Resources
          </Link>
        </Col>
      </Row>
      <p
        className="story"
        style={{ fontSize: "12px", color: "white", textAlign: "center" }}
      >
        SafeParkingLA.org © 2018-2019
      </p>
    </div>
  );
};

export default Footer;
