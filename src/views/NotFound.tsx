import tw from "twin.macro";

const Wrapper = tw.div`
	flex
	flex-col
	justify-center
	items-center
`;

const Status = tw.h1`
	font-bold
	text-5xl
	text-gray-600
`;

const Text = tw.h2`
	font-semibold
	text-2xl
	text-gray-500
	uppercase
`;

const NotFound = () => {
  return (
    <Wrapper>
      <Status>404</Status>
      <Text>not found</Text>
    </Wrapper>
  );
};

export default NotFound;
