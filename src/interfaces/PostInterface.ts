export interface PostInterface {
  post_id: string;
  title: string;
  text: string;
  img_path: string;
  yt_path: string;
  upvotes_count: number;
  time_stamp: string;
}

export interface PostPageInterface {
  users: {
    user_name: string;
  };
  _count: {
    comments: number;
  };
}
