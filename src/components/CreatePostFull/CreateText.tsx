import tw from "twin.macro";
import Title from "./components/Title";

const Wrapper = tw.div`
	m-4
`;

const TextWrapper = tw.div`
	border
	border-solid
	rounded
	border-white
`;

const Text = tw.textarea`
	w-full
	min-h-[122px]
	p-2
	overflow-hidden
	resize-y
	!outline-none
	select-text
	whitespace-pre
	break-words
	caret-blue-600
	font-normal
	text-sm
	text-slate-900
	hover:(border border-solid border-black rounded)
	focus-visible:(border border-solid border-black rounded)
`;

const CreateText = () => {
  return (
    <Wrapper>
      <Title name="title" placeholder="Title" maxLength={240} rows={1} />
      <TextWrapper>
        <Text name="text" placeholder="Text" spellCheck="true" />
      </TextWrapper>
    </Wrapper>
  );
};

export default CreateText;
