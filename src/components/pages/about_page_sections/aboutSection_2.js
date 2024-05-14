import React from "react";
import { Row, Col } from "react-bootstrap";
import PurposeCard from "../../PurposeCard";
import PurposeList from "../../PurposeList";

function aboutSection_2() {
  return (
    <div
      className="px-4 py-5 text-center about-section-2"
      style={{ backgroundColor: "#CBF1F5" }}
    >
      <Row
        className="justify-content-center align-items-center my-5"
        style={{ color: "#333333" }}
      >
        <Col xs={12} className="mb-3 order-1 order-md-1 text-center">
          <h1 className="fw-bold">Baking with Purpose</h1>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center mb-3 mb-md-0 order-2 order-md-2"
        >
          <img
            src={
              process.env.PUBLIC_URL + "/assets/images/bakingwithpurpose-img.jpg"
            }
            alt="Bakers prepping baked goods"
            loading="lazy"
            className="img-fluid baking-img"
          />
        </Col>
        <Col xs={12} md={6} className="order-3">
          <h5 className="mx-5 px-3 py-3 fw-medium">
            {PurposeList.map((purpose, idx) => {
              return (
                <div key={idx}>
                  <PurposeCard
                    icon={purpose.icon}
                    purposeName={purpose.purposeName}
                    description={purpose.description}
                  />
                </div>
              );
            })}
          </h5>
        </Col>
      </Row>
    </div>
  );
}

export default aboutSection_2;
