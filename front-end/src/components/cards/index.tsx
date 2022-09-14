import { Card, CardHeader, CardBody, Table } from "./styles";
import { Link } from "react-router-dom";
//import { PreLoader } from "../Preloader/styles";
import CardProps from "./interfaces";

export default function CardComponent({
  cardTitle = "Título do card",
  children = "Sem conteúdo",
  linkPath = "/",
  linkText = "Texto do link",
}: CardProps) {
  return (
    <Card>
      <CardHeader>{cardTitle}</CardHeader>
      <CardBody>
        <div className="link">
          <Link to={linkPath}>{linkText}</Link>
        </div>
        <Table>{children}</Table>
      </CardBody>
    </Card>
  );
}
