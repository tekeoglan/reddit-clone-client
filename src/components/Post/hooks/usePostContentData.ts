import { PostInterface } from "../../../interfaces/PostInterface";
import {TextContentProps} from "../PostContent/TextContent";
import {VideoContentProps} from "../PostContent/VideoContent";

const usePostContentData = <T>(post: T extends PostInterface ? T: never ) => {
  const content = post.text
    ? {
        type: "text",
        text: post.text,
        link: `/post/${post.post_id}`,
      } satisfies TextContentProps
    : {
        type: "video",
        ytLink: post.yt_path,
      } satisfies VideoContentProps

  return content;
};

export default usePostContentData;
