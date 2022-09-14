import { useState } from "react";
import Modal from "react-modal";
import ModalProps from "../../interface/Modal";
import CreateButtonsComponent from "../Buttons/create-buttons";
import { BtnSave, BtnClose, FooterModal, ModalHeader } from "./styles";

export default function ModalComponent({
  edit,
  TextBtnModal,
  TextTitleModal,
  onSubmitFunction,
  children,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#root");

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <CreateButtonsComponent onClick={toggleModal} edit={edit}>
        {TextBtnModal}
      </CreateButtonsComponent>

      <Modal isOpen={isOpen} onRequestClose={toggleModal}>
        <ModalHeader>{TextTitleModal}</ModalHeader>
        <form
          onSubmit={async (e) => {
            onSubmitFunction(e);
            //toggleModal();
          }}
        >
          {children}
          <FooterModal>
            <BtnClose onClick={toggleModal}>Fechar</BtnClose>
            <BtnSave type="submit">Salvar</BtnSave>
          </FooterModal>
        </form>
      </Modal>
    </>
  );
}
