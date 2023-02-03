import tw from "twin.macro";
import LoginModal from "../LoginModal";
import { useState } from "react";
import Portal from "../Portal";
import { useFetchUser, useLogOut } from "../../api/auth";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { data: user } = useFetchUser();
  const logOutMutate = useLogOut();
  const [modalActive, setModalActive] = useState(false);

  const onLogInHandler: React.MouseEventHandler = () => setModalActive(true);
  const onLogoutHandler: React.MouseEventHandler = async () => {
    if (logOutMutate.isLoading) return;
    const response = await logOutMutate.mutateAsync(null);
    if (response.status === 201) return navigate(0);
  };

  return !user ? (
    <>
      <Wrapper role="button" onClick={onLogInHandler}>
        Log In
      </Wrapper>
      {modalActive && (
        <Portal>
          <LoginModal onClose={() => setModalActive(false)} />
        </Portal>
      )}
    </>
  ) : (
    <Wrapper role="button" onClick={onLogoutHandler}>
      Log Out
    </Wrapper>
  );
};

export default LoginButton;
