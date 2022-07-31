import { useContext, useEffect } from "react"
import styled from "styled-components"
import { UserContext } from "~/context"
import { fetchUser } from "~/utils"
import { Icon } from "~/components"

export const UserCard = () => {
  const { user, setUser } = useContext(UserContext)

  // Default user
  useEffect(() => {
    fetchUser("octocat").then(result => {
      if (result !== null) setUser(result)
    })
  }, [])

  const joinedDate =
    "Joined" +
    " " +
    new Date(user.created_at).getDate() +
    " " +
    new Date(user.created_at).toDateString().split(" ")[1] +
    " " +
    new Date(user.created_at).getFullYear()

  return (
    <StyledUserCard>
      <Avatar src={user.avatar_url} alt="profile picture" />
      <UserInfos>
        <Header>
          <h1>{user.name}</h1>
          <time dateTime={user.created_at}>{joinedDate}</time>
        </Header>
        <Login href={user.html_url} target="_blank" rel="noopener noreferrer">
          {user.login}
        </Login>
        <Bio>
          {user.bio !== null ? user.bio : <span>This profile has no bio</span>}
        </Bio>
        <Stats>
          <StatsItem>
            <h3>Repos</h3>
            <h4>{user.public_repos}</h4>
          </StatsItem>
          <StatsItem>
            <h3>Followers</h3>
            <h4>{user.followers}</h4>
          </StatsItem>
          <StatsItem>
            <h3>Following</h3>
            <h4>{user.following}</h4>
          </StatsItem>
        </Stats>
        <Details>
          <DetailsItem>
            <Icon iconName="location" />
            <p>
              {user.location !== null ? (
                user.location
              ) : (
                <span>Not available</span>
              )}
            </p>
          </DetailsItem>
          <DetailsItem
            className={user.twitter_username !== null ? "" : "opacity-50"}
          >
            <Icon iconName="twitter" />
            <p>
              {user.twitter_username !== null ? (
                user.twitter_username
              ) : (
                <span>Not available</span>
              )}
            </p>
          </DetailsItem>
          <DetailsItem>
            {user.blog !== null ? (
              <Icon iconName="website" />
            ) : (
              <span>
                <Icon iconName="website" />
              </span>
            )}
            <p>
              <a
                href={user.blog !== null ? user.blog : ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.blog !== null ? user.blog : <span>Not available</span>}
              </a>
            </p>
          </DetailsItem>
          <DetailsItem>
            <Icon iconName="company" />
            <p>
              {user.company !== null ? (
                user.company
              ) : (
                <span>Not available</span>
              )}
            </p>
          </DetailsItem>
        </Details>
      </UserInfos>
    </StyledUserCard>
  )
}

const StyledUserCard = styled.div`
  display: flex;
  gap: 3.7rem;
  padding: 4.4rem 4.8rem 4.8rem;
  background-color: ${({ theme }) => theme.bgSecondary};
  box-shadow: ${({ theme }) => theme.dropShadow};
  border-radius: 1.5rem;

  .opacity-50 {
    opacity: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    gap: 2.5rem;
    padding: 3.2rem 2.4rem 4.8rem;
  }
`

const Avatar = styled.img`
  width: 11.7rem;
  height: 11.7rem;
  border-radius: 50%;

  @media screen and (max-width: 512px) {
    width: 10rem;
    height: 10rem;
  }
`

const UserInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 512px) {
    flex-direction: column;
    align-items: center;
  }
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 700;
    font-size: 2.6rem;
    line-height: 3.9rem;
    color: ${({ theme }) => theme.txtBold};
  }

  time {
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.txtDate};
  }

  @media screen and (max-width: 512px) {
    flex-direction: column;
  }
`

const Login = styled.a`
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.txtHighlight};
  text-decoration: none;

  &::before {
    content: "@";
  }

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`

const Bio = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.txtPrimary};

  span {
    opacity: 75%;
  }
`

const Stats = styled.div`
  display: flex;
  margin-top: 3.2rem;
  padding: 1.6rem 3.2rem;
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 1rem;

  @media screen and (max-width: 512px) {
    width: 100%;
    gap: 2.4rem;
    text-align: center;
  }

  @media screen and (max-width: 384px) {
    flex-direction: column;
    text-align: start;
  }
`

const StatsItem = styled.div`
  flex-basis: 33.333333%;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  h3 {
    font-size: 1.3rem;
    line-height: 1.9rem;
    color: ${({ theme }) => theme.txtPrimary};
  }

  h4 {
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 3.3rem;
    color: ${({ theme }) => theme.txtBold};
  }

  @media screen and (max-width: 384px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const Details = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 1.6rem;
  column-gap: 6.2rem;
  margin-top: 3.7rem;
  list-style: none;

  @media screen and (max-width: 512px) {
    grid-template-columns: 1fr;
  }
`

const DetailsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  svg {
    min-width: 2rem;
    min-height: 2rem;
    max-width: 2rem;
    max-height: 2rem;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
        text-underline-position: under;
      }
    }
  }

  @media screen and (max-width: 512px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
