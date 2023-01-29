import { useParams } from "react-router-dom";
import tw from "twin.macro";
import { useGetPost } from "../../api/posts";
import Comment from "./Comment";

const Wrapper = tw.div`
	mt-4
	mr-4
	ml-3
	pr-4
	pb-4
	break-words
`;

const CommentSection = () => {
  const { id } = useParams();
  const { data, error } = useGetPost(id!);

  if (!data && error) return null;

  return (
    <Wrapper>
      {data?.comments.map((comment) => (
        <Comment
          key={comment.comment_id}
          author={comment.users.user_name}
          content={comment.text}
        />
      ))}
    </Wrapper>
  );
};

export default CommentSection;
