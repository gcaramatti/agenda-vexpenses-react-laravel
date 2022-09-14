import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: 'Nunito', sans-serif;
    display: flex;
    flex-direction: column;
    color: white;
    margin: 0;
    padding: 0;
    background: #333333;
    //font-family: Open-Sans, Helvetica, Sans-Serif;
    min-height: 100%;
  }

  a {
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    border: 1px solid white;
    padding: 0.375rem 0.75rem;
    margin: 20px 0px;

    &:hover {
      opacity: 0.8;
    }
  }
  
  .btn {
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    border: 1px solid white;
    padding: 0.375rem 0.75rem;
    margin: 20px 0px;

    &:hover {
      opacity: 0.8;
    }
  }

  
  .ReactModalPortal {
    transition: opacity 0.15s linear;
  }

  .ReactModal__Content.ReactModal__Content--after-open {
    background-color: #262626 !important;
    height: fit-content;
    z-index: 1000;
    max-width: 500px;
    margin: 0 auto;

    @media(max-width: 600) {
      width: 90%;
    }
  }

  .ReactModal__Overlay.ReactModal__Overlay--after-open {
    background-color: #26262699 !important;
    transition: opacity 0.15s linear;
    z-index: 1000;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 2000ms ease-in-out;
  }

  .ReactModal__Overlay--after-open {
      opacity: 1;
  }

  .ReactModal__Overlay--before-close {
      opacity: 0;
  }

  .eyeIcon {
    float: none;
    color: white;
    text-decoration: none;
    border-radius: 0.25rem;
    border: 0;
    padding: 0;
    margin: 20px 0px;

    &:hover {
      opacity: 0.8;
    }
  }

  .input {
    margin: 10px 0px;
    border: 1px solid white;
    border-radius: 4px;
    color: white;
    min-width: 48%;
    height: 45px;
    background-color: transparent;
  }

  .input.mr-4 {
    margin-right: 4%;
  }

  .input.wd50 {
    width: 50%;

    @media(max-width: 600) {
      width: 100%;
    }
  }

  .input.wd100 {
    width: 100%
  }

  @-webkit-keyframes spin {
    0% { 
      -webkit-transform: rotate(0deg); 
    }
    100% { 
      -webkit-transform: rotate(360deg); 
    }
  }
  
  @keyframes spin {
    0% { 
      transform: rotate(0deg); 
    }
    100% { 
      transform: rotate(360deg); 
    }
  }

  table {
    text-align: left;
    border-collapse: collapse;
    width: 100%;
  }

  hr {
    opacity: 0.25;
    border-width: 0.5px;
  }

  .iconAtRight {
    margin-left: auto !important;
    align-self: center !important;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: 1px;
  }

  p {
    opacity: 0.7;
  }

  .block {
    display: block;
  }

  .flex {
    display: flex;
  }

  .link {
    width: 100%;
    text-align: end;
    margin: 20px 0;
  }
  .loginWidth {
    margin: 0 auto;
    max-width: 50%;
    @media(max-width: 600) {
      width: 90%;
    }
  }

  .forgot_password {
    font-size: 14px;
    opacity: 0.7;
    border: 0;
  }

  .wd100{
    width: 100%;
  }

  .align_center{
    text-align: center;
  }

  .mtb-20 {
    margin: 20px 0;
  }

  #success-modal {
    z-index: 100000;
  }
`;

export default GlobalStyle;

export const MaxWidth = styled.div`
  margin: 80px auto 0;
  max-width: 1320px;
`;
