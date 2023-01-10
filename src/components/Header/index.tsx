import tw from "twin.macro";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserDrapDown from "./UserDrapdown";

const Wrapper = tw.header`
	fixed
	z-[80]
	inset-x-0
	top-0
	inline-flex
	items-center
	h-12
	bg-white
	text-black
	leading-4
`;

const Container = tw.div`
	inline-flex
	items-center
	grow
	py-0
	px-5
	border-b
	border-solid
	border-white
`;

const LeftContainer = tw.div`
	inline-flex
	items-center
	grow
`;

const RightContainer = tw.div`
	inline-flex
	items-center
	grow-0
`;

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Logo />
          <SearchBar />
        </LeftContainer>
        <RightContainer>
          <LoginButton />
          <UserDrapDown />
        </RightContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
