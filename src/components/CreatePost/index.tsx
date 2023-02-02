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
`;

const CreatePost = () => {
  return (
    <Wrapper>
      <Input name="createPost" placeholder="Create Post" type="text"></Input>
    </Wrapper>
  );
};

export default CreatePost;
