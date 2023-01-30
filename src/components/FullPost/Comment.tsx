import tw from "twin.macro";

export interface CommentProps {
  author: string;
  content: string;
}

const Wrapper = tw.div`
	relative
	pl-4
	overflow-visible
	w-full
	border
	rounded
	border-gray-500
`;

const Container = tw.div`
	flex
	items-center
	pt-2
	pl-2
	bg-transparent
`;

const InnerContainer = tw.div`
	self-center
	max-w-[800px]
	w-[calc(100% - 56px)]
	ml-2
`;

const HeaderWrapper = tw.div`
	flex
	items-center
	mb-2
	min-h-[18px]
`;

const AuthorLink = tw.a`
	font-semibold
	text-xs
	text-black
`;

const ContentWrapper = tw.div`
	py-1
	w-full
`;

const ContentContainer = tw.div`
	font-normal
	text-sm
	text-black
	break-words
`;

const Content = tw.p``;

const Comment = ({ author, content }: CommentProps) => {
  return (
    <Wrapper>
      <Container>
        <InnerContainer>
          <HeaderWrapper>
            <AuthorLink>{author}</AuthorLink>
          </HeaderWrapper>
          <ContentWrapper>
            <ContentContainer>
              <Content>{content}</Content>
            </ContentContainer>
          </ContentWrapper>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default Comment;
