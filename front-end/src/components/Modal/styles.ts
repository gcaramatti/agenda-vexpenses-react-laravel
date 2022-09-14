import styled from "styled-components";

export const BtnSave = styled.button`
  cursor: pointer;
  background-color: #dedede;
  font-size: 15px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  color: black;

  &:hover {
    color: #dedede;
    background-color: transparent;
    border: 1px solid #dedede;
  }
`;

export const BtnClose = styled.button`
  cursor: pointer;
  margin-right: 10px;
  background-color: transparent;
  border: 1px solid white;
  font-size: 15px;
  padding: 10px;
  border-radius: 8px;
  color: white;

  &:hover {
    opacity: 0.7;
  }
`;

export const FooterModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
`;
