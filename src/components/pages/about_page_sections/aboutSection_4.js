import React from "react";
import { Button } from "react-bootstrap";

function aboutSection_4() {
  return (
    <div
      className="px-4 py-5 text-center about-section-4"
      style={{ backgroundColor: "#CBF1F5", color: "#333333" }}
    >
      <div className="py-5 mx-auto">
        <h1 className="fw-bold mb-3">Be Part of the Wave</h1>

        <h5 className="mx-5 px-3 py-3 fw-medium mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </h5>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Button
            variant="primary"
            href="/menu"
            size="lg"
            className="primary-button2 px-4"
          >
            ORDER NOW
          </Button>
        </div>
      </div>
    </div>
  );
}

export default aboutSection_4;
