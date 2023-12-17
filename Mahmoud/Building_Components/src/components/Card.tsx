import { useState } from "react";
import lili from "../assets/img/lili.jpeg";
const Card = () => {
  const [selectedButton, setSelectedButtton] = useState(-1);

  // how to handle press button
  const handleButtonClick = () => {
    setSelectedButtton(selectedButton === 0 ? -1 : 0);
  };
  return (
    <div className="card">
      <img src={lili} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          className={
            selectedButton === 0 ? "btn btn-primary" : "btn btn-secondary"
          }
          onClick={handleButtonClick}
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
