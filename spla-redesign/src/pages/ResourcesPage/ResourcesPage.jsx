import React, { Component } from 'react';
import "./ResourcesPage.css";
import ResourceForm from '../../components/ResourceForm/ResourceForm'
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";

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
              
            </Col>
          </Row>
        </div>


          


        
      );
  }
};

export default ResourcesPage;
