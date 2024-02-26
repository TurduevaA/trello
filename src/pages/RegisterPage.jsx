import React from "react";
import { ErrorMessage } from "../components/ui/ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerThunk } from "../store/thunks/authThunk";
import styled from "styled-components";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const submitHandler = async (userData) => {
    console.log(userData);
    dispatch(registerThunk({ userData, navigate }));
  };
  return (
    <StyledForm>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h2>Регистрация</h2>
        <input
          {...register("firstName", { required: "заполните имя" })}
          type="text"
          placeholder="введите полное имя"
        />
        <ErrorMessage>{errors?.firstName?.message}</ErrorMessage>
        <input
          {...register("lastName", { required: "заполните фамилию" })}
          type="text"
          placeholder="введите фамилию"
        />
        <ErrorMessage>{errors?.lastName?.message}</ErrorMessage>

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
          placeholder="введите почту"
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
          placeholder="введите пароль"
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  width: 600px;
  height: 550px;
  margin: 0 auto;
  margin-top: 40px;
  padding-top: 40px;
  background-color: #fafafa;

  form {
    width: 400px;
    height: 450px;
    margin: auto;
    border: 1px solid #f8f8f8;
    background: #fff;
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    h2 {
      color: #32ba32;
    }
    input {
      width: 250px;
      height: 40px;
      padding-left: 10px;
      border-radius: 3px;
    }
    button {
      width: 250px;
      height: 40px;
      background-color: #26bf26;
      color: white;
      border: none;
      border-radius: 3px;
      &:hover {
        background-color: #2b902b;
      }
    }
  }
`;
