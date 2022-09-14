import { RegisterRequest } from "../../../services/Login/Register";
import { useNavigate } from "react-router-dom";
import CardComponent from "../../../components/cards";
import { MaxWidth } from "../../../globalStyles";
import { LoginTitle } from "../../../components/cards/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../../schemas/login/loginFormSchema";
import ErrorValidation from "../../../components/inputErrors";

export default function Register() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  function RegisterNewUser(data: any) {
    RegisterRequest(data);
    reset();
    navigate("/login", { replace: true });
  }

  return (
    <MaxWidth>
      <CardComponent cardTitle="Cadastro" linkText="Login" linkPath="/">
        <LoginTitle>Realizar cadastro</LoginTitle>
        <div className="loginWidth">
          <form
            onSubmit={handleSubmit((data) => {
              RegisterNewUser(data);
              reset();
            })}
          >
            <input
              type="text"
              className="input wd100"
              placeholder="Nome"
              {...register("name")}
            />
            <input
              type="email"
              className="input wd100"
              placeholder="E-mail"
              {...register("email")}
            />
            <input
              type="password"
              className="input wd100"
              placeholder="Senha"
              {...register("password")}
            />
            <input
              type="password"
              className="input wd100"
              placeholder="Confirmar senha"
              {...register("password_confirmation")}
            />
            {errors?.name?.message && (
              <ErrorValidation text={String(errors.name.message)} />
            )}
            {errors?.email?.message && (
              <ErrorValidation text={String(errors.email.message)} />
            )}
            {errors?.password?.message && (
              <ErrorValidation text={String(errors.password.message)} />
            )}
            {errors?.password_confirmation?.message && (
              <ErrorValidation
                text={String(errors.password_confirmation.message)}
              />
            )}
            <div style={{ textAlign: "center" }}>
              <button className="btn" type="submit" id="register-btn">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </CardComponent>
    </MaxWidth>
  );
}
