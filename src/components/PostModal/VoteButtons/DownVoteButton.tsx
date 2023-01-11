import VoteButton from "./VoteButton";

const onClickHandler: React.MouseEventHandler = () => {};

const DownVoteButton = () => (
  <VoteButton contentType="down" handler={onClickHandler} />
);

export default DownVoteButton;
