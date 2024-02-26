import { GoX } from "react-icons/go";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteColumn } from "../store/slices/trelloSlice";

export const TrelloMenu = ({ id, handleIcon }) => {
  const dispatch = useDispatch();

  const handleDeleteColumnData = (id) => {
    dispatch(deleteColumn(id));
  };

  return (
    <Container>
      <StyledMenuTitle>
        <StyledMenu>
          <h4>Действия со списком</h4>
          <GoX onClick={handleIcon} />
        </StyledMenu>
        <ul>
          <li>Добавить карточку...</li>
          <li>Копировать список...</li>
          <li onClick={() => handleDeleteColumnData(id)}>
            Архивировать список
          </li>
        </ul>
      </StyledMenuTitle>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: inline-block;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
const StyledMenu = styled.div`
  display: flex;
  gap: 40px;
  padding-top: 30px;
`;
const StyledMenuTitle = styled.div`
  li {
    list-style-type: none;
  }
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  width: 240px;
  height: 240px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 20px;
  font-size: 14px;
`;
