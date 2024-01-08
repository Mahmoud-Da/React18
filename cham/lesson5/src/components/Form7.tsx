import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form7 = () => {
  // Zod + Yup + Joi(packges) => Validationサポートする => 早くValidationを書ける
  // Zod {zod@3.20.6} => (npm i zod@3.20.6)
  // https://zod.dev/ => zod documentation {調べるとき}

  // Basic
  // const schema = z.object({
  //   name: z.string().min(3),
  //   age: z.number().max(150),
  // });

  // @hookform/resolvers@2.9.11

  const schema = z.object({
    name: z.string().min(3, { message: "Name nust be at least 3 chars" }),
    // TODO: バグを修正
    age: z.number(),
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
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form7;
