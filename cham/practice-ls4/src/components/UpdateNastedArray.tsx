import { useState } from "react";

const UpdateNastedArray = () => {
  const [errors, setErrors] = useState([
    { name: "Lyly 1", age: 3, sex: "female" },
    { name: "Lyly 2", age: 5, sex: "female" },
  ]);
  const handleClick = () => {
    setErrors(
      errors.map((error) =>
        error.age === 5 ? { ...error, sex: "male" } : error
      )
    );
  };
  return (
    <>
      {errors.map((error) => (
        <div key={error.age}>
          {`Error Name: ${error.name}, Age: ${error.age}, Sex:${error.sex}`}
        </div>
      ))}
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default UpdateNastedArray;
