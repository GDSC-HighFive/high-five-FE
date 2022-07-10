import styled from "styled-components";

export const borderColor = hasError => {
    return hasError ? "red" : "gray";
};

export const focusBorderColor = hasError => {
    return hasError ? "red" : "blue";
};

export const Input = styled.input`
  border: 0.125rem solid ${props => borderColor(props.hasError)};
  font-size: 1rem;
  height: 2rem;
  padding: 0 0.5rem;
  width: 100%;

  &:focus {
    border: 0.125rem solid ${props => focusBorderColor(props.hasError)};
    outline: none;
  }
`;
