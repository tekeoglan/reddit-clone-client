import { TextareaHTMLAttributes } from "react";
import tw from "twin.macro";

const Wrapper = tw.div`
	relative
	mb-2
`;

const Text = tw.textarea`
	h-10
	w-full
	p-2
	font-normal
	text-sm
	text-slate-700
	caret-blue-600
	break-words
	!outline-none
	resize-none
	[::placeholder]:text-gray-500
	hover:(border border-solid border-black rounded)
	focus-visible:(border border-solid border-black rounded)
`;

const Title = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <Wrapper>
      <Text {...props} />
    </Wrapper>
  );
};

export default Title;
