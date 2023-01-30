import tw from "twin.macro";
import LoginModalLayout from "./LoginModalLayout";
import LoginForm from "./LoginForm";
import { MouseEventHandler, useState } from "react";

export interface LoginModalProps {
  onClose: () => void;
}

export type FormType = "LogIn" | "SignUp";

const Wrapper = tw.div`
	font-medium
	text-xs
	text-slate-900
`;

const Container = tw.main``;

const InnerContainer = tw.div`
	flex
	flex-col
	flex-nowrap
	items-center
	justify-center
	max-w-[unset]
	h-[unset]
`;

const ContentWrapper = tw.div`
	flex
	flex-nowrap
`;

const ContentContainer = tw.div`
	self-center
	p-0
	max-w-[280px]
	w-full
`;

const TitleContainer = tw.div`
	w-[280px]
`;

const Title = tw.h1`
	mt-6
	text-xl
	text-black
	normal-case
`;

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [formType, setFormType] = useState<FormType>("LogIn");

  const onClickHandler = () => {
    if (formType === "LogIn") return setFormType("SignUp");
    if (formType === "SignUp") return setFormType("LogIn");
    return;
  };

  return (
    <LoginModalLayout onClose={onClose}>
      <Wrapper>
        <Container>
          <InnerContainer>
            <ContentWrapper>
              <ContentContainer>
                <TitleContainer>
                  <Title>{formType === "LogIn" ? "Log In" : "Sign Up"}</Title>
                </TitleContainer>
                <LoginForm
                  onFormTypeChange={onClickHandler}
                  formType={formType}
                />
              </ContentContainer>
            </ContentWrapper>
          </InnerContainer>
        </Container>
      </Wrapper>
    </LoginModalLayout>
  );
};

export default LoginModal;
