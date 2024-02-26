import styled from "styled-components";
import { Trello } from "../Trello";
import { TrelloList } from "../TrelloList";

export const Main = () => {
  return (
    <StyledMain>
      <StyledMainBlock>
        <TrelloList />
        <Trello />
      </StyledMainBlock>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  background-image: url("https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  overflow-x: scroll;
`;
const StyledMainBlock = styled.div`
  display: flex;
  gap: 15px;
  padding: 30px;
`;
