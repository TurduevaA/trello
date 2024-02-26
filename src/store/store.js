import { configureStore } from "@reduxjs/toolkit";
import { trelloSlice } from "./slices/trelloSlice";
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    trello: trelloSlice.reducer,
    auth: authSlice.reducer,
  },
});
