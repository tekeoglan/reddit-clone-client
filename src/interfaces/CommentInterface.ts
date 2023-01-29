export interface CommentInterface {
  comment_id: number;
  post_id: number;
  time_stamp: string;
  text: string;
  upvote_count: number;
}

export interface CommentWithUserInfoInterface {
  users: { user_name: string };
}
