import React, { useState } from "react";
import { TrelloForm } from "./TrelloForm";
import { Button } from "./ui/Button";
import styled from "styled-components";

export const Trello = () => {
  const [state, setState] = useState(false);
  const handleInput = () => {
    setState(true);
  };
  return (
    <StyledTrello>
      {state ? (
        <TrelloForm />
      ) : (
        <div>
          <Button onClick={handleInput}>Добавить с писок</Button>
        </div>
      )}
    </StyledTrello>
  );
};
const StyledTrello = styled.div`
  display: flex;
  gap: 10px;
`;
