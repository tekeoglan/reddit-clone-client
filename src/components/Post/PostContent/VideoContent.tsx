import tw from "twin.macro";
import MediaLayout from "./MediaLayout";

export interface VideoContentProps {
  type?: "video";
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

const VideoContent = ({ ytLink }: VideoContentProps) => {
  return (
    <MediaLayout>
      <Content>
        <iframe
          width="100%"
          height="100%"
          title="YouTube video player"
          src={ytLink}
          allowFullScreen
        ></iframe>
      </Content>
    </MediaLayout>
  );
};

export default VideoContent;
