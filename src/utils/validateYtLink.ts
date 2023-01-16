type ValidateYTLink = (ytLink: string) => [boolean, string];

export const validateYtLink: ValidateYTLink = (ytLink) => {
  const nocookiePrefix = "https://www.youtube-nocookie.com/embed/";
  const regex = new RegExp(`^https://youtu.be/`, "g");
  const isValid = regex.test(ytLink);
  if (!isValid) return [isValid, ""];

  const transformedLink = ytLink.replace(regex, nocookiePrefix);
  return [isValid, transformedLink];
};
