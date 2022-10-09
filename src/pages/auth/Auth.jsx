import { useForm } from "react-hook-form";
import s from"./auth.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { userActivate } from "../../store/reducers";
import { useNavigate } from "react-router";
export default function Auth() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { isActivated, id } = useSelector(state => state.auth)
  const navigate = useNavigate();
  const onSubmit = (data) => dispatch(userActivate(data));

  if (isActivated) {
    navigate(`/user/${id}`)
  }
  return (
    <div className={s.auth}>
      <h2 className={s.title}>Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={s.auth_input} type='email' placeholder={'E-mail'} {...register("email")} />
        <input className={s.auth_input} type='password' placeholder={'Password'} {...register("password", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
}
