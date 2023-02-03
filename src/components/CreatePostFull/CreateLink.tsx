import tw from "twin.macro";
import { MouseEventHandler, ChangeEventHandler, useState } from "react";
import ContentFooter from "./components/ContentFooter";
import Title from "./components/Title";
import ErrorMessage from "./components/ErrorMessage";
import { validateYtLink } from "../../utils";
import { useCreatePost } from "../../api/posts";
import { useFetchUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const Wrapper = tw.div`
	m-4
`;

const Url = tw.textarea`
	min-h-[66px]
	h-[66px]
	w-full
	mt-2
	py-2
	px-4
	font-normal
	text-sm
	text-black
	overflow-x-hidden
	break-words
	caret-blue-600
	resize-none
	!outline-none
	rounded
	hover:(border border-solid border-black rounded)
	focus-visible:(border border-solid border-black rounded)
`;

const CreateLink = () => {
  const [title, setTitle] = useState("");
  const [urlState, setUrlState] = useState({ url: "", error: "" });
  const postMutate = useCreatePost();
  const { data: userData, isSuccess: userFetched } = useFetchUser();
  const navigate = useNavigate();

  const titleChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setTitle(e.target.value);
  const urlChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setUrlState((prev) => {
      return { ...prev, url: e.target.value };
    });
  const mouseDownHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    if (!title || !urlState.url || postMutate.isLoading || !userFetched) return;
    const [isValid, transformedLink] = validateYtLink(urlState.url);
    if (!isValid) {
      setUrlState((prev) => {
        return { ...prev, error: "*invalid youtube link" };
      });
      return;
    }
    const response = await postMutate.mutateAsync({
      userId: userData.user.user_id,
      title: title,
      ytPath: transformedLink,
    });
    if (response.status === 201) navigate("/");
  };

  return (
    <>
      <Wrapper>
        {postMutate.isError ? (
          <ErrorMessage message={postMutate.error.message} />
        ) : null}
        {urlState.error ? <ErrorMessage message={urlState.error} /> : null}
        <Title
          name="title"
          placeholder="Title"
          maxLength={240}
          rows={1}
          onChange={titleChangeHandler}
        />
        <Url placeholder="Youtube Link" rows={1} onChange={urlChangeHandler} />
      </Wrapper>
      <ContentFooter onMouseDown={mouseDownHandler} />
    </>
  );
};

export default CreateLink;
