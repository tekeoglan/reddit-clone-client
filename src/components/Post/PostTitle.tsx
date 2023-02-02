import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
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
	hover:cursor-pointer
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
  const navigate = useNavigate();
  const linkHandler: MouseEventHandler<HTMLAnchorElement> = () =>
    navigate(link);

  return (
    <Wrapper>
      <TitleContainer>
        <TitleLinkWrapper onMouseDown={linkHandler}>
          <TitleLinkContainer>
            <TitleLink>{title}</TitleLink>
          </TitleLinkContainer>
        </TitleLinkWrapper>
      </TitleContainer>
    </Wrapper>
  );
};

export default PostTitle;
