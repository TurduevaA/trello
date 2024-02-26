import React from "react";
import styled from "styled-components";
import { HiPlus } from "react-icons/hi2";

export const Button = ({ children, onClick }) => {
  return (
    // <StyledButton>
    <StyledButton onClick={onClick}>
      {" "}
      <HiPlus size="15" color="white" /> {children}
    </StyledButton>
    // {/* </StyledButton> */}
  );
};

const StyledButton = styled.button`
  width: 230px;
  height: 40px;
  border-radius: 8px;
  background: #b9b8b8;
  padding-left: 5px;
  border: none;
  outline: none;
  overflow: hidden;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #cfcccc;
  }
`;
