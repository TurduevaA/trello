import { FaTrello } from "react-icons/fa";
import styled from "styled-components";
import { ErrorMessage } from "../ui/ErrorMessage";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../store/thunks/authThunk";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandlerForm = async (userData) => {
    dispatch(loginThunk({ userData, navigate }));
    // console.log(userData);
  };

  return (
    <StyledContainer>
      <div>
        <FaTrello style={{ width: "45px", height: "45px", color: "#457acf" }} />
        <h1>Trello</h1>
      </div>
      <StyledForm onSubmit={handleSubmit(submitHandlerForm)}>
        <h3>Вход в Trello</h3>
        <input
          {...register("email", {
            required: {
              value: true,
              message: "email объязателен",
            },
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "пример: example@gmail.com",
            },
          })}
          type="text"
          placeholder="Укажите адрес электронной почты"
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>

        <input
          {...register("password", {
            required: { value: true, message: "введите валидный пароль" },
            minLength: {
              value: 6,
              message: "пароль должен быть больше 6 символов",
            },
          })}
          type="text"
          placeholder="Введите пароль"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <button type="submit">Продолжить</button>
        <hr />
        <Link>Не удается войти?</Link>
        <Link to="/register">Зарегистрировать аккаунт</Link>
      </StyledForm>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  background-color: #fafafa;
  margin: 0 auto;
  div {
    display: flex;
    gap: 10px;
    padding: 30px;
    h1 {
      font-size: 45px;
      color: #29294f;
    }
  }
  a {
    color: #0095ff;
    font-size: 12px;
    /* margin: 30px; */
  }
`;
const StyledForm = styled.form`
  width: 400px;
  height: 400px;
  border: 1px solid #f8f8f8;
  background: #fff;
  box-shadow: 0px 14px 30px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  h3 {
    padding-top: 40px;
    color: #343465;
  }
  input {
    width: 300px;
    height: 40px;
    padding-left: 10px;
    border-radius: 3px;
  }
  button {
    width: 300px;
    height: 35px;
    border: none;
    border-radius: 3px;
    background: #26bf26;
    color: white;
    font-weight: 700px;
    &:hover {
      background: #5dc45d;
    }
  }

  a {
    color: #0095ff;
    font-size: 12px;
  }
  hr {
    width: 300px;
    border-bottom: 1px solid rgba(173, 170, 170, 0.05);
    margin-top: 20px;
  }
`;
