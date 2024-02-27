import React, { useEffect } from "react";

const EffectCleanUp = () => {
  useEffect(() => {
    document.title = "mama";
  });

  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    connect();
    return () => disconnect();
  });

  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default EffectCleanUp;
