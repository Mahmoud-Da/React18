import { useState } from "react";
import girls from "../assets/girls.png";
// import girl1 from "../assets/girl1.png";
const Cards = () => {
  const [selectedButton, setSelectedButtton] = useState(-1);

  const handleButtonClick = () => {
    setSelectedButtton(selectedButton === 0 ? -1 : 0);
  };
  return (
    <div className="card">
      <img src={girls} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>

      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>

      <button className="btn btn-success">Success</button>
      <img src={girl1} className="rounded mx-auto d-block" alt="..." />

      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <a
        className={
          selectedButton === 0 ? "btn btn-primary" : "btn btn-secondary"
        }
        onClick={handleButtonClick}
      >
        Go somewhere
      </a>
    </div>
  );
};

export default Cards;
