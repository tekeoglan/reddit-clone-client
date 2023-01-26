import { apiRoutes } from "../constants/routes";
import {
  useFetch,
  useLoadMore,
  useCreate,
  useUpdate,
} from "../hooks/reactQuery";
import { pathToUrl } from "../utils";

export const useGetPosts = () => useFetch(apiRoutes.getPosts);

export const useGetPostList = () => useLoadMore(apiRoutes.getPostList);

export const useCreatePost = () => useCreate(apiRoutes.createPost);

export const useGetPost = (id: number) =>
  useFetch(pathToUrl(apiRoutes.getPost, { id }));

export const useUpvotePost = (id: number) =>
  useUpdate(pathToUrl(apiRoutes.upVotePost, { id }));

export const useDownVotePost = (id: number) =>
  useUpdate(pathToUrl(apiRoutes.downVotePost, { id }));
