import { useContext, useEffect } from "react"
import styled from "styled-components"
import { UserContext } from "~/context"
import { fetchUser } from "~/utils"

export const UserCard = () => {
  const { user, setUser } = useContext(UserContext)

  // Default user
  useEffect(() => {
    fetchUser("octocat").then(result => {
      if (result !== null) setUser(result)
    })
  }, [])

  return <StyledUserCard>{user.name}</StyledUserCard>
}

const StyledUserCard = styled.div``
