import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PurposeCard(props) {
  return (
    <Container className="purpose-card my-5">
      <Row className="align-items-center">
        <Col
          xs={12}
          sm={3}
          md={2}
          lg={2}
          className="d-flex justify-content-center"
        >
          <div className="purpose-icon mb-3">
            <div className="icon-background">{props.icon}</div>
          </div>
        </Col>
        <Col xs={12} sm={9} md={10} lg={10}>
          <div className="purpose-text text-center text-sm-start text-md-start">
            <p className="purpose-title fw-bold">{props.purposeName}</p>
            <p className="purpose-description">{props.description}</p>
          </div>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default PurposeCard;
