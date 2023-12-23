import React from "react";

const Form2 = () => {
  {
    /* ex3 */
  }
  const handleSbmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitied");
  };
  return (
    <>
      {/* ex1 */}
      {/* <form onSubmit={(event) => console.log("Submitied")}> */}

      {/* ex2 */}
      {/* <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Submitied");
        }}
      > */}

      {/* ex3 */}
      <form onSubmit={handleSbmit}>
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
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form2;
