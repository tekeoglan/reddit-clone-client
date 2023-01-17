import tw from "twin.macro";
import { validateYtLink } from "../../../utils";
import MediaLayout from "./MediaLayout";

interface EmbededYTProps {
  ytLink: string;
}

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
    <MediaLayout>
      <Content>
        <EmbededYT ytLink="https://youtu.be/dQw4w9WgXcQ" />
      </Content>
    </MediaLayout>
  );
};

export default VideoContent;
