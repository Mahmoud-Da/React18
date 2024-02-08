import React from "react";

const About_us = () => {
  return (
    <>
      <div className="top-warpper-Aboutus">
        <div className="container-Aboutus-Left">
          <img
            id="image-Aboutus-Left"
            src="./image/FINAL_Cut_Flowers_credit-Stocksy.webp"
          />
        </div>
        <div className="container-Aboutus">
          <h1>Talented Florists:</h1>
          <h2>
            Our team of skilled and creative florists are dedicated to crafting
            stunning arrangements that suit your specific preferences and
            requirements.
          </h2>
        </div>
        <a
          id="next"
          className="btn btn-outline-secondary"
          href="./about_us1.html"
        ></a>
        <a
          id="return"
          className="btn btn-outline-secondary"
          href="./about_us.html"
        ></a>
      </div>
    </>
  );
};

export default About_us;
