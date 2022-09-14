import styled from "styled-components";

export const Card = styled.div`
  background-color: #262626;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

export const CardHeader = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  border-bottom: 1px solid white;
`;

export const CardBody = styled.div`
  min-width: 80%;
  margin: 0 auto;
  flex: 1 1 auto;
  padding: 1rem 1rem;
`;

export const Table = styled.table`
  text-align: left;
  border-collapse: collapse;
  width: 100%;
`;

export const THead = styled.thead`
  border-bottom: 2px solid white;
`;

export const TD = styled.td`
  padding: 10px 0px;
  border-bottom: 1px solid white;
`;

export const TH = styled.th`
  padding: 10px 0px;
`;

export const LoginTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  color: white;
  opacity: 0.7;
`;
