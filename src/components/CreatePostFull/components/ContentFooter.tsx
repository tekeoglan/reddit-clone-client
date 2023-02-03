import tw from "twin.macro";
import { ButtonHTMLAttributes } from "react";

const Wrapper = tw.div`
	pb-4
	px-4
`;

const Container = tw.div`
	flex
	flex-row-reverse
	items-center
	w-full
	mt-2
`;

const PostButton = tw.button`
	min-h-[32px]
	min-w-[32px]
	py-1
	px-4
	font-bold
	text-sm
	text-center
	text-white
	rounded-full
	bg-gray-600
`;

const ContentFooter = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Wrapper>
      <Container>
        <PostButton {...props}>Post</PostButton>
      </Container>
    </Wrapper>
  );
};

export default ContentFooter;
