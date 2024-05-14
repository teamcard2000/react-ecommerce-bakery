import React from "react";
import ABOUTSECTION_0 from "./about_page_sections/aboutSection_0";
import ABOUTSECTION_1 from "./about_page_sections/aboutSection_1";
import ABOUTSECTION_2 from "./about_page_sections/aboutSection_2";
import ABOUTSECTION_3 from "./about_page_sections/aboutSection_3";
import ABOUTSECTION_4 from "./about_page_sections/aboutSection_4";

const About = () => {
  const imageUrl =
    process.env.PUBLIC_URL + "/assets/images/about-us-herosection.png";

  return (
    <>
      <div
        className="px-4 py-5 text-center bg-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${imageUrl}')`,
          height: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <h1 className="display-1 fw-bold" style={{ color: "white" }}>
            About Us
          </h1>
        </div>
      </div>
      <ABOUTSECTION_0 />
      <ABOUTSECTION_1 />
      <ABOUTSECTION_2 />
      <ABOUTSECTION_3 />
      <ABOUTSECTION_4 />
    </>
  );
};

export default About;
