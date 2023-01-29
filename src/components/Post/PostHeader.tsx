import tw from "twin.macro";

export interface PostHeaderProps {
  poster: string;
  timeStamp: string;
}

const Wrapper = tw.div`
	relative
	flex
	items-start
	flex-nowrap
	mt-0
	mb-2
	mx-2
	font-normal
	text-xs
	text-gray-500
`;

const AvatarWrapper = tw.div`
	grow-0
	shrink-0
	basis-auto
`;

const AvatarLink = tw.a`
	font-bold
	text-xs
	text-black
	align-baseline
`;

const AvatarImage = tw.img`
	h-5
	w-5
	mr-1
	bg-green-500
	align-middle
	rounded-full
`;

const PropsContainer = tw.div`
	flex
	items-center
	flex-wrap
	grow
	shrink
	overflow-hidden
`;

const Props = tw.div`
	inline
	font-normal
	text-xs
`;

const PosterContainer = tw.div`
	inline-block
`;

const PosterLink = tw.a`
	font-bold
	text-xs
	text-black
	align-baseline
`;

const TimeStamp = tw.span`
	ml-1
	text-gray-500
`;

const PostHeader = ({ poster, timeStamp }: PostHeaderProps) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <AvatarLink>
          <AvatarImage />
        </AvatarLink>
      </AvatarWrapper>
      <PropsContainer>
        <Props>
          <PosterContainer>
            <PosterLink href="#">{`u/${poster}`}</PosterLink>
            <TimeStamp>{timeStamp}</TimeStamp>
          </PosterContainer>
        </Props>
      </PropsContainer>
    </Wrapper>
  );
};
export default PostHeader;
