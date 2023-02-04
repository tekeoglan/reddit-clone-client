import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { timeAgo } from "../../utils";

const Wrapper = tw.div`
	h-max
	mb-3
	border
	border-solid
	border-white
	rounded
	text-gray-500
	bg-white
	cursor-pointer
	fill-gray-500
	hover:border-black
`;

const HeaderWrapper = tw.div`
	pb-px
	px-2
	border-t
	rounded-tl
	rounded-tr
	border-white
	overflow-hidden
`;

const HeaderContainer = tw.div`
	flex
	items-center
	py-2
`;

const InfoContainer = tw.div`
	font-normal
	text-xs
`;

const UserInfo = tw.a`
	mr-1
	text-blue-600
`;

const PostInfo = tw.a`
	ml-1
	text-black
	hover:underline
`;

const ContentWrapper = tw.div`
	rounded-bl
	rounded-br
	overflow-hidden
`;

const ContentContainer = tw.div`
	flex
	flex-col
	items-stretch
	-mt-px
	mx-2
	pt-2
	pl-2
	border-t-2
	border-solid
	border-white
`;

const ContentHeader = tw.div`
	flex
	items-center
	min-h-[16px]
	font-normal
	text-xs
	text-black
`;

const ContentPoster = tw.span`
	grow-0
	shrink-0
	mr-1
`;

const ContentTime = tw.span`
	text-gray-500
`;

const Content = tw.p`
	py-0.5
	w-full
	font-normal
	text-sm
	text-black
`;

const CommentIcon = () => (
  <i tw="mr-2 [::before]:content-['\e0ca']" className="material-icons"></i>
);

export interface CommentProps {
  postId: number;
  poster: string;
  postTitle: string;
  timeStamp: string;
  text: string;
}

const Comment: React.FC<CommentProps> = ({
  postId,
  poster,
  postTitle,
  timeStamp,
  text,
}) => {
  const navigate = useNavigate();
  const postLinkHandler: MouseEventHandler<HTMLAnchorElement> = () =>
    navigate(`/post/${postId}`);

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderContainer>
          <CommentIcon />
          <InfoContainer>
            <UserInfo>{poster}</UserInfo>
            commented on
            <PostInfo onClick={postLinkHandler}>{postTitle}</PostInfo>
          </InfoContainer>
        </HeaderContainer>
        <ContentWrapper>
          <ContentContainer>
            <ContentHeader>
              <ContentPoster>{poster}</ContentPoster>
              <ContentTime>{timeAgo(timeStamp)}</ContentTime>
            </ContentHeader>
            <Content>{text}</Content>
          </ContentContainer>
        </ContentWrapper>
      </HeaderWrapper>
    </Wrapper>
  );
};

export default Comment;
