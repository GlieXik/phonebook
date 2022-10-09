import styled from "styled-components";

export const ContactsList = styled("ul")`
  width: 250px;
`;
export const ContactsItem = styled("li")`
  display: block;
  color: #000;
  background-color: white;
  padding: 8px 16px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  animation: 1s show ease;

  @keyframes show {
    from {
      opacity: 0;
      background-color: transparent;
      color: transparent;
    }
    to {
      opacity: 1;
      background-color: white;
      color: #000;
    }
  }
  &:hover {
    background-color: rgb(232, 243, 254);
  }
`;
