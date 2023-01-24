import tw from "twin.macro";

export interface PostFooterProps {
  link: string;
  commentCounter: number;
}

const Wrapper = tw.div`
	flex
	items-center
	min-h-[2.5rem]
	overflow-y-visible
`;

const Container = tw.div`
	flex
	items-stretch
	grow
	pr-2
	pl-1
	font-bold
	text-xs
	overflow-hidden
`;

const CommentsContainer = tw.a`
	flex
	items-center
	rounded-sm
	p-2
	mr-1
	font-bold
	text-xs
	break-normal
`;

const CommentsTitle = tw.span`
	capitalize
	leading-none
`;

const CommentIcon = () => (
  <i css={tw`[::before]:content-['\e0b9']`} className="material-icons"></i>
);

const PostFooter = ({ link, commentCounter }: PostFooterProps) => {
  return (
    <Wrapper>
      <Container>
        <CommentsContainer href={link}>
          <CommentIcon />
          <CommentsTitle>{`${commentCounter} Comments`}</CommentsTitle>
        </CommentsContainer>
      </Container>
    </Wrapper>
  );
};

export default PostFooter;
