import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("Campo e-mail vazio"),
  password: yup.string().required("Campo senha vazio"),
});

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("O nome não pode ser nulo"),
  email: yup
    .string()
    .email("Formato de e-mail inválido")
    .required("O E-mail não pode ser nulo"),
  password: yup
    .string()
    .required("Senha vazia")
    .min(8, "A senha deve conter no mínimo 8 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});
