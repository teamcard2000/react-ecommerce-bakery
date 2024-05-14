import React from "react";
import { Row, Col } from "react-bootstrap";

function aboutSection_3() {
  return (
    <div
      className="px-4 py-5 text-center about-section-3"
      style={{ backgroundColor: "#D7BB9C" }}
    >
      <Row className="justify-content-center align-items-center my-5">
        <Col
          md={6}
          className="d-flex justify-content-center mb-5 order-2"
        >
          <img
            src={process.env.PUBLIC_URL + "/assets/images/ourmission-img.jpg"}
            alt="Our Mission"
            loading="lazy"
            className="img-fluid mission-img"
          />
        </Col>
        <Col md={6} className="order-1" style={{ color: "#333333" }}>
          <h1 className="fw-bold mb-3">Our Mission</h1>
          <h5 className="mx-5 px-3 py-3 fw-medium mission-text">
            At Coral Reef Bakery, our mission is twofold: to delight the senses
            with artisanal baked masterpieces inspired by the stunning diversity
            of our oceans, and to actively protect the marine environments that
            inspire us. We're dedicated to crafting every pastry, bread, and
            cake with the finest ingredients, passion, and artistry.
            Simultaneously, we commit to sustainable practices that help
            preserve our planet’s precious coral reefs. Join us on this
            delicious journey of taste and stewardship, where every bite
            supports a greater cause.
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default aboutSection_3;
