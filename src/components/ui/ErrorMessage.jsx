import styled from "styled-components";

export const ErrorMessage = ({ children }) => {
  return <StyledErrorMessage>{children}</StyledErrorMessage>;
};

const StyledErrorMessage = styled.span`
  font-size: 14px;
  color: red;
`;
