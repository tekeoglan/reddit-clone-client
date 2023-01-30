import tw from "twin.macro";
import { FormType } from "./index";

export interface LoginFormProps {
  onFormTypeChange: () => void;
  formType: FormType;
}

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

const LoginForm: React.FC<LoginFormProps> = ({
  onFormTypeChange,
  formType,
}) => {
  return formType === "LogIn" ? (
    <Wrapper>
      <Field>
        <Input name="username" />
        <Label htmlFor="loginUsername">User Name</Label>
      </Field>
      <Field>
        <Input name="password" />
        <Label htmlFor="loginPassword">Password</Label>
      </Field>
      <Field>
        <Button type="submit">Log In</Button>
      </Field>
      <BottomText>
        New to Reddit?
        <BottomLink onClick={onFormTypeChange}>Sign Up</BottomLink>
      </BottomText>
    </Wrapper>
  ) : (
    <Wrapper>
      <Field>
        <Input name="email" />
        <Label htmlFor="registerEmail">Email</Label>
      </Field>
      <Field>
        <Input name="username" />
        <Label htmlFor="registerUserName">User Name</Label>
      </Field>
      <Field>
        <Input name="password" />
        <Label htmlFor="registerPassword">Password</Label>
      </Field>
      <Field>
        <Button type="submit">Sign Up</Button>
      </Field>
      <BottomText>
        Already a redditor?
        <BottomLink onClick={onFormTypeChange}>Log In</BottomLink>
      </BottomText>
    </Wrapper>
  );
};

export default LoginForm;
