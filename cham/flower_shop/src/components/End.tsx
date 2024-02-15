import React from "react";

const End = () => {
  return (
    <>
      <div className="top-warpper-Aboutus">
        <div className="container-Aboutus-Right">
          <img id="image-Aboutus-Right" src="./image/green-flowers.jpg.webp" />
        </div>
        <div className="container-Aboutus1">
          <h2>
            Experience the joy of giving and receiving fresh, vibrant flowers
            from our flower shop. We look forward to serving you and adding a
            touch of beauty to your life's moments!
          </h2>
        </div>
        <a
          id="next"
          className="btn btn-outline-secondary"
          href="./about_us.html"
        ></a>
        <a
          id="return"
          className="btn btn-outline-secondary"
          href="./about_us2.html"
        ></a>
      </div>
    </>
  );
};

export default End;
