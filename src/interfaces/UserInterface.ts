import { CommentInterface } from "./CommentInterface";
import { PostInterface } from "./PostInterface";

export interface UserInterface {
  user_id: number;
  user_name: string;
  avatar_path: string;
}

export type UserOverviewType = Array<
  PostInterface & CommentInterface & { posts: PostInterface }
>;
