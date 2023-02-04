import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { useFetchUser } from "../../api/auth";
import Avatar from "../Svg/Avatar";

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
`;

const IconWrapper = tw.span`
	flex
	items-center
`;

const UserIcon = () => (
  <i tw="[::before]:content-['\e7fd']" className="material-icons"></i>
);
const ExpandIcon = () => (
  <i tw="[::before]:content-['\e5cf']" className="material-icons"></i>
);

const UserDrapDown = () => {
  const { data: user } = useFetchUser();
  const navigate = useNavigate();
  const linkHandler: MouseEventHandler<HTMLSpanElement> = () =>
    navigate("/user/profile");

  return (
    <Wrapper>
      <Button>
        <Container>
          {!user ? (
            <IconWrapper>
              <UserIcon />
            </IconWrapper>
          ) : (
            <IconWrapper onClick={linkHandler}>
              <Avatar />
            </IconWrapper>
          )}
          <ExpandIcon />
        </Container>
      </Button>
    </Wrapper>
  );
};

export default UserDrapDown;
