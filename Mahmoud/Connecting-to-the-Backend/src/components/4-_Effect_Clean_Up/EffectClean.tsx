import React, { useEffect } from "react";

const EffectClean = () => {
  useEffect(() => {
    document.title = "My App";
  });

  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    connect();
    return () => disconnect();
  });
  return (
    <>
      <div>d</div>
    </>
  );
};

export default EffectClean;
