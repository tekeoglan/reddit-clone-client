const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "http://3.125.43.131:3000";

export const apiRoutes = {
  login: `${baseUrl}/login`,
  register: `${baseUrl}/register`,
  logOut: `${baseUrl}/logout`,
  fetchUser: `${baseUrl}/fetch-user`,
  updateUser: (id: string) => `${baseUrl}/users/user/${id}`,
  deleteUser: (id: string) => `${baseUrl}/users/user/${id}`,
  getUserOverview: (id: string) => `${baseUrl}/users/user/${id}/overview`,
  getUserPosts: (id: string) => `${baseUrl}/users/user/${id}/posts`,
  getUserComments: (id: string) => `${baseUrl}/users/user/${id}/comments`,
  getPosts: `${baseUrl}/posts`,
  getPostList: `${baseUrl}/posts/page`,
  createPost: `${baseUrl}/posts/post`,
  getPost: (id: string) => `${baseUrl}/posts/post/${id}`,
  upVotePost: (id: string) => `${baseUrl}/posts/post/${id}/upvote`,
  downVotePost: (id: string) => `${baseUrl}/posts/post/${id}/downvote`,
  getComments: `${baseUrl}/comments`,
  createComment: `${baseUrl}/comments/comment`,
  deleteComment: (id: string) => `${baseUrl}/comments/comment/${id}`,
  upVoteComment: (id: string) => `${baseUrl}/comments/comment/${id}/upvote`,
  downVoteComment: (id: string) => `${baseUrl}/comments/comment/${id}/downvote`,
};
