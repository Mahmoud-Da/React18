import React, { useState } from "react";

const Form3_1 = () => {
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
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-primary" onClick={handleClick}>
          Click
        </button>
        <p>{isVisible && person.name}</p>
      </form>
    </>
  );
};

export default Form3_1;
