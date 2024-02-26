import { useState } from "react";
import { useDispatch } from "react-redux";
import { addColumn } from "../store/slices/trelloSlice";
import styled from "styled-components";
import { GoX } from "react-icons/go";
import { TrelloColumn } from "./TrelloColumn";

export const TrelloForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [validate, setValidate] = useState(false);
  const [plus, setPlus] = useState(false);
  const dispatch = useDispatch();
  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTrello = {
      title: inputValue,
      id: Date.now(),
      description: [],
    };
    if (!inputValue) {
      setValidate(true);
      return null;
    }
    dispatch(addColumn(newTrello));
    setValidate(true);
    setInputValue("");
  };

  return (
    <>
      {plus ? (
        <TrelloColumn />
      ) : (
        <Container>
          <StyledForm onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleChangeInput}
              value={inputValue}
              placeholder="Ввести заголовок списка "
            />
            <div>
              <button type="submit">Добавить список</button>
              {validate && <></>}
              <StyledIcon onClick={() => setPlus(true)} fontSize="20" />
            </div>
          </StyledForm>
        </Container>
      )}
    </>
  );
};
const Container = styled.div`
  width: 250px;
  height: 90px;
  background-color: white;
  border-radius: 17px;
`;
const StyledForm = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    padding: 10px;
    width: 230px;
    height: 30px;
    border-radius: 4px;
    border-style: hidden;
    outline-color: #5757ef;
    cursor: pointer;

    &:hover {
      border: 1.5px solid rgba(154, 154, 154, 0.8);
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
