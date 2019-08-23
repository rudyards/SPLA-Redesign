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
    if (e.target.value == 1){
        this.setState({resources: [['Grace Resources - Free Groceries','Grace Resources','Grace Resource Ctr. 45134 Sierra Hwy., Lancaster','https://www.graceresources.org/','(661) 940-5272', 'Tuesdays & Thursdays at 10:00 AM & 1:00 PM; Spanish only on Wednesdays at 10:00 AM' ]]})
    } else {
        this.setState({resources: []})
    }
  }

  render(){
      return (
        <div>
          <h1>Hello from resourse</h1>
          <ResourceForm handleAreaChange={this.handleAreaChange.bind(this)} />
          {this.state.resources}


        </div>
      );
  }
};

export default ResourcesPage;
