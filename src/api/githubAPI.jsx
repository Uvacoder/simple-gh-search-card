import axios from "axios";

const GITHUB_API_URL = "https://api.github.com";
const GITHUB_USER_URL = `${GITHUB_API_URL}/users/`;

export const getGithubUser = axios.create({
  baseURL: GITHUB_USER_URL,
});
