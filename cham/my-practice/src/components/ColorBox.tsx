import React, { useState } from "react";
const ColorBox = () => {
  const [color, setColor] = useState("pink");

  const handleClick = () => {
    setColor("yellow");
  };
  return (
    <>
      <div
        className="mb-3 color-box"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        ColorBox
      </div>

      {/* inline style 書き方 */}
      <div style={{ backgroundColor: "yellow", color: "red" }}>Hello</div>
    </>
  );
};

export default ColorBox;
