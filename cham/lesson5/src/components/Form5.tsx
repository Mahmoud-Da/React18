import { FieldValues, useForm } from "react-hook-form";

const Form5 = () => {
  // Form3 + Form4 + Form5 結果同じですが、書き方違います。
  // useFormの書き方
  // react-hook-form@7.43 install

  // downloadしたHookのメソッドの確認方法
  // let lili = use Form();
  // console.log(lili);
  // console.log(lili.register("name"));

  // useFormのメソッドの呼び出し方
  // [] x
  // {} ○
  const { register, handleSubmit } = useForm();
  // console.log(register("name"));

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="forml-label">
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
          <label htmlFor="age" className="forml-label">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default Form5;
