import VoteButton from "./VoteButton";

const onClickHandler: React.MouseEventHandler = () => {};

const UpVoteButton = () => (
  <VoteButton contentType="up" handler={onClickHandler} />
);
export default UpVoteButton;
