import React, { Component } from 'react';
import "./ResourcesPage.css";
import ResourceForm from '../../components/ResourceForm/ResourceForm'
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

class ResourcesPage extends Component {

    constructor(){
        super();
        this.state = {
            area: 1,
            resources: []
          }
    }
  

  handleAreaChange = (e) => {
    this.setState({area: e.target.value })
    {/* Access database */}
    {/* Search for all documents where Service Planning/Geographic Area == e.target.value */}
    {/* Clear this.state.resources, and then add each of those to this.state.resources*/}
  }


  render(){
  return (
    <div>
      <Header />
      <Row className="site-content-row justify-context-xs-center">
        <Col xs={12} style={{ textAlign: "center" }}>
          <h3>Resources Near Me</h3>
         
            <ResourceForm handleAreaChange={this.handleAreaChange.bind(this)} />

              {/*  
                {this.state.resources.map((resource, idx) =>

              )}
              */}
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
            <li className="nav-item active">
            <button
             style={{
              color: "rgb(240, 130, 34)",
              fontWeight: "900",
              backgroundColor: "rgba(240,130,34,0.3)"
            }}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerResources"
              aria-controls="navbarTogglerResources"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Resources
            </button>
            <div
              className="collapse"
              id="navbarTogglerResources"
            >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">FAQs</li>
                <li className="nav-item active">Green Streets Map</li>
                <li className="nav-item active">Veteran Resources</li>
                <li className="nav-item active">LA HSA</li>
                <li className="nav-item active">SPLA Pilot</li>
                <li className="nav-item active">Ordinance 85.02</li>
                <li className="nav-item active">Medical Emergency</li>
              </ul>
            </div>
          </li>
            </ul>
          
        </Col>
      </Row>
    </div>
  );
  }
};

export default ResourcesPage;
