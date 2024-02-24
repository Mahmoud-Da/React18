import React, { useEffect } from "react";

const EffectCleanUp = () => {
  useEffect(() => {
    document.title = "ウィウィ";
  });

  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    connect();
    return () => disconnect();
  });
  return (
    <>
      <div></div>
    </>
  );
};

export default EffectCleanUp;

// Connecting => Reactが初回目にcomponentをマウント(mount)
// Disconnecting => Reactがcomponentをマウント(unmount)
// Connecting => Reactが2回目にcomponentをマウント(mount)

// Mounting occurs when a component is first added to the page,
// while rendering occurs when a component's state changes
