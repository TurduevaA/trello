import React, { useState } from "react";
import { TrelloItem } from "../TrelloItem";
import { TrelloMenu } from "../TrelloMenu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import styled from "styled-components";
import { CardTrello } from "./CardTrello";

export const ColumnItem = ({ title, id, description }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleIcon = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <CardTrello>
      <StyledList>
        <StyledTitle>
          <textarea>{title}</textarea>
          <div>
            {openMenu ? <TrelloMenu handleIcon={handleIcon} id={id} /> : null}
            <StyledIcon onClick={handleIcon} />
          </div>
        </StyledTitle>

        <>
          <TrelloItem description={description} id={id} />
        </>
      </StyledList>
    </CardTrello>
  );
};

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;

  textarea {
    padding-left: 5px;
    padding-top: 5px;
    border: none;
    resize: none;
    outline-color: #5757ef;
    background: none;
    cursor: pointer;
  }
`;

const StyledIcon = styled(HiOutlineDotsHorizontal)`
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #dbd4d4;
    border-radius: 5px;
  }
`;
