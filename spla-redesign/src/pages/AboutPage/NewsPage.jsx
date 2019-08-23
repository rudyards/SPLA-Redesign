import React from "react";
import "./AboutPage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import AboutPageNav from "../../components/PageNavs/AboutPageNav";

const NewsPage = props => {
  return (
    <div>
      <Header />
      <Row className="justify-content-center">
        <img
          src="https://static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/58eee85b893fc0a710627fc6/5ceec4d2f9619a643bd39de2/1559244711317/la-1558749202-yq184rfn3k-snap-image.jpg?format=1000w"
          alt="Safe Parking LA"
          className="home-story-img"
        />
        <AboutPageNav />
        <Col xs={12} className="home-story">
          <h3>News</h3> <br />
          <a
            style={{ color: "#212529" }}
            href="https://www.latimes.com/opinion/editorials/la-ed-homeless-veterans-memorial-day-20190525-story.html"
          >
            <h4>
              <i class="far fa-newspaper" />
              <br />
              This Memorial Day, Let's Make Sure LA's Veterans Don't Die
              Homeless
            </h4>
          </a>
          <br />
          <a
            style={{ color: "#212529" }}
            href="https://www.straitstimes.com/world/united-states/homeless-californians-find-safe-haven-in-parking-lots-children-not-spared-in"
          >
            <h4>
              <i class="far fa-newspaper" />
              <br />
              Homeless Californians find safe haven in parking lots, children
              not spared in crisis
            </h4>
          </a>
          <br />
        </Col>
      </Row>
    </div>
  );
};

export default NewsPage;
