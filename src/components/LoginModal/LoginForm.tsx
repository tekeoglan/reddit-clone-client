import tw from "twin.macro";
import { FormType } from "./index";
import { z } from "zod";
import {
  FocusEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";

const Wrapper = tw.form`
	w-[280px]
	bg-white
`;

const Field = tw.fieldset`
	relative
	mt-4
	max-w-[280px]
`;

const Input = tw.input`
	pt-5
	pb-2
	pl-4
	pr-9
	w-full
	h-11
	rounded-[100px]
	border
	border-solid
	hover:border-blue-500
`;

const Label = tw.label`
	absolute
	top-1
	left-4
	w-[250px]
	h-4
`;

const Button = tw.button`
	relative
	mt-2
	px-4
	w-full
	h-10
	min-h-[35px]
	max-w-[392px]
	min-w-[155px]
	overflow-hidden
	rounded-full
	!bg-orange-600
	font-bold
	text-xs
	text-white
	text-center
	hover:!bg-orange-500
`;

const BottomText = tw.div`
	relative
	mt-4
	font-normal
	text-xs
	text-black
`;

const BottomLink = tw.a`
	font-bold
	text-blue-600
	underline
	capitalize
	hover:cursor-pointer
`;

const ErroMessage = tw.span`
	font-light
	text-xs
	text-red-600
`;

export interface LoginFormProps {
  onFormTypeChange: () => void;
  formType: FormType;
}

type ParseState = { success: boolean; message: string };

const userNameSchema = z
  .string()
  .min(4, { message: "*username musn't be lower than 4 characters" })
  .max(12, { message: "*username musn't be greater than 12 characters" });

const passwordSchema = z
  .string()
  .min(6, { message: "*password musn't be lower than 6 characters" })
  .max(12, { message: "*password musn't be greater than 12 characters" });

const emailSchema = z.string().email({ message: "*invalid email" });

const LoginForm: React.FC<LoginFormProps> = ({
  onFormTypeChange,
  formType,
}) => {
  const [userNameState, setUserNameState] = useState<ParseState>({
    success: false,
    message: "",
  });

  const [passwordState, setPasswordState] = useState<ParseState>({
    success: false,
    message: "",
  });

  const [emailState, setEmailState] = useState<ParseState>({
    success: false,
    message: "",
  });

  const onUserNameBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    const parse = userNameSchema.safeParse(e.target.value);

    if (!parse.success)
      return setUserNameState((prev) => {
        return {
          ...prev,
          success: parse.success,
          message: parse.error.issues[0]?.message,
        };
      });

    return setUserNameState((prev) => {
      return { ...prev, success: parse.success };
    });
  };

  const onPasswordBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    const parse = passwordSchema.safeParse(e.target.value);

    if (!parse.success)
      return setPasswordState((prev) => {
        return {
          ...prev,
          success: parse.success,
          message: parse.error.issues[0]?.message,
        };
      });

    return setPasswordState((prev) => {
      return { ...prev, success: parse.success };
    });
  };

  const onEmailBlurHandler: FocusEventHandler<HTMLInputElement> = (e) => {
    const parse = emailSchema.safeParse(e.target.value);

    if (!parse.success)
      return setEmailState((prev) => {
        return {
          ...prev,
          success: parse.success,
          message: parse.error.issues[0]?.message,
        };
      });

    return setEmailState((prev) => {
      return { ...prev, success: parse.success };
    });
  };

  const onLogInSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!userNameState.success && !passwordState.success) return;

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
  };

  const resetStates: MouseEventHandler<HTMLAnchorElement> = () => {
    setUserNameState(() => {
      return { success: false, message: "" };
    });
    setPasswordState(() => {
      return { success: false, message: "" };
    });
    setEmailState(() => {
      return { success: false, message: "" };
    });
  };

  return formType === "LogIn" ? (
    <Wrapper onSubmit={onLogInSubmitHandler}>
      <Field>
        <Input name="username" onBlur={onUserNameBlurHandler} />
        <Label htmlFor="loginUsername">User Name</Label>
      </Field>
      {!userNameState.success ? (
        <ErroMessage>{userNameState.message}</ErroMessage>
      ) : null}
      <Field>
        <Input type="password" name="password" onBlur={onPasswordBlurHandler} />
        <Label htmlFor="loginPassword">Password</Label>
      </Field>
      {!passwordState.success ? (
        <ErroMessage>{passwordState.message}</ErroMessage>
      ) : null}
      <Field>
        <Button type="submit">Log In</Button>
      </Field>
      <BottomText>
        New to Reddit?
        <BottomLink onClick={onFormTypeChange} onMouseDown={resetStates}>
          Sign Up
        </BottomLink>
      </BottomText>
    </Wrapper>
  ) : (
    <Wrapper>
      <Field>
        <Input name="email" onBlur={onEmailBlurHandler} />
        <Label htmlFor="registerEmail">Email</Label>
      </Field>
      {!emailState.success ? (
        <ErroMessage>{emailState.message}</ErroMessage>
      ) : null}
      <Field>
        <Input name="username" onBlur={onUserNameBlurHandler} />
        <Label htmlFor="registerUserName">User Name</Label>
      </Field>
      {!userNameState.success ? (
        <ErroMessage>{userNameState.message}</ErroMessage>
      ) : null}
      <Field>
        <Input type="password" name="password" onBlur={onPasswordBlurHandler} />
        <Label htmlFor="registerPassword">Password</Label>
      </Field>
      {!passwordState.success ? (
        <ErroMessage>{passwordState.message}</ErroMessage>
      ) : null}
      <Field>
        <Button type="submit">Sign Up</Button>
      </Field>
      <BottomText>
        Already a redditor?
        <BottomLink onClick={onFormTypeChange} onMouseDown={resetStates}>
          Log In
        </BottomLink>
      </BottomText>
    </Wrapper>
  );
};

export default LoginForm;
