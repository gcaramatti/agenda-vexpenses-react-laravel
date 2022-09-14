import styled from "styled-components";

export const Title = styled.h1`
  color: white;
`;

export const ButtonAdd = styled.button`
  border: 1px solid transparent;
  margin-bottom: 12px;
  margin-right: 0;
  cursor: pointer;
  padding: 3px;
  font-size: 16px;
  text-align: center;
  line-height: 26px;
  width: 140px;
  color: black;
  background-color: #dedede;
  border-radius: 7px;

  &:hover {
    border: 1px solid #dedede;
    color: #dedede;
    background-color: transparent;
  }
`;

export const EditButton = styled.button`
  border: 0;
  background-color: transparent;
`;
