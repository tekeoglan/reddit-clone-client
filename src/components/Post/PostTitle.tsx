import tw from "twin.macro";

export interface PostTitleProps {
  link: string;
  title: string;
}

const Wrapper = tw.div`
	mx-2
	text-gray-500
`;

const TitleContainer = tw.div`
	inline
	relative
	break-words
`;

const TitleLinkWrapper = tw.a`
	text-inherit
`;

const TitleLinkContainer = tw.div`
	font-semibold
	text-lg
`;

const TitleLink = tw.h3`
	inline
	font-normal
`;

const PostTitle = ({ link, title }: PostTitleProps) => {
  return (
    <Wrapper>
      <TitleContainer>
        <TitleLinkWrapper href={link}>
          <TitleLinkContainer>
            <TitleLink>{title}</TitleLink>
          </TitleLinkContainer>
        </TitleLinkWrapper>
      </TitleContainer>
    </Wrapper>
  );
};

export default PostTitle;