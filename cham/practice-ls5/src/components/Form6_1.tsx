import { FieldValues, useForm } from "react-hook-form";

const Form6_1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  const submitEmailErrors = () => {
    return (
      errors.email?.type === "pattern" && (
        <p className="text-danger">値が違います</p>
      )
    );
  };

  const submitPasswordErrors = () => {
    return (
      errors.password?.type === "minLength" && (
        <p className="text-danger">値が短いです</p>
      )
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-1 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              id="staticEmail"
              type="text"
              className="form-control"
            />
          </div>
          {submitEmailErrors()}
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-1 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              {...register("password", {
                required: true,
                minLength: 8,
              })}
              id="inputPassword"
              type="password"
              className="form-control"
            />
          </div>
          {submitPasswordErrors()}
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </>
  );
};

export default Form6_1;
