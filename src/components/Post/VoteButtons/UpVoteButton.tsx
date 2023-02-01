import { useUpvotePost } from "../../../api/posts";
import VoteButton from "./VoteButton";

const UpVoteButton: React.FC<{ postId: number }> = ({ postId }) => {
  const upvoteMutate = useUpvotePost(postId.toString());
  const onClickHandler: React.MouseEventHandler = () => {
    if (upvoteMutate.isLoading) return;
    upvoteMutate.mutate({});
  };
  return <VoteButton contentType="up" handler={onClickHandler} />;
};
export default UpVoteButton;
