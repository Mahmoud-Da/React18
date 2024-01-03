import React, { useRef, useState } from "react";

const Form3 = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person: { name: string; age: number } = { name: "", age: 0 };

  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };

  // Hooks
  // State Hook (useState)
  const [submit, setSubmit] = useState("0");
  // Ref (useRef)  useRef<取得したいhtmlelement>(null);
  useRef(null);

  // useRefを定義 ex: const ageRef = useRef<HTMLInputElement>(null);
  // input に refのattriubute を追加して, hook入れいる ex:  ref={ageRef}

  //　なぜ useRef(null)

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="forml-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="forml-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="number" className="form-control" />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form3;
