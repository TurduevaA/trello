import styled from "styled-components";

export const CardTrello = ({ children }) => {
  return <StyledCardTrello>{children}</StyledCardTrello>;
};

const StyledCardTrello = styled.div`
  width: 250px;
  height: 100%;
  background-color: #fafafa;
  border-radius: 12px;
  padding: 10px;
`;
