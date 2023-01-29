import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import tw from "twin.macro";

const Wrapper = tw.div`
	relative
	my-6
	mx-12
`;

const Container = tw.div`
	relative
	bg-white
	border
	border-solid
	border-black
	rounded
`;

const TextArea = tw.textarea`
	min-h-[122px]
	w-full
	py-2
	px-4
	!outline-none
	select-text
	whitespace-pre
	break-words
	font-normal
	text-xs
	text-black
`;

const BottomWrapper = tw.div`
	flex
	flex-row-reverse
	items-center
`;

const CommentButton = tw.button`
	my-1
	mx-2
	py-1
	px-2
	font-bold
	text-center
	text-xs
	text-white
	bg-gray-600
	border
	rounded-full
`;

const CreateComment = () => {
  const [text, setText] = useState<string>("");

  const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(() => e.target.value);
  };

  const onSubmitHandler: MouseEventHandler<HTMLButtonElement> = () => {
    if (!text) return;
    console.log(text);
  };

  return (
    <Wrapper>
      <Container>
        <TextArea
          placeholder="What are your thoughts?"
          spellCheck={true}
          onChange={changeHandler}
        ></TextArea>
        <BottomWrapper>
          <CommentButton role="button" onClick={onSubmitHandler}>
            Comment
          </CommentButton>
        </BottomWrapper>
      </Container>
    </Wrapper>
  );
};

export default CreateComment;
