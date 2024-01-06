import React, { useState } from "react";

const Form4 = () => {
  const [person, setPerson] = useState({ name: "", age: 0 });
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(person);
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
          Click
        </button>
      </form>
      <h1>
        {person.name} - {person.age}
      </h1>
    </>
  );
};

export default Form4;
