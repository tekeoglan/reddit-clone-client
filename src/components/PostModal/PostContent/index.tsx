import tw from "twin.macro";
import TextContent from "./TextContent";
import VideoContent from "./VideoContent";

const Wrapper = tw.div`
	mt-2
`;

const PostContent = () => {
  return (
    <Wrapper>
      <TextContent />
    </Wrapper>
  );
};

export default PostContent;
