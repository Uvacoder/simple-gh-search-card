import styled from "styled-components"
import { Icon } from "~/components"

export const Header = ({ onClick, theme }) => {
  return (
    <StyledHeader>
      <Logo href="/">Devfinder</Logo>
      <Button onClick={onClick}>
        <span>{theme === "light" ? "dark" : "light"}</span>
        <Icon iconName={theme === "light" ? "moon" : "sun"} />
      </Button>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3.6rem;
`

const Logo = styled.a`
  color: ${({ theme }) => theme.logo};
  font-size: 2.6rem;
  line-height: 3.9rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  color: ${({ theme }) => theme.toggle};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 200ms linear;

  &:hover {
    color: ${({ theme }) => theme.toggleHover};
  }

  span {
    font-size: 1.3rem;
    line-height: 1.9rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`
