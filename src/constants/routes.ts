const baseUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export const apiRoutes = {
  login: `${baseUrl}/login`,
  register: `${baseUrl}/register`,
  logOut: `${baseUrl}/logout`,
  fetchUser: `${baseUrl}/fetch-user`,
  updateUser: `${baseUrl}/users/user/:id`,
  deleteUser: `${baseUrl}/users/user/:id`,
  getUserOverview: `${baseUrl}/users/user/:id/overview`,
  getUserPosts: `${baseUrl}/users/user/:id/posts`,
  getUserComments: `${baseUrl}/users/user/:id/comments`,
  getPosts: `${baseUrl}/posts`,
  getPostList: `${baseUrl}/posts/page`,
  createPost: `${baseUrl}/posts/post`,
  getPost: `${baseUrl}/posts/post/:id`,
  upVotePost: `${baseUrl}/posts/post/:id/upvote`,
  downVotePost: `${baseUrl}/posts/post/:id/downvote`,
  getComments: `${baseUrl}/comments`,
  createComment: `${baseUrl}/comments/comment`,
  deleteComment: `${baseUrl}/comments/comment/:id`,
  upVoteComment: `${baseUrl}/comments/comment/:id/upvote`,
  downVoteComment: `${baseUrl}/comments/comment/:id/downvote`,
};
