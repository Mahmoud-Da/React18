import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form5 = () => {
  // 画面表示
  const { register, handleSubmit } = useForm();
  const [person] = useState({ name: "", age: 0 });
  const onSubmit = (data: FieldValues) => {
    if (data.name !== null) {
      person.name = data.name;
    }
    if (data.age !== null) {
      person.age = data.age;
    }
    console.log(person);
  };

  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="forml-label">
            Name
          </label>
          <input
            {...register("name")}
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
            {...register("age")}
            id="age"
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
        <button className="btn btn-primary m-1" onClick={handleClick}>
          Click
        </button>
      </form>
      <p>{isVisible && `${person.name} ${person.age}`}</p>
    </>
  );
};

export default Form5;
