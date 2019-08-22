import React from "react";

import "./HomePage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import Button from "../../components/Button/Button";

const HomePage = props => {
  return (
    <div>
      <div className="home-main-img">
        <Header />
        <Row className="site-content-row">
          <Col xs={12} className="home-welcome">
            <h3>Welcome!</h3>
            <Col xs={{ span: 10, offset: 1 }}>
              <p className="home-welcome-msg">
                Nobody plans to be homeless. <br />
                You’ve taken the first step towards help. <br />
                You’re on the right track
              </p>
            </Col>
            <Button />
          </Col>
        </Row>
      </div>
      <Row>
        <Col xs={12} className="home-about">
          <h3>About</h3>
          <p className="home-about-msg">
            Safe Parking programs are a safe and legal homelessness intervention
            to stabilize and connect to resources for people who are living in
            their vehicles. <br /> <br />
            All program locations include access to a restroom facility and the
            security of a guard. Please begin the application by filling out the
            interest form provided or call/text <br />{" "}
            <span className="phone-num">213-793-8493</span>
          </p>
          <Button />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
