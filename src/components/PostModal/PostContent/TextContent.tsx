import tw from "twin.macro";

const Wrapper = tw.a``;

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

const TextContent = () => {
  return (
    <Wrapper href="#">
      <Container>
        <InnerContainer>
          <Text>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </Text>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default TextContent;
