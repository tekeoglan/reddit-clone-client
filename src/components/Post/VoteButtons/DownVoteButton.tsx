import { useDownVotePost } from "../../../api/posts";
import VoteButton from "./VoteButton";

const DownVoteButton: React.FC<{ postId: number }> = ({ postId }) => {
  const downvoteMutate = useDownVotePost(postId.toString());
  const onClickHandler: React.MouseEventHandler = () => {
    if (downvoteMutate.isLoading) return;
    downvoteMutate.mutate({});
  };
  return <VoteButton contentType="down" handler={onClickHandler} />;
};

export default DownVoteButton;
