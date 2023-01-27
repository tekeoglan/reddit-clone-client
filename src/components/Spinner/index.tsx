import tw from "twin.macro";

const Spinner = () => (
  <div tw="flex justify-center items-center">
    <div
      tw="animate-spin inline-block w-8 h-8 border-solid border-4 rounded-full border-orange-600 border-r-transparent"
      role="status"
    >
      <span tw="hidden">Loading...</span>
    </div>
  </div>
);

export default Spinner;
