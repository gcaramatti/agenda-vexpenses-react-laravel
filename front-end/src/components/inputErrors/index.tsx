import { Error } from "./style";

interface ErrorsProps {
  text: string;
}

export default function ErrorValidation({ text }: ErrorsProps) {
  return <Error>{text}</Error>;
}
