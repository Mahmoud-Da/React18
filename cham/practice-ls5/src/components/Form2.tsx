import React from "react";

const Form2 = () => {
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("event");
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-success" type="submit">
          Click
        </button>
      </form>
    </>
  );
};

export default Form2;
