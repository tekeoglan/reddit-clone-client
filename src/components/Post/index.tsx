import tw from "twin.macro";
import { UpVoteButton, DownVoteButton } from "./VoteButtons";
import PostHeader, { PostHeaderProps } from "./PostHeader";
import PostTitle, { PostTitleProps } from "./PostTitle";
import PostContent, { PostContentProps } from "./PostContent";
import PostFooter, { PostFooterProps } from "./PostFooter";

export interface PostProps {
  id: number;
  voteCounter: number;
  headerProps: PostHeaderProps;
  titleProps: PostTitleProps;
  contentProps: PostContentProps;
  footerProps: PostFooterProps;
}

const Wrapper = tw.div`
	relative
	mb-[0.625rem]
	pl-10
	rounded
	border
	border-solid
	border-gray-400
	bg-white
	text-gray-500
	overflow-hidden
`;

const VoteContainer = tw.div`
	absolute
	left-0
	top-0
	flex
	items-center
	py-2
	pl-1
	pr-0
	w-10
	text-gray-500
`;

const VoteInnerContainer = tw.div`
	flex
	items-center
	flex-col
`;

const VoteCounter = tw.div`
	text-black
	my-1
	mx-0
	font-bold
	text-xs
	pointer-events-none
	break-normal
`;

const PostContainer = tw.div`
	relative
	pt-2
	bg-white
`;

const Post = ({
  id,
  voteCounter,
  headerProps,
  titleProps,
  contentProps,
  footerProps,
}: PostProps) => {
  return (
    <Wrapper>
      <VoteContainer>
        <VoteInnerContainer>
          <UpVoteButton postId={id} />
          <VoteCounter>{voteCounter}</VoteCounter>
          <DownVoteButton postId={id} />
        </VoteInnerContainer>
      </VoteContainer>
      <PostContainer>
        <PostHeader {...headerProps} />
        <PostTitle {...titleProps} />
        <PostContent {...contentProps} />
        <PostFooter {...footerProps} />
      </PostContainer>
    </Wrapper>
  );
};

export default Post;
