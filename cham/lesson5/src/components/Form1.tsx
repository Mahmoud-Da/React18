import React from "react";
// div.mb-3>li*3+td*3　の書き方
// input のidを設定　labelのhtmlForを設定
const Form1 = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="forml-label">
            Name
          </label>
          <input id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="forml-label">
            Age
          </label>
          <input id="age" type="text" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form1;
