import { createAction } from "@reduxjs/toolkit";

export enum UserLoginState {
  LOGGINING = "LOGGINING",
  LOGGED_IN = "LOGGED_IN",
  LOGGED_OUT = "LOGGED_OUT",
}

export const updateUserName = createAction<{ userName: string }>(
  "user/updateUserName"
);
export const updateUserAvatar = createAction<{ avatarPath: string }>(
  "user/updateUserAvatar"
);
export const updateUserLoginState = createAction<{
  userLoginState: UserLoginState;
}>("user/updateUserLoginState");
