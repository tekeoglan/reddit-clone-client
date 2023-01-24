import tw from "twin.macro";
import { PropsWithChildren } from "react";

const Wrapper = tw.div`
	relative
	bg-white
	max-h-[32rem]
	pt-[56.25%]
`;

const Container = tw.div`
	absolute
	inset-0
`;

const MediaLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default MediaLayout;
