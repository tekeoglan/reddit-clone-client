import { FocusEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";

const Wrapper = tw.div`
	flex
	mb-4
	p-2
	bg-white
	border
	border-solid
	rounded
`;

const Input = tw.input`
	block
	grow
	h-[38px]
	mr-2
	px-4
	outline-none
	bg-white
	border
	border-solid
	rounded
	text-black
	hover:(border border-blue-600 rounded)
`;

const CreatePost = () => {
  const navigate = useNavigate();
  const focusHandler: FocusEventHandler<HTMLInputElement> = () =>
    navigate("/submit");

  return (
    <Wrapper>
      <Input
        name="createPost"
        placeholder="Create Post"
        type="text"
        onFocus={focusHandler}
      ></Input>
    </Wrapper>
  );
};

export default CreatePost;
