import tw from "twin.macro";
import LoginModal from "../LoginModal";
import { useState } from "react";
import Portal from "../Portal";

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

const LoginButton = () => {
  const [modalActive, setModalActive] = useState(false);
  const onClickHandler: React.MouseEventHandler = () => setModalActive(true);

  return (
    <>
      <Wrapper role="button" onClick={onClickHandler}>
        Log In
      </Wrapper>
      {modalActive && (
        <Portal>
          <LoginModal onClose={() => setModalActive(false)} />
        </Portal>
      )}
    </>
  );
};

export default LoginButton;
