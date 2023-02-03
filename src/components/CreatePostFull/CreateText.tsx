import { MouseEventHandler, ChangeEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import tw from "twin.macro";
import { useFetchUser } from "../../api/auth";
import { useCreatePost } from "../../api/posts";
import ContentFooter from "./components/ContentFooter";
import ErrorMessage from "./components/ErrorMessage";
import Title from "./components/Title";

const Wrapper = tw.div`
	m-4
`;

const TextWrapper = tw.div`
	border
	border-solid
	rounded
	border-white
`;

const Text = tw.textarea`
	w-full
	min-h-[122px]
	p-2
	overflow-hidden
	resize-y
	!outline-none
	select-text
	whitespace-pre
	break-words
	caret-blue-600
	font-normal
	text-sm
	text-slate-900
	hover:(border border-solid border-black rounded)
	focus-visible:(border border-solid border-black rounded)
`;

const CreateText = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const postMutate = useCreatePost();
  const { data: userData, isSuccess: userFetched } = useFetchUser();
  const navigate = useNavigate();

  const titleChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setTitle(e.target.value);
  const textChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setText(e.target.value);
  const mouseDownHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    if (!title || !text || postMutate.isLoading || !userFetched) return;
    const response = await postMutate.mutateAsync({
      userId: userData.user.user_id,
      title: title,
      text: text,
    });
    if (response.status === 201) navigate("/");
  };

  return (
    <>
      <Wrapper>
        {postMutate.isError ? (
          <ErrorMessage message={postMutate.error.message} />
        ) : null}
        <Title
          name="title"
          placeholder="Title"
          maxLength={240}
          rows={1}
          onChange={titleChangeHandler}
        />
        <TextWrapper>
          <Text
            name="text"
            placeholder="Text"
            spellCheck="true"
            onChange={textChangeHandler}
          />
        </TextWrapper>
      </Wrapper>
      <ContentFooter onMouseDown={mouseDownHandler} />
    </>
  );
};

export default CreateText;
