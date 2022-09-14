export default interface ModalProps {
  edit: boolean;
  TextBtnModal: string;
  TextTitleModal: string;
  onSubmitFunction: React.FormEventHandler<HTMLElement>;
  children: any;
}

export interface AlertModalProps {
  children: string;
  isOpen: boolean;
  error: boolean;
  onRequestClose: () => void;
}
