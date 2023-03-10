import { useParams } from "react-router-dom";
import tw from "twin.macro";
import Post from "../Post";
import { useGetPost } from "../../api/posts";
import Spinner from "../Spinner";
import { timeAgo } from "../../utils";
import usePostContentData from "../Post/hooks/usePostContentData";
import CreateComment from "./CreateComment";
import CommentSection from "./CommentSection";

const Wrapper = tw.div`
	w-1/2
	bg-white
	border-white
	rounded
	break-words
`;

const FullPost = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPost(id!);

  if (isLoading) return <Spinner />;

  if (error && !data) return null;

  return (
    <Wrapper>
      <Post
        id={parseInt(id || "0")}
        voteCounter={data!.upvotes_count}
        headerProps={{
          poster: data!.users.user_name || "",
          timeStamp: timeAgo(data!.time_stamp),
        }}
        titleProps={{
          link: `/post/${data!.post_id}`,
          title: data!.title,
        }}
        contentProps={usePostContentData(data!)}
        footerProps={{
          link: `/post/${data!.post_id}`,
          commentCounter: data!.comments.length,
        }}
      />
      <CreateComment postId={parseInt(id || "0")} />
      <CommentSection />
    </Wrapper>
  );
};

export default FullPost;
