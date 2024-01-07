import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form5_2 = () => {
  const [person] = useState({ name: "", age: "" });
  const { register, handleSubmit } = useForm();
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
          <label htmlFor="name" className="form-label">
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

export default Form5_2;
