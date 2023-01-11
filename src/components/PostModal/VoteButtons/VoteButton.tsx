import tw from "twin.macro";

type ContentType = "up" | "down";
type VoteButtonProps = {
  contentType: ContentType;
  handler: React.MouseEventHandler;
};

const voteContent = {
  up: tw`[::before]:content-['\e5d8']`,
  down: tw`[::before]:content-['\e5db']`,
};

const VoteButton: React.FC<VoteButtonProps> = ({ contentType, handler }) => {
  return (
    <button
      tw="h-6 w-6 bg-transparent border-none text-inherit"
      onClick={handler}
    >
      <span tw="rounded-sm">
        <i css={voteContent[contentType]} className="material-icons"></i>
      </span>
    </button>
  );
};

export default VoteButton;
