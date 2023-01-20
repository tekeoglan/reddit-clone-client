import tw from "twin.macro";
import { PropsWithChildren } from "react";
import XIcon from "../Svg/XIcon";

const Wrapper = tw.div`
	fixed
	left-0
	top-0
	z-[110]
	h-full
	w-full
	bg-[rgba(0,0,0,.4)]
`;

const Container = tw.div`
	fixed
	left-1/2
	top-1/2
	z-[111]
	h-[360px]
	w-[400px]
	translate-x-[-50%]
	translate-y-[-50%]
	bg-white
	rounded-xl
	shadow-log
	overflow-hidden
`;

const Panel = tw.div`
	h-full
	w-full
`;

const CloseButton = tw.button`
	absolute
	right-4
	top-4
	bg-transparent
	border-none
	text-inherit
`;

const LoginModalLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <Wrapper>
      <Container>
        <Panel>{props.children}</Panel>
        <CloseButton>
          <XIcon />
        </CloseButton>
      </Container>
    </Wrapper>
  );
};

export default LoginModalLayout;
