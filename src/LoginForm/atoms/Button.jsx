import styled from "styled-components";

export const Button = styled.button`
  background-color: blue;
  border-style: none;
  box-shadow: #022d99 0 0.25rem 0 0;
  color: white;
  height: 2.5rem;
  width: 5rem;

  &:focus {
    outline: none;
  }

  &:active {
    box-shadow: #022d99 0 0 0 0;
  }
`;
