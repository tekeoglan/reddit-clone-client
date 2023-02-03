import { useCreate, usePost } from "../hooks/reactQuery";
import { apiRoutes } from "../constants/routes";

export const useLogin = () => useCreate<any, any>(apiRoutes.login);

export const useRegister = () => useCreate<any, any>(apiRoutes.register);

export const useLogOut = () => useCreate<any, any>(apiRoutes.logOut);

export const useFetchUser = () => usePost<any>(apiRoutes.fetchUser);
