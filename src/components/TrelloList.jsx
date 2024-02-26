import styled from "styled-components";

import { ColumnItem } from "./ui/ColumnItem";
import { useSelector } from "react-redux";

export const TrelloList = () => {
  const { columns } = useSelector((state) => state.trello);

  return (
    <StyledDiv>
      {columns.map((item) => {
        return <ColumnItem key={item.id} {...item} />;
      })}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
`;
