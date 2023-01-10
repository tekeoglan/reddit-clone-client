import tw from "twin.macro";

const Wrapper = tw.div`
	grow
	my-0
	mx-auto
	max-w-xl
`;

const Container = tw.div`
	mx-4
	w-auto
	h-auto
`;

const InnerContainer = tw.div`
	flex
	items-center
	h-10
	border
	border-solid
	rounded-[1.25rem]
	[:focus-within]:border-blue-400
	[:hover]:border-blue-400
`;

const Form = tw.form`
	flex
	w-full
`;

const Input = tw.input`
	w-full
	font-normal
	text-sm
	text-black
	appearance-none
	[:focus]:(
		!outline-none
		!border-none
	)
`;

const Label = tw.label`flex`;

const IconWrapper = tw.div`
	flex
	items-center
	py-0
	pl-[9px]
	pr-[15px]
	[i::before]:content-['\e8b6']
`;

const SearchIcon = () => <i className="material-icons"></i>;

const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {};

const SearchBar = () => {
  return (
    <Wrapper>
      <Container>
        <InnerContainer>
          <Form>
            <Label>
              <IconWrapper>
                <SearchIcon />
              </IconWrapper>
            </Label>
            <Input
              type="search"
              name="q"
              onChange={onChangeHandler}
              placeholder="Search User"
            />
          </Form>
        </InnerContainer>
      </Container>
    </Wrapper>
  );
};

export default SearchBar;
