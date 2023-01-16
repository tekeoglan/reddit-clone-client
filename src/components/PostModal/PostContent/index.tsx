import tw from "twin.macro";
import VideoContent from "./VideoContent";

const Wrapper = tw.div`
	mt-2
`;

const PostContent = () => {
  return (
    <Wrapper>
      <VideoContent />
    </Wrapper>
  );
};

export default PostContent;
