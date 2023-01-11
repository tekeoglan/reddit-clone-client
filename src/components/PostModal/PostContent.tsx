import tw from "twin.macro";

const Wrapper = tw.div`
	mt-2
`;

const Container = tw.div`
	relative
	bg-white
	max-h-[32rem]
`;

const InnerContainer = tw.div`
	absolute
	inset-0
`;

const Content = tw.div`
	bg-black
	h-full
	w-full
	max-h-full
	max-w-full
	text-white
`;

const PostContent = () => {
  return (
    <Wrapper>
      <Container>
        <InnerContainer>
          <Content>Post</Content>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default PostContent;
