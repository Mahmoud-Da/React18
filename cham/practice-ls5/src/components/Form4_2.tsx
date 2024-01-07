import React, { useState } from "react";

const Form4_2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [person, setPerson] = useState({ name: "", age: 0 });
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, age: parseInt(event.target.value) })
            }
            value={person.age}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
        <button
          className="btn btn-success m-2"
          onClick={handleClick}
          type="button"
        >
          Click
        </button>
      </form>
      <p>{isVisible && `${person.name} ${person.age}`}</p>
    </>
  );
};

export default Form4_2;
