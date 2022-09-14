import { MouseEventHandler } from "react";

export default interface CreateButtons {
  children: string;
  edit: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
