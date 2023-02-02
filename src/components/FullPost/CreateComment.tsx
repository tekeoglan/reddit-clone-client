import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useQueryClient } from "react-query";
import tw from "twin.macro";
import { useFetchUser } from "../../api/auth";
import { useCreateComment } from "../../api/comments";
import { apiRoutes } from "../../constants/routes";

const Wrapper = tw.div`
	relative
	my-6
	mx-12
`;

const Container = tw.div`
	relative
	bg-white
	border
	border-solid
	border-black
	rounded
`;

const TextArea = tw.textarea`
	min-h-[122px]
	w-full
	py-2
	px-4
	!outline-none
	select-text
	whitespace-pre
	break-words
	font-normal
	text-xs
	text-black
`;

const BottomWrapper = tw.div`
	flex
	flex-row-reverse
	items-center
`;

const CommentButton = tw.button`
	my-1
	mx-2
	py-1
	px-2
	font-bold
	text-center
	text-xs
	text-white
	bg-gray-600
	border
	rounded-full
`;

const CreateComment: React.FC<{ postId: number }> = ({ postId }) => {
  const [text, setText] = useState<string>("");
  const queryClient = useQueryClient();
  const { data, isSuccess: userSuccess } = useFetchUser();
  const createCommentMutate = useCreateComment();

  const changeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setText(() => e.target.value);
  };

  const onSubmitHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    if (!text || !userSuccess || createCommentMutate.isLoading) return;
    const response = await createCommentMutate.mutateAsync({
      userId: data.user.user_id,
      postId: postId,
      text: text,
    });

    if (response.status === 201) {
      setText("");
      queryClient.refetchQueries({
        queryKey: apiRoutes.getPost(postId.toString()),
      });
    }
  };

  return (
    <Wrapper>
      <Container>
        <TextArea
          placeholder="What are your thoughts?"
          spellCheck={true}
          onChange={changeHandler}
          value={text}
        ></TextArea>
        <BottomWrapper>
          <CommentButton role="button" onClick={onSubmitHandler}>
            Comment
          </CommentButton>
        </BottomWrapper>
      </Container>
    </Wrapper>
  );
};

export default CreateComment;
