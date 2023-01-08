import { UserLoginState } from "../../state/user/actions";
import { useUserName } from "../../state/user/hooks";

const Home = () => {
  const user = {
    userName: "hasan",
    userAvatar: "http://",
    loginState: UserLoginState.LOGGED_IN,
  };
  const [userName, setUserName] = useUserName();
  setUserName(user.userName);

  return <h1>{userName}</h1>;
};

export default Home;
