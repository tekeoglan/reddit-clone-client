import tw from "twin.macro";
import { BasicLayout } from "../Layout";
import Comment from "../../components/Comment";
import Post from "../../components/Post";
import { useGetUserOverview } from "../../api/users";
import { useFetchUser } from "../../api/auth";
import Spinner from "../../components/Spinner";
import { useNavigate } from "react-router-dom";
import { timeAgo } from "../../utils";
import usePostContentData from "../../components/Post/hooks/usePostContentData";
import { useEffect } from "react";

const ErrorMessage = tw.h2`
	font-bold
	text-lg
	text-white
	text-center
	bg-red-500
	rounded
`;

const NoPostMessage = tw.h2`
	w-full
	h-[64px]
	font-semibold
	text-base
	text-center
	text-black
	rounded
`;

const Wrapper = tw.div`
	w-[640px]
`;

const Profile = () => {
  const { data: userData, isLoading: userLoading } = useFetchUser();

  const { data, isLoading, isError } = useGetUserOverview(
    userData?.user.user_id.toString(),
    !!userData
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoading && !userData) navigate("/");
  }, [userLoading, userData]);

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorMessage>Something Went Wrong</ErrorMessage>;

  return (
    <BasicLayout>
      <Wrapper>
        {data?.length === 0 ? (
          <NoPostMessage>You haven't posted anything yet.</NoPostMessage>
        ) : (
          data?.map((obj, i) =>
            obj.comment_id ? (
              <Comment
                key={i}
                postId={obj.post_id}
                poster={userData.user.user_name}
                postTitle={obj.posts.title}
                timeStamp={obj.time_stamp}
                text={obj.text}
              />
            ) : (
              <Post
                key={i}
                id={obj.post_id}
                voteCounter={obj.upvotes_count}
                headerProps={{
                  poster: userData.user.user_name,
                  timeStamp: timeAgo(obj.time_stamp),
                }}
                titleProps={{
                  link: `/post/${obj.post_id}`,
                  title: obj.title,
                }}
                contentProps={usePostContentData(obj)}
                footerProps={{
                  link: `/post/${obj.post_id}`,
                  commentCounter: 0,
                }}
              />
            )
          )
        )}
      </Wrapper>
    </BasicLayout>
  );
};

export default Profile;
