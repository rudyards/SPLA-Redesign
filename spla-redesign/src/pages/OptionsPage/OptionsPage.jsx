import React from 'react';
import './OptionsPage.css'
import { Row, Col } from "react-bootstrap";
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Link} from 'react-router-dom';

const OptionsPage = props => {
    return (
        <div>
        <Header />
        <Row className="site-content-row">
          <Col xs={{span: 10, offset: 1}}>
            <h3>WHAT DO YOU NEED?</h3>
            <Link className='btn' to="/map" >Place to park</Link>
          </Col>
  
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
            <Link className='btn' to="/" >Resources</Link>
          </Col>
        </Row>
      </div>
    );
}

export default OptionsPage;