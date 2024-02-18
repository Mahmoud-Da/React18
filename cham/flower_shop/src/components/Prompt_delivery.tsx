import React from "react";
import { Link } from "react-router-dom";
import Free_ship from "../assets/image/Free_ship.jpg";
const Prompt_delivery = () => {
  return (
    <>
      <div className="top-warpper-Aboutus">
        <div className="container-Aboutus-Left">
          <img id="image-Aboutus-Left" src={Free_ship} />
        </div>
        <div className="container-Aboutus">
          <h1>Prompt Delivery(Free ship):</h1>
          <h2>
            We understand the importance of timely delivery, and our efficient
            delivery service ensures your flowers reach their destination fresh
            and beautiful.
          </h2>
        </div>
        <Link
          id="next"
          className="btn btn-outline-secondary"
          aria-current="page"
          to="/end"
        >
          Next
        </Link>

        <Link
          id="return"
          className="btn btn-outline-secondary"
          aria-current="page"
          to="/personalized_touch"
        >
          Return
        </Link>
      </div>
    </>
  );
};

export default Prompt_delivery;
