import React, { useRef } from "react";

const Form3 = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 }; // ex3

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (nameRef.current !== null) {
  //     console.log(nameRef.current.value);
  //   }
  //   if (ageRef.current !== null) {
  //     console.log(ageRef.current.value);
  //   }
  // };

  // ex3
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form3;
