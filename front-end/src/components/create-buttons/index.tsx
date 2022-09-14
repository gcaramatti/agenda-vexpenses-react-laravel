import { ButtonAdd } from "./styles";
import CreateButtons from "./interfaces";

export default function CreateButtonsComponent({
  children = "Botão modal",
}: CreateButtons) {
  return <ButtonAdd>{children}</ButtonAdd>;
}
