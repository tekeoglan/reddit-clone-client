import { apiRoutes } from "../constants/routes";
import { useFetch, useDelete, useCreate, useUpdate } from "../hooks/reactQuery";

export const useGetComments = () => useFetch(apiRoutes.getComments);

export const useCreateComment = () => useCreate(apiRoutes.createComment);

export const useDeleteComment = (id: string) =>
  useDelete(apiRoutes.deleteComment(id));

export const useUpvoteComment = (id: string) =>
  useUpdate(apiRoutes.upVoteComment(id));

export const useDownVoteComment = (id: string) =>
  useUpdate(apiRoutes.downVoteComment(id));
