import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";

const initialState = [];

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push({
        id: shortid.generate(),
        title: action.payload.title,
        contents: action.payload.contents,
        writerId: action.payload.writerId,
        isDeleted: false,
      });
    },

    deletePost: (state, action) => {
      return state.filter((board) => board.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = boardSlice.actions;
export default boardSlice.reducer;
