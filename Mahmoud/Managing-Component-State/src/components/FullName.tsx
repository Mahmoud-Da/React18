import { useState } from "react";

const FullName = () => {
  const [firstName, setFirstName] = useState("name");
  const [lastName, setLastName] = useState("dodo");
  const [loading, isLoading] = useState(false);
  // ex1
  // second way
  const fullName = firstName + " " + lastName;

  // ex2
  // third way
  // take the relatid hook and put in one object
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    // ex3
    // aviod nasted object as posible cuz handling nastig objects is difficult
    address: { zipCode: 1212 },
  });
  return (
    // if we want to show the full name
    <>
      {/* first way */}
      <div>
        {firstName} {lastName}
      </div>
      {/* secondway */}
      <div>{fullName}</div>
    </>
  );
};

export default FullName;
