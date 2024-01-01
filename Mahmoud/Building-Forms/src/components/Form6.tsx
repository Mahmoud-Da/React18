import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form6 = () => {
  // const { register, handleSubmit, formState } = useForm();

  // ex1
  // console.log(formState);

  // ex1
  // console.log(formState.errors);
  // ex1_2
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // ex-4
  interface FormData {
    name: "";
    age: 0;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (date: FieldValues) => console.log(date);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          {/* ex2 */}
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {/* ex1_1 */}
          {/* <p>The name field is Required.</p> */}
          {/* but we want to show it if we required error */}
          {/* {formState.errors.name?.type === "required" && (
            <p>The name field is Required.</p>
          )} */}
          {/* ex1_2 */}

          {errors.name?.type === "required" && (
            <p className="text-danger">The name field is Required.</p>
          )}

          {errors.name?.type === "minLength" && (
            <p className="text-danger">
              The name must be al least 3 charectors.
            </p>
          )}
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

export default Form6;
