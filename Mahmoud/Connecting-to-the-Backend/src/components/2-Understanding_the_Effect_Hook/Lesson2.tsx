import React, { useEffect, useRef } from "react";

const Lesson2 = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  return (
    <>
      <div></div>
    </>
  );
};

export default Lesson2;
