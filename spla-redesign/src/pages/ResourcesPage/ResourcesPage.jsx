import React, { Component } from 'react';
import "./ResourcesPage.css";
import ResourceForm from '../../components/ResourceForm/ResourceForm'

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
  }

  render(){
      return (
        <div>
          <Header />
          <Row className="site-content-row justify-context-xs-center">
            <Col xs={12} style={{ textAlign: "center" }}>
              <h3>Resources Near Me</h3>

              <ResourceForm handleAreaChange={this.handleAreaChange.bind(this)} />
            </Col>
          </Row>
        </div>


          


        
      );
  }
};

export default ResourcesPage;
