import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import user from "./user/reducer";

const store = configureStore({
  reducer: user,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
