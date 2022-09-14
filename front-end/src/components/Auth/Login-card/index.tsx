import { Card, CardBody, CardHeader } from "../../cards/styles";
import LoginProps from "./interface";
import { MaxWidth } from "../../../globalStyles";
export default function LoginCardComponent({ children, title }: LoginProps) {
  return (
    <MaxWidth>
      <Card>
        <CardHeader>{title}</CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </MaxWidth>
  );
}
