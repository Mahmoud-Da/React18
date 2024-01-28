import categories from "../data/category";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  desciption: z
    .string({ required_error: "desciptionが必須です。" })
    .min(3, "desciptionは3文字以上で入力してください")
    .max(50, "desciptionは50文字以下で入力してください"),
  amount: z
    .number({ required_error: "amountが必須です。" })
    .min(0.01, "amountは0.01以上で入力してください")
    .max(100_000, "amountは100_000以下で入力してください"),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Categoryが必須です" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="desciption" className="form-label">
            Desciption
          </label>
          <input
            {...register("desciption")}
            id="desciption"
            type="text"
            className="form-control"
          />
          {errors.desciption && (
            <p className="text-danger">{errors.desciption.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
