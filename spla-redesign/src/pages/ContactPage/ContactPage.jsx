import React from "react";
import "./ContactPage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";

const ContactPage = props => {
  return (
    <div>
      <Header />
      <Row className="site-content-row justify-context-xs-center">
        <Col xs={12} style={{ textAlign: "center" }}>
          <h3>We'd love to hear from you</h3>
          <p>
            For more information about SPLA and its involvement with L.A.’s Safe
            Parking Program, please contact us or fill out the form below.
          </p>
          <p>
            <i class="fas fa-phone" />
            +1-213-793-8493
            <br />
            <i class="fas fa-envelope" /> info@safeparkingla.org
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
