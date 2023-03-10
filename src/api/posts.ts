import { apiRoutes } from "../constants/routes";
import { useFetch, useLoadMore, useCreate } from "../hooks/reactQuery";
import {
  FullPostInterface,
  PostInterface,
  PostPageInterface,
} from "../interfaces/PostInterface";

export const useGetPosts = () => useFetch<PostInterface>(apiRoutes.getPosts);

export const useGetPostList = () =>
  useLoadMore<PostInterface & PostPageInterface>(apiRoutes.getPostList);

export const useCreatePost = () => useCreate(apiRoutes.createPost);

export const useGetPost = (id: string) =>
  useFetch<PostInterface & FullPostInterface>(apiRoutes.getPost(id));

export const useUpvotePost = (id: string) =>
  useCreate(apiRoutes.upVotePost(id));

export const useDownVotePost = (id: string) =>
  useCreate(apiRoutes.downVotePost(id));
