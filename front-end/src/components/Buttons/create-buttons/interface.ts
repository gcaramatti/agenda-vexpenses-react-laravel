import { MouseEventHandler } from "react";

export default interface CreateButtons {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
