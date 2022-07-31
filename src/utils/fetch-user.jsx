import { getGithubUser } from "~/api"

export const fetchUser = async user => {
  try {
    const response = await getGithubUser.get(user)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    return null
  }
}
