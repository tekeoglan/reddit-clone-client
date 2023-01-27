import tw from "twin.macro";
import Post from "../../components/Post";
import { useGetPostList } from "../../api/posts";
import { Fragment } from "react";
import { timeAgo } from "../../utils";
import usePostContentData from "../../components/Post/hooks/usePostContentData";
import Spinner from "../../components/Spinner";

const Wrapper = tw.section`
	w-1/2
`;

const Container = tw.div`
	w-full
`;

const PostsSection = () => {
  const { data, isLoading, error, hasNextPage, fetchNextPage } =
    useGetPostList();


  if (isLoading) return <Spinner />;

  if (error && !data) return null;

  return (
    <Wrapper>
      <Container>
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            {page.data.map((post) => (
              <Post
                key={post.post_id}
                voteCounter={post.upvotes_count}
                headerProps={{
                  poster: post.users.user_name,
                  timeStamp: timeAgo(post.time_stamp),
                }}
                titleProps={{
                  link: `/u/post/${post.post_id}`,
                  title: post.title,
                }}
                contentProps={usePostContentData(post)}
                footerProps={{
                  link: `/u/post/${post.post_id}`,
                  commentCounter: post._count.comments,
                }}
              />
            ))}
          </Fragment>
        ))}
      </Container>
    </Wrapper>
  );
};

export default PostsSection;
