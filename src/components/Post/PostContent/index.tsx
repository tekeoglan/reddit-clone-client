import tw from "twin.macro";
import TextContent, { TextContentProps } from "./TextContent";
import VideoContent, { VideoContentProps } from "./VideoContent";

export type PostContentProps = VideoContentProps | TextContentProps;

type ContentFc = (props: PostContentProps) => JSX.Element | null;

const Content: ContentFc = (props) => {
  switch (props.type) {
    case "text":
      return <TextContent text={props.text} link={props.link} />;
    case "video":
      return <VideoContent ytLink={props.ytLink} />;
    default:
      return null;
  }
};

const Wrapper = tw.div`
	mt-2
`;

const PostContent = (props: PostContentProps) => {
  return (
    <Wrapper>
      <Content {...props} />
    </Wrapper>
  );
};

export default PostContent;
