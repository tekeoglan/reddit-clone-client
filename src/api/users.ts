import { useFetch, useUpdate, useDelete } from "../hooks/reactQuery";
import { apiRoutes } from "../constants/routes";

export const usePatchUser = (id: string) => useUpdate(apiRoutes.updateUser(id));

export const useDeleteUser = (id: string) =>
  useDelete(apiRoutes.deleteUser(id));

export const useGetUserOverview = (id: string) =>
  useFetch(apiRoutes.getUserOverview(id));

export const useGetUserPosts = (id: string) =>
  useFetch(apiRoutes.getUserPosts(id));

export const useGetUserComments = (id: string) =>
  useFetch(apiRoutes.getUserComments(id));
