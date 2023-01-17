import tw from "twin.macro";
import MediaLayout from "./MediaLayout";

const Wrapper = tw.div`
	contents
`;

const Container = tw.a``;

const InnerContainer = tw.div`
	relative
	flex
	justify-center
	max-h-[512px]
	my-0
	mx-auto
`;

const ImageWrapper = tw.div``;

const Image = tw.img`
	relative
	max-w-full
	bg-white
`;

const ImageContent = () => {
  return (
    <MediaLayout>
      <Wrapper>
        <Container href="#">
          <InnerContainer>
            <ImageWrapper>
              <Image src="https://iili.io/HaXYPj4.jpg" />
            </ImageWrapper>
          </InnerContainer>
        </Container>
      </Wrapper>
    </MediaLayout>
  );
};

export default ImageContent;
