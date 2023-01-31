import { useFetch, useUpdate, useDelete } from "../hooks/reactQuery";
import { apiRoutes } from "../constants/routes";
import { UserInterface, UserOverviewType } from "../interfaces/UserInterface";
import { CommentInterface, PostInterface } from "../interfaces";

export const usePatchUser = (id: string) =>
  useUpdate<UserInterface, UserInterface>(apiRoutes.updateUser(id));

export const useDeleteUser = (id: string) =>
  useDelete<UserInterface>(apiRoutes.deleteUser(id));

export const useGetUserOverview = (id: string) =>
  useFetch<UserOverviewType>(apiRoutes.getUserOverview(id));

export const useGetUserPosts = (id: string) =>
  useFetch<PostInterface[]>(apiRoutes.getUserPosts(id));

export const useGetUserComments = (id: string) =>
  useFetch<CommentInterface[]>(apiRoutes.getUserComments(id));
