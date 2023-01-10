import tw from "twin.macro";
import { RedditIcon, RedditLogo } from "../Svg";

const Wrapper = tw.a`
	inline-flex
	items-center
`;

const Logo = () => {
  return (
    <Wrapper href="/">
      <RedditIcon />
      <RedditLogo />
    </Wrapper>
  );
};

export default Logo;
