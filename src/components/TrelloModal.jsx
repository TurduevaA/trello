import React, { useContext } from "react";
import { Modal } from "./ui/Modal";
import { ModalContext } from "./context/ModalContext";
import { CardTrello } from "./ui/CardTrello";
import { GoX } from "react-icons/go";
import styled from "styled-components";

export const TrelloBoard = ({ inputValue }) => {
  const { closeModal } = useContext(ModalContext);
  return (
    <Modal closeModal={closeModal}>
      <CardTrello>
        <StyledContainer>
          <input type="text" value={inputValue} />

          <GoX onClick={closeModal} />
        </StyledContainer>
      </CardTrello>
    </Modal>
  );
};

const StyledContainer = styled.div`
  display: flex;
  gap: 20px;
`;
