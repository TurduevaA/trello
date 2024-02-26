import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ModalContext } from "./context/ModalContext";
import { TrelloBoard } from "./TrelloModal";

export const DescriptionItem = ({ cardTitle }) => {
  const { isModalOpen, openModal, closeModal } = useContext(ModalContext);
  const [inputValue, setInputValue] = useState("");

  const handleCardTitleClick = () => {
    openModal();
    setInputValue(cardTitle);
  };

  return (
    <StyledItem>
      <p onClick={handleCardTitleClick}>{cardTitle}</p>
      <div></div>
      {isModalOpen && <TrelloBoard inputValue={inputValue} />}
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    padding-left: 10px;
    padding-top: 5px;
    font-size: 13px;
    width: 230px;
    height: 30px;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.04);
    cursor: pointer;
  }
`;
