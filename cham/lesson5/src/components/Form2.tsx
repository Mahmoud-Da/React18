import React from "react";

const Form2 = () => {
  // handle event 処理
  const handleOnSubmit = (event: React.FormEvent) => {
    // サーバーがないから
    event.preventDefault();
    console.log("event");
  };
  // event  とは何
  // const a: string = "a";
  // const b: number = 2;
  // handle event
  // onSubmit
  // let lili1: React.FormEvent;
  // // onClick
  // let lili2: React.MouseEvent;

  // const a = () => {
  //   console.log("lili社長");
  // };
  // メソッドcall (プログラマーがバソコンにaメソッド今すぐ呼び出して)
  // a();
  // メソッドrefrence　(プログラマーがバソコンにbuttonやsubmitなど押したら呼び出して)
  // a;

  //React はいつも　メソッドrefrence を利用する　例: onSubmit={handleOnSubmit}
  return (
    <>
      <form onSubmit={handleOnSubmit}>
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
