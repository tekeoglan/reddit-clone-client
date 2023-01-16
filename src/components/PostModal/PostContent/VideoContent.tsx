import tw from "twin.macro";
import { validateYtLink } from "../../../utils";

interface EmbededYTProps {
  ytLink: string;
}

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

const Content = tw.div`
	bg-black
	h-full
	w-full
	max-h-full
	max-w-full
	text-white
`;

const EmbededYT = ({ ytLink }: EmbededYTProps) => {
  const [isValid, link] = validateYtLink(ytLink);
  return (
    <iframe
      width="100%"
      height="100%"
      src={link}
      title="YouTube video player"
      allowFullScreen
    ></iframe>
  );
};

const VideoContent = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <EmbededYT ytLink="https://youtu.be/dQw4w9WgXcQ" />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default VideoContent;
