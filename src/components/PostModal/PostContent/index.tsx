import tw from "twin.macro";
import ImageContent from "./ImageContent";
import TextContent from "./TextContent";
import VideoContent from "./VideoContent";

const Wrapper = tw.div`
	mt-2
`;

const PostContent = () => {
  return (
    <Wrapper>
      <ImageContent />
    </Wrapper>
  );
};

export default PostContent;
