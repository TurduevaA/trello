import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addCard } from "../../store/slices/trelloSlice";
import { GoX } from "react-icons/go";
import { Button } from "./Button";

export const TrelloListItem = ({ id }) => {
  const [column, setColumn] = useState(false);

  const dispatch = useDispatch();
  const [trelloItem, setTrelloItem] = useState("");

  const handleButtonItem = (id) => {
    if (trelloItem.trim().length > 0) {
      const newItem = {
        cardTitle: trelloItem,
        id: Date.now(id),
        parrentId: id,
      };
      dispatch(addCard(newItem));
      setTrelloItem("");
    }
  };

  const handleButton = () => {
    setColumn(true);
  };
  return (
    <>
      {column ? (
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={trelloItem}
            onChange={(e) => setTrelloItem(e.target.value)}
            placeholder="Ввести заголовок для этой карточки "
          />
          <div>
            <button onClick={() => handleButtonItem(id)}>
              Добавить карточку
            </button>
            <StyledIcon fontSize="20" onClick={() => setColumn(false)} />
          </div>
        </StyledForm>
      ) : (
        <Button onClick={handleButton}>Добавить карточку</Button>
      )}
    </>
  );
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    padding-left: 10px;
    padding-bottom: 10px;
    width: 230px;
    height: 60px;
    border-style: hidden;
    outline: none;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.04);
    overflow-wrap: auto;
    cursor: pointer;

    &::placeholder {
      white-space: pre-wrap;
    }
  }
  button {
    width: 140px;
    height: 30px;
    border-radius: 4px;
    border: none;
    background: #5757ef;
    color: white;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const StyledIcon = styled(GoX)`
  width: 26px;
  height: 26px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #bab8b8;
  }
`;
