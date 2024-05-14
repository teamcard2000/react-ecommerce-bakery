import React from 'react'
import { Row, Col } from "react-bootstrap";

function aboutSection_1() {
  return (
    <div
    className="px-4 py-5 text-center about-section-1"
    style={{ backgroundColor: "#FAD9D5" }}
  >
    <Row className="justify-content-center align-items-center my-5">
      <Col md={6} style={{ color: "#333333" }}>
        <h1 className="fw-bold mb-3">Our Story from the Sea</h1>
        <h5 className="mx-5 px-3 py-3 mb-5 fw-medium story-text">
          Coral Reef Bakery is the brainchild of Captain Finn, an
          experienced sailor turned baker, who brings his love for the ocean
          to life through delectable treats. Nestled along the serene
          coastline, this charming bakery is adorned with nautical artifacts
          and fills the air with the enticing aroma of freshly baked goods.
          Its signature creation, the Mermaid's Delight Cake, has become a
          sensation, boasting layers of moist sponge cake infused with
          tropical flavors like coconut and vanilla. Drawing locals and
          travelers alike, Coral Reef Bakery has become a beloved
          destination where each treat tells a tale of the sea, making it a
          must-visit for anyone craving a taste of oceanic magic!
        </h5>
      </Col>
      <Col md={6} className="d-flex justify-content-center">
        <img
          src={process.env.PUBLIC_URL + "assets/images/story-img.jpg"}
          alt="Sailor with the Cake"
          loading="lazy"
          className="img-fluid sailor-img"
        />
      </Col>
    </Row>
  </div>
  )
}

export default aboutSection_1