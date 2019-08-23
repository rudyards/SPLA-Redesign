import React, { Component } from "react";
import "./ResourcesPage.css";
import ResourceForm from "../../components/ResourceForm/ResourceForm";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResourcesPageNav from "../../components/PageNavs/ResourcesPageNav";


class ResourcesPage extends Component {
  constructor() {
    super();
    this.state = {
      area: 1,
      resources: []
    };
  }

  handleAreaChange = e => {
    this.setState({ area: e.target.value });
    if (e.target.value == 1){
      this.setState({resources: `${shrUfJHSxoKVIymPA?backgroundColor=green&viewControls=on}`})
    }
    else if (e.target.value == 2){
      this.setState({resources: `${shroD5GcPBeuHaXkz?backgroundColor=green&viewControls=on}`})
    }
    else if (e.target.value == 3){
      this.setState({resources: `${shrfpE78oDOHgaNli?backgroundColor=green&viewControls=on}`})
    }
    else if (e.target.value == 4){
      this.setState({resources: `${shrMgK1WPaHDTrSCY?backgroundColor=green&viewControls=on}`})
    }
    else if (e.target.value == 5){
      this.setState({resources: `${shr0hVcXFSzGloHT4?backgroundColor=green&viewControls=on}`})
    }else if (e.target.value == 6){
      this.setState({resources: `${shrKAIM41cIwkcamg?backgroundColor=green&viewControls=on}`})
    }
    else if (e.target.value == 7){
      this.setState({resources: `${shrcoyRWksO5h3hC7?backgroundColor=green&viewControls=on}`})
    }
    else if (e.target.value == 8){
      this.setState({resources: `${shrnRZVPxeTuS9lUB?backgroundColor=green&viewControls=on}`})
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Row>
          <Col xs={{ span: 6, offset: 3 }}>
            <ResourcesPageNav />
          </Col>
          <br />
        </Row>
        <Row className="site-content-row justify-context-xs-center">
          <Col xs={{ span: 10, offset: 1 }} style={{ textAlign: "center" }}>
            <h3>Resources Near Me</h3>
            Your Location:
            <ResourceForm handleAreaChange={this.handleAreaChange.bind(this)} />
  
            <iframe class="airtable-embed" src="https://airtable.com/embed/`${this.state.resources}" frameborder="0" onmousewheel="" width="100%" height="533" style={{background: "transparent", border: "1px solid #ccc,"}}></iframe>
            </Col>
        </Row>
      </div>
    );
  }
}

export default ResourcesPage;
