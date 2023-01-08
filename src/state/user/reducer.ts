import { createReducer } from "@reduxjs/toolkit";
import {
  updateUserName,
  updateUserAvatar,
  updateUserLoginState,
  UserLoginState,
} from "./actions";

export interface UserState {
  userName: string;
  userAvatar: string;
  loginState: UserLoginState;
}

export const initialState: UserState = {
  userName: "Guest",
  userAvatar: "",
  loginState: UserLoginState.LOGGED_OUT,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateUserName, (state, action) => {
      state.userName = action.payload.userName;
    })
    .addCase(updateUserAvatar, (state, action) => {
      state.userAvatar = action.payload.avatarPath;
    })
    .addCase(updateUserLoginState, (state, action) => {
      state.loginState = action.payload.userLoginState;
    })
);
