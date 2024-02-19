import React from "react";
import { Link } from "react-router-dom";
import green_flowers from "../assets/image/green_flowers.webp";

const End = () => {
  return (
    <>
      <div className="top-warpper-Aboutus">
        <div className="container-Aboutus-Right">
          <img id="image-Aboutus-Right" src={green_flowers} />
        </div>
        <div className="container-Aboutus1">
          <h2>
            Experience the joy of giving and receiving fresh, vibrant flowers
            from our flower shop. We look forward to serving you and adding a
            touch of beauty to your life's moments!
          </h2>
        </div>
        <Link
          id="next"
          className="btn btn-outline-secondary"
          aria-current="page"
          to="/about"
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

export default End;
