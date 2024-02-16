import React, { useEffect, useRef } from "react";

const Lesson1 = () => {
  const ref = useRef<HTMLInputElement>(null);

  // Side effect
  if (ref.current) ref.current.focus();

  // afterRender
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  // we can write multi Effects hooks
  useEffect(() => {
    document.title = "My App";
  });
  return (
    <>
      <div>
        <input ref={ref} type="text" className="form-control" />
      </div>
    </>
  );
};

export default Lesson1;
