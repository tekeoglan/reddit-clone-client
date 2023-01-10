import Header from "../../components/Header";
import tw from "twin.macro";

const Wrapper = tw.div`block`;

const Home = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export default Home;
