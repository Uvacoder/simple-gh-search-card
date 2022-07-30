import { getGithubUser } from "../api/githubAPI";

export const fetchUser = async (user) => {
  const response = await getGithubUser(user);
  return response.data;
};
