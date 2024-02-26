import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "../thunks/authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: null,
    registrationStatus: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.registrationStatus = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.registrationStatus = null;
        state.role = action.payload.role;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.registrationStatus = action.payload;
      });
  },
});
