import { useCallback } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "../../index";
import {
  updateUserAvatar,
  updateUserLoginState,
  updateUserName,
  UserLoginState,
} from "../actions";

export function useUserName(): [string, (name: string) => void] {
  const dispatch = useAppDispatch();

  const userName = useSelector<AppState, AppState["userName"]>((state) => {
    return state.userName;
  });

  const setUserName = useCallback(
    (name: string) => {
      dispatch(updateUserName({ userName: name }));
    },
    [dispatch]
  );

  return [userName, setUserName];
}

export function useUserAvatar(): [string, (path: string) => void] {
  const dispatch = useAppDispatch();

  const userAvatarPath = useSelector<AppState, AppState["userAvatar"]>(
    (state) => {
      return state.userAvatar;
    }
  );

  const setUserAvatarPath = useCallback(
    (path: string) => {
      dispatch(updateUserAvatar({ avatarPath: path }));
    },
    [dispatch]
  );

  return [userAvatarPath, setUserAvatarPath];
}

export function useUserLoginState(): [
  UserLoginState,
  (loginState: UserLoginState) => void
] {
  const dispatch = useAppDispatch();

  const userLoginState = useSelector<AppState, AppState["loginState"]>(
    (state) => {
      return state.loginState;
    }
  );

  const setUserLoginState = useCallback(
    (loginState: UserLoginState) => {
      dispatch(updateUserLoginState({ userLoginState: loginState }));
    },
    [dispatch]
  );

  return [userLoginState, setUserLoginState];
}
