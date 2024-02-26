import { BiGrid } from "react-icons/bi";
import styled from "styled-components";
import { FaTrello } from "react-icons/fa";
import { TbSchoolBell } from "react-icons/tb";
import { GrCircleQuestion } from "react-icons/gr";
import { BiAdjust } from "react-icons/bi";
import { RiContactsFill } from "react-icons/ri";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderBlock>
        <BiGrid style={{ width: "25px", height: "25px", cursor: "pointer" }} />
        <div>
          <FaTrello
            style={{ width: "23px", height: "23px", cursor: "pointer" }}
          />
          <h2>Trello</h2>
        </div>
        <select>
          <option value="">Рабочие пространства</option>
        </select>
        <select name="" id="">
          <option value="">Недавние</option>
        </select>
        <select name="" id="">
          <option value="">В избранном</option>
        </select>
        <select name="" id="">
          <option value="">Шаблоны</option>
        </select>
        <button>Создать</button>
      </HeaderBlock>
      <HeaderBlock>
        <InputStyled>
          <HiOutlineMagnifyingGlass />
          <input type="search" placeholder=" Поиск" />
        </InputStyled>
        <TbSchoolBell
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <GrCircleQuestion
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />
        <BiAdjust
          style={{ width: "25px", height: "25px", cursor: "pointer" }}
        />

        <RiContactsFill
          style={{
            width: "25px",
            height: "25px",
            color: "violet",
            cursor: "pointer",
          }}
        />
      </HeaderBlock>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  background: #575656;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;

  & select {
    background: #575656;
    color: white;
    border: none;
    cursor: pointer;
  }
  & button {
    width: 100px;
    height: 35px;
    background: #7f7e7e;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const HeaderBlock = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  div {
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;
const InputStyled = styled("div")`
  width: 240px;
  border: 1px solid #7f7e7e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  background-color: #7f7e7e;

  input {
    overflow: hidden;
    cursor: pointer;

    outline: none;
    height: 35px;
    border: none;
    background-color: #7f7e7e;
  }
  ::placeholder {
    color: white;
  }
`;
