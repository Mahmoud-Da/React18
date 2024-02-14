import React from "react";
import Person from "../assets/image/Person.jpg";
import { Link } from "react-router-dom";
const Personalized_touch = () => {
  return (
    <>
      <div className="top-warpper-Aboutus">
        <div className="container-Aboutus-Right">
          <img id="image-Aboutus-Right" src={Person} />
        </div>
        <div className="container-Aboutus1">
          <h1>Personalized Touch:</h1>
          <h2>
            Let us know your preferences, and we will tailor the arrangement to
            match your taste and style.
          </h2>
        </div>
        <Link
          id="next"
          className="btn btn-outline-secondary"
          aria-current="page"
          to="/prompt_delivery"
        >
          Next
        </Link>

        <Link
          id="return"
          className="btn btn-outline-secondary"
          aria-current="page"
          to="/about"
        >
          Return
        </Link>
      </div>
    </>
  );
};

export default Personalized_touch;
