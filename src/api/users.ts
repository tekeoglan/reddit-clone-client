import { useFetch, useUpdate, useDelete } from "../hooks/reactQuery";
import { apiRoutes } from "../constants/routes";
import { pathToUrl } from "../utils";

export const usePatchUser = (id: number) =>
  useUpdate(pathToUrl(apiRoutes.updateUser, { id }));

export const useDeleteUser = (id: number) =>
  useDelete(pathToUrl(apiRoutes.deleteUser, { id }));

export const useGetUserOverview = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getUserOverview, { id }));

export const useGetUserPosts = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getUserPosts, { id }));

export const useGetUserComments = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getUserComments, { id }));
