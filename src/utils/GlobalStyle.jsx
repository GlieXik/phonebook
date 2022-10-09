import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #f4f4f4;
    }
    ul,ol{
      padding: 0;
      margin: 0;
      list-style: none;
  }
  p{
    margin: 0;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;
