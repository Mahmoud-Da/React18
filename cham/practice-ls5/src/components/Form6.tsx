import { FieldValues, useForm } from "react-hook-form";

const Form6 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);
  const submitNameErrors = () => {
    return (
      <>
        {submitRequiredErrors()}
        {submitMinLengthErrors()}
      </>
    );
  };
  const submitAgeErrors = () => {
    return (
      <>
        {submitRequiredErrors()}
        {submitMaxErrors()}
      </>
    );
  };
  const submitRequiredErrors = () => {
    return (
      errors.name?.type === "required" && (
        <p className="text-danger">値を入力してください。</p>
      )
    );
  };

  const submitMinLengthErrors = () => {
    return (
      errors.name?.type === "minLength" && (
        <p className="text-danger">内容が短いです。</p>
      )
    );
  };

  const submitMaxErrors = () => {
    return (
      errors.age?.type === "max" && (
        <p className="text-danger">値が大きいです。</p>
      )
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
          {submitNameErrors()}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true, max: 130 })}
            id="age"
            type="number"
            className="form-control"
          />
          {submitAgeErrors()}
        </div>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form6;
