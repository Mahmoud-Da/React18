import { useState } from "react";
import butterfly from "../assets/butterfly.jpg";
const Columns = () => {
  const [selectedButton, setSelectedButtton] = useState(-1);

  const handleButtonClick = () => {
    setSelectedButtton(selectedButton === 0 ? -1 : 0);
  };
  return (
    <div className="container text-center">
      <a
        href="#"
        className={
          selectedButton === 0 ? "rounded float-end" : "rounded float-start"
        }
        onClick={handleButtonClick}
      >
        <img src={butterfly} className="img-fluid" alt="..." />
      </a>
      <h1>ANIMAL WORLD</h1>

      <div className="row align-items-center">
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
      </div>
    </div>
  );
};
export default Columns;
