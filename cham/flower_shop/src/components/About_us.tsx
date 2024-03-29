import React from "react";
import FINAL from "../assets/image/FINAL.webp";
import { Link } from "react-router-dom";
const About_us = () => {
  return (
    <>
      <div className="top-warpper-Aboutus">
        <div className="container-Aboutus-Left">
          <img id="image-Aboutus-Left" src={FINAL} />
        </div>
        <div className="container-Aboutus">
          <h1>Talented Florists:</h1>
          <h2>
            Our team of skilled and creative florists are dedicated to crafting
            stunning arrangements that suit your specific preferences and
            requirements.
          </h2>
        </div>

        <Link
          id="next"
          className="btn btn-outline-secondary"
          aria-current="page"
          to="/personalized_touch"
        >
          Next
        </Link>

        <Link
          id="return"
          className="btn btn-outline-secondary"
          aria-current="page"
          to="/prompt_delivery"
        >
          Return
        </Link>
      </div>
    </>
  );
};

export default About_us;
