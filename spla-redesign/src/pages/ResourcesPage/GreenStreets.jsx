import React from "react";
import "../AboutPage/AboutPage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import ResourcesPageNav from "../../components/PageNavs/ResourcesPageNav";

const GreenStreets = props => {
  return (
    <div>
      <Header />
      <Row className="justify-content-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/582dc9ea6a4963e5091cd8cd/1540780663953-GC5YYRDPCL2H9G8LBMS2/ke17ZwdGBToddI8pDm48kPhHxtcpGgap4PQD1FcyZ1x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UaFsru5sGf4oPSOSpKc9ujvSC7N5T9OAILgZUPgD0wGABltQNugx0IX_zMvsek3f7g/image-asset.jpeg?format=750w"
          alt="Safe Parking LA"
          className="home-story-img"
        />
        <ResourcesPageNav />
        <Col xs={12} className="home-story">
          <h3>Green Streets</h3> <br />
          <p className="story">
            On January 7, 2017 Los Angeles Municipal Code (LAMC) 85.02 was
            enacted by the Los Angeles City Council. The ordinance maps streets
            where individuals living in their vehicles can park overnight (9 PM
            - 6 AM). These streets are marked on the map as "Green Streets".
            This ordinance will expire July 1, 2018, unless extended by the Los
            Angeles City Council. More "Green Streets" Information and all 21
            area maps can by found{" "}
            <a
              style={{ color: "#212529" }}
              target="_blank"
              href="https://www.lacity.org/for-residents/popular-services/los-angeles-municipal-code-lamc-8502-vehicle-dwelling"
            >
              here
            </a>
            .
          </p>
          <img
            src="https://images.squarespace-cdn.com/content/v1/582dc9ea6a4963e5091cd8cd/1524592938080-QOCPGS17KATA6H1JLZ5C/ke17ZwdGBToddI8pDm48kHW84nQLtXXViE7bOG0Chf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0hReLB75oIvKxcDxwlnLXaa-dTTNkghWpzJEQ89DR4ATJRrrXn57TSIoD1H0S0xwdA/Pacific+Area+Community+Police+Station+020317.jpg?format=300w"
            alt="Safe Parking LA"
            className="home-story-img"
          />
        </Col>
      </Row>
    </div>
  );
};

export default GreenStreets;
