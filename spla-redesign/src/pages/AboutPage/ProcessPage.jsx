import React from "react";
import "./AboutPage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import AboutPageNav from "../../components/PageNavs/AboutPageNav";

const ProcessPage = props => {
  return (
    <div>
      <Header />
      <Row className="justify-content-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/582dc9ea6a4963e5091cd8cd/1540780008740-YRR5T16QIGBKI7RYTCXM/ke17ZwdGBToddI8pDm48kA_Ksi6rUAMcghH-kTXLxH97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcduKWfxEIyTerzyH-R9k5K2Z-iAV1i-qW9ns5B3Z6BawAmYg09eZ-nMcZEAiM1A6Q/image-asset.jpeg?format=300w"
          alt="Safe Parking LA"
          className="home-story-img"
        />
        <AboutPageNav />
        <Col xs={12} className="home-story">
          <h3>Our Process</h3> <br />
          <h4>Step 1</h4>
          <p className="story">
            In order to do this, we first had to decriminalize sleeping in a
            vehicle – which in most of Los Angeles is illegal. The Safe Green
            streets which are being identified and mapped by LA city will be
            streets where vehicle dwellers can sleep ( as long as the dweller
            abides by the local posted street signs). The City of LA is
            currently in the process of creating a Safe Parking Program( SPP)
            throughout its 15 Council districts. An SPP will provide case
            management and outreach to the vehicular homeless and safe overnight
            parking to individuals and families living in their vehicles.The SPP
            will be the next step to follow the Safe Green streets concept.
          </p>
          <br />
          <h3>Step 2</h3>
          <p className="story">
            Use private donations to QUICKLY secure parking lots around the city
            as gathering points for designated safe parking. These lots will
            include faith based organizations and privately owned business
            parking lots. These locations are usually safe, well lit and
            completely empty every night.
          </p>
          <br />
          <h3>Step 3</h3>
          <p className="story">
            Brand these available parking lots as designated SAFE PARKING LA
            sites and reach out to those living in cars throughout the city,
            letting them know of the availability of SAFE PARKING LA sites. We
            will work with law enforcement for a ‘grace period’ and instead of
            waking up a family sleeping in a car or an RV and telling them to
            move, we will, instead, provide a Safe Parking LA map to the
            windshield of the vehicle.Safe Parking LA will create gathering
            points – parking lots around the city currently unused during
            evening hours - as a place to safely park. These gathering points
            will include faith based organizations, such as churches and
            synagogues and privately owned business parking lots, unused from 7p
            to 7a most days. Each site will serve the purpose of providing
            social services to this community in need as a step towards ending
            homelessness.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ProcessPage;
