import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

export interface TextContentProps {
  type?: "text";
  text: string;
  link: string;
}

const Wrapper = tw.a`
	hover:cursor-pointer
`;

const Container = tw.div`
	max-h-64
	overflow-hidden
	gradient-mask-b-60
	pt-[5px]
	px-2
	pb-[10px]
`;

const InnerContainer = tw.div`
	font-normal
	text-xs
	break-words
	overflow-auto
	pb-px
	mb-[-1px]
	text-black
`;

const Text = tw.p`
	pt-0
	pb-1
	px-0
`;

const TextContent = ({ text, link }: TextContentProps) => {
  const navigate = useNavigate();

  return (
    <Wrapper onMouseDown={() => navigate(link)}>
      <Container>
        <InnerContainer>
          <Text>{text}</Text>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default TextContent;
