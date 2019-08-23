import React from "react";
import "../AboutPage/AboutPage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import ResourcesPageNav from "../../components/PageNavs/ResourcesPageNav";

const VeteransPage = props => {
  return (
    <div>
      <Header />
      <Row className="justify-content-center">
        <img
          src="https://media.malaymail.com/uploads/articles/2019/2019-03/000_1DD4RX.jpg"
          alt="Safe Parking LA"
          className="home-story-img"
        />
        <ResourcesPageNav />
        <Col xs={12} className="home-story">
          <h3>For Veterans</h3> <br />
          <p className="story">
            SafeParkingLA provides a safe and legal overnight parking place for
            veterans and their families who are currently living in their
            vehicles. We are in a secure lot with a portable bathroom and wash
            station. The lot location on the West LA VA campus offers the
            opportunity for easy access to showers and bathrooms and breakfast
            after exiting the program in the morning. Veterans are able to
            connect to a number of social services, including housing, job, and
            healthcare assistance.
            <br />
            <br />
            For information please email{" "}
            <a
              style={{ color: "#212529" }}
              href="mailto:patc@safeparkingla.org"
              target="_blank"
            >
              patc@safeparkingla.org
            </a>{" "}
            and include your phone number.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default VeteransPage;
