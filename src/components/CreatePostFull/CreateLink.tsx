import tw from "twin.macro";
import Title from "./components/Title";

const Wrapper = tw.div`
	m-4
`;

const Url = tw.textarea`
	min-h-[66px]
	h-[66px]
	w-full
	mt-2
	py-2
	px-4
	font-normal
	text-sm
	text-black
	overflow-x-hidden
	break-words
	caret-blue-600
	resize-none
	!outline-none
	rounded
	hover:(border border-solid border-black rounded)
	focus-visible:(border border-solid border-black rounded)
`;

const CreateLink = () => {
  return (
    <Wrapper>
      <Title name="title" placeholder="Title" maxLength={240} rows={1} />
      <Url placeholder="Youtube Link" rows={1} />
    </Wrapper>
  );
};

export default CreateLink;
