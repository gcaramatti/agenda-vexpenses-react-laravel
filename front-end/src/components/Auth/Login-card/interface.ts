import { FieldValues, UseFormRegister } from "react-hook-form";

export default interface LoginProps {
  children?: any;
  title: string;
}

export interface LoginResponse {
  handleSubmit?: UseFormRegister<FieldValues>;
}
