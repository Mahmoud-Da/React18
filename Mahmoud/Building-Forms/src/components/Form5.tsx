import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form5 = () => {
  // ex1
  // const form = useForm();
  // console.log(form);

  // ex2
  // const { register } = useForm();
  // console.log(register("name"));

  // ex3
  const { register, handleSubmit } = useForm();

  const onSubmit = (date: FieldValues) => console.log(date);
  return (
    <>
      {/* // ex3   */}
      {/* <form onSubmit={handleSubmit((date) => console.log(date))}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          {/* ex2 */}
          <input
            {...register("name")}
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
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form5;
