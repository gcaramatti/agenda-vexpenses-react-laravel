import { ButtonAdd, EditButton } from "./styles";
import CreateButtons from "../../../interface/Buttons/Create-Buttons";
import { EditIcon } from "../../icons";

export default function CreateButtonsComponent({
  edit,
  onClick,
  children = "Botão modal",
}: CreateButtons) {
  if (edit === false) {
    return (
      <div className="block">
        <ButtonAdd
          onClick={onClick}
          style={{ marginRight: "15px" }}
          className="block"
        >
          {children}
        </ButtonAdd>
      </div>
    );
  }
  return (
    <EditButton onClick={onClick} className="iconAtRight">
      <EditIcon pxsize={18} />
    </EditButton>
  );
}
