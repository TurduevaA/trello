import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const registerThunk = createAsyncThunk(
  "auth/registerThunk",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);
      console.log(data);
      navigate("/login");

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/loginThunk",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);
      console.log(data);
      localStorage.setItem("auth", JSON.stringify(data));

      navigate("/");

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
