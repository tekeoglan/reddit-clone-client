import tw from "twin.macro";
import LoginModal from "../LoginModal";
import { useEffect, useState } from "react";
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
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();
  const fetchUserMutate = useFetchUser();
  const logOutMutate = useLogOut();

  const onLogInHandler: React.MouseEventHandler = () => setModalActive(true);
  const onLogoutHandler: React.MouseEventHandler = () =>
    logOutMutate.mutate({});

  useEffect(() => {
    fetchUserMutate.mutate({});
  }, []);

  if (logOutMutate.isSuccess) return navigate(0);

  return !fetchUserMutate.isSuccess ? (
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
