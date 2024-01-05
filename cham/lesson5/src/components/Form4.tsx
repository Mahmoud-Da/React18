import React, { useRef, useState } from "react";

const Form4 = () => {
  // Form3 + Form4 結果同じですが、書き方違います。
  // useStateの書き方
  const [person, setPerson] = useState({ name: "", age: 0 });
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="forml-label">
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
          <label htmlFor="age" className="forml-label">
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
      </form>
      <h1>
        {person.name},{person.age}{" "}
      </h1>
    </>
  );
};

export default Form4;

// 違い
// useState; page reloadされる
// useRef;page reloadされない
