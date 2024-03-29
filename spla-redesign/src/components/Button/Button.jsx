import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Button = props => {

  return (
    <Row>
      <Col xs={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 2 }}>
        <Link className="btn"  >{props.buttonName}</Link>
      </Col>
    </Row>
  );
};

export default Button;
