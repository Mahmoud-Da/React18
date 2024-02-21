import React, { useEffect, useRef } from "react";

const Lesson2 = () => {
  const ref = useRef<HTMLInputElement>(null);

  // side effect
  if (ref.current) ref.current.focus();

  // after rendering
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  // DOMの変更
  useEffect(() => {
    document.title = "HANA";
  });

  useEffect(() => {
    console.log("lili");
  });
  return (
    <>
      <div>
        <input ref={ref} type="text" className="form-control" />
      </div>
    </>
  );
};

export default Lesson2;
