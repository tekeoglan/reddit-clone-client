import tw from "twin.macro";

const Error = tw.span`
	inline-block
	my-1
	p-1
	w-full
	font-semibold
	text-sm
	text-white
	rounded
	bg-red-500
`;

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <Error>{message}</Error>
);

export default ErrorMessage;
