import React from "react";
import "./ApplyPage.css";
import { Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const ApplyPage = props => {
  return (
    <div>
      <Header />
      <Row className="site-content-row">
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 5, offset: 1 }}>
          <h3
            style={{
              fontSize: "20px",
              textAlign: "center",
              marginTop: "15vmin"
            }}
          >
            WHAT DO YOU NEED?
          </h3>
          <div className="carImg-container">
            <img
              className="carImg"
              src="https://i.imgur.com/GMztFRe.png"
              alt="car-img"
            />
          </div>
          <Link id="btnColor-orange" className="btn" to="/applicationpage">
            Apply to Safe Parking
          </Link>
          <br />
          <p className="home-about-msg" style={{ textAlign: "center" }}>
            Apply for a spot in one of our Safe Parking LA lots{" "}
          </p>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 5, offset: 1 }}>
          <div className="chatImg-container">
            <img
              className="chatImg"
              src="https://i.imgur.com/bmcQ7o9.png"
              alt="chat-box"
            />
          </div>
          <Link className="btn" to="/resources">
            Resources
          </Link>
          <br />
          <p className="home-about-msg" style={{ textAlign: "center" }}>
            Find services and resources in your area
          </p>
          <p className="home-about-msg" style={{ textAlign: "center" }}>
            * For medical emergencies, please call 911.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ApplyPage;
