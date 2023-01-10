import tw from "twin.macro";

const Wrapper = tw.a`
	py-2
	px-3
	min-w-[2rem]
	min-h-[2rem]
	bg-orange-600
	border-transparent
	rounded-full
	font-bold
	text-sm
	text-white
	text-center
	tracking-[unset]
`;

const onClickHandler: React.MouseEventHandler = (e) => {};

const LoginButton = () => {
  return (
    <Wrapper role="button" onClick={onClickHandler}>
      Log In
    </Wrapper>
  );
};

export default LoginButton;
