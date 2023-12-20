import { useState } from "react";

const FullName = () => {
  const [lastName, setLastname] = useState("Rose");
  const [fistName, setFistname] = useState("Hannah");
  const [person, setPerson] = useState({
    firstName: "Hannah",
    lastName: "Rose",
  });

  const handleClick = () => {
    setLastname(lastName.replace("Rose", "a flower"));
    setFistname(fistName.replace("Hannah", "Your's name likes"));
  };

  return (
    <>
      {person.firstName} {person.lastName}
      <br />
      {fistName} {lastName}
      <br />
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default FullName;
