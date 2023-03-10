import { useState } from "react";
import tw, { styled } from "twin.macro";
import { BasicLayout } from "../../views/Layout";
import CreateLink from "./CreateLink";
import CreateText from "./CreateText";

const Wrapper = tw.div`
	flex
	flex-col
	justify-center
	items-center
	max-w-[1248px]
	py-5
	px-6
`;

const Container = tw.div`
	w-[640px]
	max-w-[740px]
	rounded
	bg-white
`;

const TopWrapper = tw.div`
	flex
	w-[640px]
	max-w-[740px]
	my-4
	p-1
`;

const TopTitle = tw.h2`
	flex-1
	font-semibold
	text-lg
	text-black
`;

const HeaderWrapper = tw.div`
	mb-3
`;

const HeaderContainer = tw.div`
	flex
	items-stretch
`;

const HeaderButton = styled.button((prop: { hasSelected: boolean }) => [
  tw`relative z-[1] flex items-center py-[15px] px-[18px] font-bold text-sm text-center text-gray-500 outline-none`,
  prop.hasSelected &&
    tw`text-blue-600 [::after]:(absolute inset-x-0 -bottom-px h-[2px] content-[""] bg-blue-600)`,
]);

const PostIcon = () => (
  <i className="material-icons" tw="mr-2 [::before]:content-['\ea20']"></i>
);

const LinkIcon = () => (
  <i className="material-icons" tw="mr-2 [::before]:content-['\e178']"></i>
);

const CreatePostFull = () => {
  const [contentType, setContentType] = useState<"text" | "link">("text");

  const textButtonHandler = () => setContentType("text");
  const linkButtonHandler = () => setContentType("link");

  return (
    <BasicLayout>
      <Wrapper>
        <TopWrapper>
          <TopTitle>Create a post</TopTitle>
        </TopWrapper>
        <Container>
          <HeaderWrapper>
            <HeaderContainer>
              <HeaderButton
                hasSelected={contentType === "text"}
                onMouseDown={textButtonHandler}
              >
                <PostIcon />
                Post
              </HeaderButton>
              <HeaderButton
                hasSelected={contentType === "link"}
                onMouseDown={linkButtonHandler}
              >
                <LinkIcon />
                Youtube Link
              </HeaderButton>
            </HeaderContainer>
          </HeaderWrapper>
          {contentType === "text" ? <CreateText /> : <CreateLink />}
        </Container>
      </Wrapper>
    </BasicLayout>
  );
};

export default CreatePostFull;
