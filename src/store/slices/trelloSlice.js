import { createSlice } from "@reduxjs/toolkit";

export const trelloSlice = createSlice({
  name: "trello",

  initialState: {
    columns: [],
  },
  reducers: {
    addColumn: (state, action) => {
      state.columns.push(action.payload);
    },
    addCard: (state, action) => {
      console.log(action.payload);
      state.columns.map((item) => {
        if (item.id === action.payload.parrentId) {
          item.description.push(action.payload);
        }
      });
    },
    deleteColumn: (state, action) => {
      const trelloId = action.payload;
      const filteredColumn = state.columns.filter(
        (item) => item.id !== trelloId
      );
      state.columns = filteredColumn;
    },
  },
});

export const { addColumn, addCard, deleteColumn } = trelloSlice.actions;
