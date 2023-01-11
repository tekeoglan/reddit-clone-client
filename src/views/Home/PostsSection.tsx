import tw from "twin.macro";
import PostModal from "../../components/PostModal";

const Wrapper = tw.section`
	w-1/2
`;

const Container = tw.div`
	w-full
`;

const PostsSection = () => {
  return (
    <Wrapper>
      <Container>
        <PostModal />
      </Container>
    </Wrapper>
  );
};

export default PostsSection;
