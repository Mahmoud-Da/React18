import { useState } from "react";
import girls from "../assets/girls.png";

const Cards = () => {
  // const [selectedButton, setSelectedButtton] = useState(-1);

  // const handleButtonClick = () => {
  //   setSelectedButtton(selectedButton === 0 ? -1 : 0);
  // };
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

      <button
      // className={
      //   selectedButton === 0 ? "btn btn-primary" : "btn btn-secondary"
      // }
      // onClick={handleButtonClick}
      >
        Go somewhere
      </button>
    </div>
  );
};

export default Cards;
