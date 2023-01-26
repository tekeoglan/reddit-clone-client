import { apiRoutes } from "../constants/routes";
import {
  useFetch,
  useLoadMore,
  useCreate,
  useUpdate,
} from "../hooks/reactQuery";
import { PostInterface, PostPageInterface } from "../interfaces/PostInterface";
import { pathToUrl } from "../utils";

export const useGetPosts = () => useFetch<PostInterface>(apiRoutes.getPosts);

export const useGetPostList = () =>
  useLoadMore<PostInterface & PostPageInterface>(apiRoutes.getPostList);

export const useCreatePost = () => useCreate(apiRoutes.createPost);

export const useGetPost = (id: number) =>
  useFetch<PostInterface>(pathToUrl(apiRoutes.getPost, { id }));

export const useUpvotePost = (id: number) =>
  useUpdate(pathToUrl(apiRoutes.upVotePost, { id }));

export const useDownVotePost = (id: number) =>
  useUpdate(pathToUrl(apiRoutes.downVotePost, { id }));
