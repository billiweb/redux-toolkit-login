import { createSlice } from "@reduxjs/toolkit";
import { useActionData } from "react-router-dom";
import shortid from "shortid";

export const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: shortid.generate(),
      userId: "heejin",
      pw: "1234",
      name: "홍길동",
      isLogin: false,
    },
  ],
  reducers: {
    login: (state, action) => {
      return state.map((user) => {
        if (
          user.userId === action.payload.userId &&
          user.pw === action.payload.pw
        ) {
          return { ...user, isLogin: !user.isLogin };
        } else {
          return user;
        }
      });
    },

    join: (state, action) => {
      const newUser = {
        id: shortid.generate(),
        userId: action.payload.userId,
        pw: action.payload.pw,
        name: action.payload.name,
        isLogin: true,
      };
      state.push(newUser);
    },

    logout: (state, action) => {
      return state.map((user) => {
        if (user.id === action.payload) {
          return { ...user, isLogin: false };
        }
      });
    },
  },
});

export const { login, join, logout } = userSlice.actions;
export default userSlice.reducer;
