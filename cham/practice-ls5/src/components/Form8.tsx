import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Form8 = () => {
  const schema = z.object({
    name: z.string().min(3, { message: "3文字列以上が必要です。" }),
    age: z.number({ invalid_type_error: "数字が必要です。" }),
  });
  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name && <p className="text-danger">{errors.name.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form8;
