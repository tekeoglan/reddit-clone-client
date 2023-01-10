import tw from "twin.macro";

const Wrapper = tw.div``;

const Button = tw.button`
	relative
	flex
	justify-center
	items-center
	w-full
	min-h-[2rem]
	ml-2
	py-1
	border
	border-solid
	border-transparent
	text-left
`;

const Container = tw.span`
	flex
	items-center
	text-gray-400
	[i::before]:content-['\e5cf']
`;

const UserIconWrapper = tw.span`
	flex
	items-center
	[i::before]:content-['\e7fd']
`;

const UserIcon = () => <i className="material-icons"></i>;
const ExpandIcon = () => <i className="material-icons"></i>;

const UserDrapDown = () => {
  return (
    <Wrapper>
      <Button>
        <Container>
          <UserIconWrapper>
            <UserIcon />
          </UserIconWrapper>
          <ExpandIcon />
        </Container>
      </Button>
    </Wrapper>
  );
};

export default UserDrapDown;
