import tw from "twin.macro";
import LoginModal from "../LoginModal";
import { createPortal } from "react-dom";
import { useState } from "react";

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
  const onClickHandler: React.MouseEventHandler = (e) => {
    setModalActive(true);
  };
  return (
    <Wrapper role="button" onClick={onClickHandler}>
      Log In
      {modalActive
        ? createPortal(
            <LoginModal />,
            document.querySelector("#root") || document.createElement("div")
          )
        : null}
    </Wrapper>
  );
};

export default LoginButton;
