import styled from "styled-components";

export const Header = styled.nav`
  z-index: 10;
  width: 100%;
  min-height: 30px;
  position: fixed;
  overflow: hidden;
  background-color: #262626;
`;

export const ContentLimit = styled.div`
  display: block;
  max-width: 1170px;
  margin-right: auto;
  margin-left: auto;
`;

export const Logo = styled.p`
  padding-top: 0.32rem;
  padding-bottom: 0.32rem;
  margin-right: 1rem;
  font-size: 1.125rem;
  text-decoration: none;
  white-space: nowrap;
  float: left;
`;

export const Logout = styled.button`
  margin-top: 0.53rem;
  float: right;
  font-size: 17px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
`;

export const LogoutContent = styled.div`
  color: black;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);

  ${Logout}:hover & {
    display: block;
  }
`;
