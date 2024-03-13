import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="email-address" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="name@gmail.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="example text" className="form-label">
            Example text
          </label>
          <textarea
            name="example"
            id="example-text"
            cols={12}
            rows={8}
            className="form-control"
          ></textarea>
        </div>
      </form>
    </>
  );
};

export default Form;
