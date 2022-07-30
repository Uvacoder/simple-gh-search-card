import { getGithubUser } from "~/api";

export const fetchUser = async (user) => {
  const response = await getGithubUser(user);
  return response.data;
};
