import tw from "twin.macro";
import Post from "../../components/Post";

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
        <Post
          voteCounter={101}
          headerProps={{ poster: "tekeoglan", timeStamp: "2023" }}
          titleProps={{ link: "#", title: "text title" }}
          contentProps={{ type: "text", text: "test text", link: "#" }}
          footerProps={{ link: "#", commentCounter: 20 }}
        />
      </Container>
    </Wrapper>
  );
};

export default PostsSection;
