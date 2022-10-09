import { useForm } from "react-hook-form";
import s from"./auth.module.scss";
export default function Auth() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className={s.auth}>
      <h2 className={s.title}>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className={s.auth_input} defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input className={s.auth_input} {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
