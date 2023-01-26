import { apiRoutes } from "../constants/routes";
import { useFetch, useDelete, useCreate, useUpdate } from "../hooks/reactQuery";
import { pathToUrl } from "../utils";

export const useGetComments = () => useFetch(apiRoutes.getComments);

export const useCreateComment = () => useCreate(apiRoutes.createComment);

export const useDeleteComment = (id: number) =>
  useDelete(pathToUrl(apiRoutes.deleteComment, { id }));

export const useUpvoteComment = (id: number) =>
  useUpdate(pathToUrl(apiRoutes.upVoteComment, { id }));

export const useDownVoteComment = (id: number) =>
  useUpdate(pathToUrl(apiRoutes.downVoteComment, { id }));
