import React from "react";
import "./ResourcesPage.css";
import Header from "../../components/Header/Header";
import { Row, Col } from "react-bootstrap";

const ResourcesPage = props => {
  return (
    <div>
      <Header />
      <Row className="site-content-row justify-context-xs-center">
        <Col xs={12} style={{ textAlign: "center" }}>
          <h3>Resources Near Me</h3>
        </Col>
      </Row>
    </div>
  );
};

export default ResourcesPage;
