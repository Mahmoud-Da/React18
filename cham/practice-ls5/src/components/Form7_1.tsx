import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Form7_1 = () => {
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const schema = z.object({
    email: z.string().email().regex(pattern, { message: "値が違います" }),
    password: z.string().min(8, { message: "値が短いです" }),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 row">
          <label htmlFor="email" className="col-sm-1 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              {...register("email")}
              id="email"
              type="text"
              className="form-control"
            />
            {errors.email && <p className="text-danger">値が違います</p>}
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-1 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              {...register("password")}
              id="password"
              type="password"
              className="form-control"
            />
            {errors.password && <p className="text-danger">値が短いです</p>}
          </div>
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </>
  );
};

export default Form7_1;
