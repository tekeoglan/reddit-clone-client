import Header from "../../components/Header";
import tw from "twin.macro";
import PostsSection from "./PostsSection";

const Wrapper = tw.div`pt-12`;

const Container = tw.div`
	flex
	justify-center
	max-w-full
	min-h-[calc(100vh - 48px)]
	my-0
	mx-auto
	py-5
	px-6
`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <PostsSection />
      </Container>
    </Wrapper>
  );
};

export default Home;
