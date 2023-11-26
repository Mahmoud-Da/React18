import { useState } from "react";
import lili from "../assets/lili.png";
const Card = () => {
  const [selectedButton, setSelectedButtton] = useState(-1);

  // ボタンのスタイルを戻したい
  // handle => clickの処理が変数に保存する際に利用する単語
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

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Card;
