// Handling From SUBMISSON
const App = () => {
  const handleSubmit = (event: FormEvent) =>{
    event.privateDefult() {
      console.log("Submitted")
    }
  }

  return(
    <form onSubmited={handleSubmit}></form>
  )
}

// Manging Form state using React Hook Form
import {FieldValues, useForm} from "react-hook-form"

const App = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log("Submitting the form", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}type="text" />
    </form>
  )
}



// Validation using Html5 Attributes
const App = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log("Submitting the form", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name"), {required: true}}type="text" />
      {errors.name?.type === "required" && <p>Name is required</p>}
    </form>
  )
}

// Disabling the Submit Buttom

const App = () => {
  const {
    formState: {errors},
  } = useForm<FormData>();

  return (
    <form >
      <button disabled={!isValid}> Submit</button>
    </form>
  )
}

// Schema Based validation with ZOD
import {FieldValues, useForm} from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolver/zod"

const schema = z.object({
  name: z.string().min(3)
})

type FormData = z.infer<typeof schema>

const App = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>() ({resolver: zodResolver(schema)});


  const onSubmit = (data: FieldValues) => {
    console.log("Submitting the form", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")}type="text" />
      {errors.name && <p>errors.name.message</p>}
    </form>
  )
}
