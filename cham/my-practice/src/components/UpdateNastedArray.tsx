import React, { useState } from "react";

const UpdateNastedArray = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: "Peter", sex: "male" },
    { id: 2, name: "Ami", sex: "female" },
  ]);
  const handleClick = () => {
    setPersons(
      persons.map((person) =>
        person.id === 2 ? { ...person, name: "Shang mi", sex: "male" } : person
      )
    );
  };
  return (
    <>
      <h1>UpdateNastedArray</h1>
      {persons.map((person) => (
        <h2
          key={person.id}
        >{`Person Id: ${person.id}, Name: ${person.name}, Sex: ${person.sex},`}</h2>
      ))}
      <button className="btn btn-warning" onClick={handleClick}>
        Button
      </button>
    </>
  );
};

export default UpdateNastedArray;
